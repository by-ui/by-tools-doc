<template>
    <div class="home">
        <home-header></home-header>
        <div class="container">
            <mk-using class="full-width"></mk-using>
            <mk-babel class="full-width"></mk-babel>
            <ul class="s-item">
                <li class="title">WHY BY-TOOLS?</li>
                <li>
                    <p>
                        BY-TOOLS 消除了处理数组，数字，对象，字符串等的麻烦，从而使JavaScript或项目结构变得更加简易。
                    </p>
                </li>
                <li>
                    > FUNCTION 公共函数
                </li>
                <li>
                    > DATA 数据管理
                </li>
                <li>
                    > DATE 日期管理
                </li>
                <li>
                    > PHONE 手机号
                </li>
                <li>
                    > MONEY 货币
                </li>
            </ul>
            <ul class="s-item">
                <li class="title">Support</li>
                <li>
                    <p>Tested in Chrome 74-75, Firefox 66-67, IE 11, Edge 18, Safari 11-12, & Node.js 8-12.</p>
                </li>
            </ul>
            <ul class="s-item">
                <li class="title">Suggestion</li>
                <li>
                    <p>如果你有任何想法可以补充或者完善 by-tools 库的话，请将你的想法提交至 <a target="_blank" href="https://github.com/by-ui/by-tools/issues">ISSUE</a> 。</p>
                </li>
            </ul>

        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    import homeHeader from './components/home-header.vue';
    import mkUsing from './components/using.md';
    import mkBabel from './components/babel.md';

    @Component({
        components: {
            homeHeader,
            mkUsing,
            mkBabel
        }
    })
    export default class Home extends Vue {
    }
</script>
<style lang="scss" scoped>
    .home {
        background-color: #eee;
        height: 100%;
        overflow-y: scroll;
        .container {
            width: 80%;
            margin: 0 auto;
            margin-top: 40px;
            box-shadow: 0 4px 4px 4px #dadada;
            background-color: #fff;
            .full-width {
                width: 100%;
                /deep/ .highlight {
                    margin: 0;
                }
                /deep/ h1 {
                    padding: 20px;
                    font-size: 22px;
                    font-weight: 600;
                }
            }
            .s-item {
                margin: 0px 30px;
                padding: 20px 0;
                li {
                    color: #5f5f5f;
                    line-height: 32px;
                    &.title {
                        font-size: 24px;
                    }
                    p {
                        margin: 20px 0;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
</style>