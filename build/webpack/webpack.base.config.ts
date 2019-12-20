const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const MarkdownItContainer = require('markdown-it-container');
const markdownItAnchor = require('markdown-it-anchor');

const slugify = require('transliteration').slugify;
const utils = require('./tools/utils');
const striptags = require('./tools/strip-tags');

const mode = process.env.ENV;
const isProduction = (mode === "production");

//开发环境下不单独提取css
const styleLoader =
    mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader';

module.exports = {
    entry: {
        index: [path.resolve("src/index.ts")]
    },
    externals: {
        'vue': 'Vue',
    },
    output: {
        path: path.resolve('dist'),
        publicPath: "/",
    },
    resolve: {
        alias: {
            "@": path.resolve("src"),
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true
                        }
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsxSuffixTo: [/\.vue$/],
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    styleLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    styleLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
            , {
                test: /\.(png|jpe?g|gif|svg)$/,
                include: /images/,
                loader: "url-loader",
                query: {
                    limit: 1,
                    name: "asset/images/[hash:16].[ext]"
                }
            },
            {
                test: /\.(ttf|woff2?|eot|svg)$/,
                include: /font/,
                loader: "url-loader",
                query: {
                    limit: 1,
                    name: "asset/fonts/[name].[hash:7].[ext]"
                }
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader'
                    },
                    {
                        loader: 'vue-markdown-loader/lib/markdown-compiler',
                        options: {
                            raw: true,
                            preprocess: (MarkdownIt, source) => {
                                MarkdownIt.renderer.rules.table_open = function () {
                                    return '<table class="table">'
                                }
                                // 对于代码块去除v-pre,添加高亮样式
                                MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
                                return source
                            },
                            use: [
                                [markdownItAnchor, {
                                    level: [2], // 添加超链接锚点的最小标题级别, 如: #标题 不会添加锚点
                                    slugify: slugify, // 自定义slugify, 我们使用的是将中文转为汉语拼音,最终生成为标题id属性
                                    permalinkClass: 'anchor',
                                    permalinkSymbol: 'Ψ',                                  
                                    permalink: true, // 开启标题锚点功能
                                    permalinkBefore: true, // 在标题前创建锚点
                                    permalinkHref: (slug, state) => `javascript:toAnchor('${slug}')`,
                                }],
                                [MarkdownItContainer, 'demojs', {
                                    validate: params => params.trim().match(/^demojs\s*(.*)$/),
                                    render: (tokens, idx) => {
                                        if (tokens[idx].nesting === 1) {
                                            return `<div class='highlight'>
                                            <div slot="demo"></div>`
                                        }
                                        return '</div>'
                                    }
                                }],
                                [MarkdownItContainer, 'chunk', {
                                    validate: params => params.trim().match(/^chunk\s*(.*)$/),
                                    render: (tokens, idx) => {
                                        if (tokens[idx].nesting === 1) {
                                            return `<h3 class='chunk'>`
                                        }
                                        return '</h3>'
                                    }
                                }]
                            ]
                        }
                    },
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: isProduction ? '[name].[contenthash].css' : '[name].css'
        }),
        new HtmlPlugin({
            filename: "index.html",
            template: path.resolve("src/index.html"),
            showErrors: true,
        })
    ]
}
