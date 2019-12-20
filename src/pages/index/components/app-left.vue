<template>
    <div class="slide-bar by-sidebar col-sm-24 col-md-4">
        <by-input v-model="search"
                  placeholder="请输入内容"
                  class="search-input">
        </by-input>
        <nav class="by-nav">
            <div v-for="(item,index) in list"
                 :key="index">
                <h2 class="by-nav__title">{{ item.title }}</h2>
                <ul class="by-nav__items active">
                    <div>
                        <ul class="by-nav__child-items">
                            <li class="by-nav__child-item"
                                v-for="(groups,index) in item.groups"
                                :key="index">
                                <a class="by-nav__component"
                                   href="javascript:void(0)"
                                   @click="handleClickNavItem(groups)">{{ groups.title }}</a>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Watch } from "vue-property-decorator";
    import navList from './list';

    @Component
    export default class Appleft extends Vue {

        search = '';

        list = navList;

        toggleMenu(event: any) {
            const parentNode = event.target.parentNode
            if (parentNode.classList.contains('active')) {
                parentNode.classList.remove('active')
            } else {
                parentNode.classList.add('active')
            }
        }

        handleClickNavItem(item: any) {
            toAnchor(item.link);
        }

        /**
         * 根据输入的内容过滤关键词
         */
        filterListWithKeyword(keyWord: string) {
            keyWord = keyWord.toLowerCase();
            navList.map((item: any) => {
                if (item.title.toLowerCase().includes(keyWord)) {
                    this.list.push(item);
                } else {
                    item.groups.map((sitem: any) => {
                        if (sitem.title.toLowerCase().includes(keyWord)) {
                            this.list.push(item);
                        }
                    })
                }
            })
        }

        @Watch('search')
        onSearchChange(newVal: string) {
            if (newVal) {
                this.list = [];
                this.filterListWithKeyword(newVal);
            }
            else {
                this.list = navList;
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "by-ui-style/src/variables/index.scss";

    .by-sidebar {
        display: inline-block;
        margin: 32px 0;
        padding: 0;
        // max-width: 264px;
        color: #3f536e;
        background-color: #fff;
        border-right: 1px solid $grey-100;
        z-index: 99;
    }

    .search-input {
        padding: 0 24px 8px;
        margin-bottom: 20px;
        /deep/ input {
            border-radius: 0;
            border: medium none;
            border-bottom: 2px solid #8dabc4;
        }
    }

    .by-nav {
        font-size: 14px;

        &__title {
            padding: 0 24px 8px;
            color: #8dabc4;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        &__group {
            display: block;
            position: relative;
            padding: 10px 0 10px 24px;
            color: #2c405a;
            font-weight: normal;

            &:hover {
                color: $brand-blue-700;
            }
            i {
                position: absolute;
                top: 50%;
                right: 16px;
                margin-top: -7px;
                color: #a8c6df;
                font-size: 14px;
                transition: all 0.3s;
            }
            .active & {
                font-weight: bold;
            }
            .active & i {
                transform: rotate(-180deg);
            }
        }
        &__items {
            margin: 0 0 32px;
            font-size: 14px;
            font-weight: normal;
            line-height: 1.8;
        }
        &__item {
            position: relative;
        }
        &__child-items {
            display: none;

            .active & {
                display: block;
            }
        }
        &__page {
            display: block;
            position: relative;
            padding: 8px 24px;
            color: #3f536e;
            font-weight: normal;
            line-height: 1.5;
            cursor: pointer;

            &:after {
                content: "";
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 5px;
                height: 100%;
                background: #6190e8;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                box-shadow: 1px 0 12px 0 #6190e8;
            }

            &:hover {
                color: $brand-blue-400;
                background-color: rgba(236, 242, 252, 0.25);
            }
            &.active,
            &.router-link-active {
                background-color: rgba(236, 242, 252, 0.2);

                &:after {
                    display: inline-block;
                }
                &:hover {
                    color: #3f536e;
                }
            }
        }
        &__component {
            display: block;
            position: relative;
            padding: 10px 24px 10px 32px;
            color: #616367;
            font-size: 14px;

            &:after {
                content: "";
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 6px;
                height: 100%;
                background: #6190e8;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                box-shadow: 1px 0 12px 0 #6190e8;
            }
            &:hover {
                color: $brand-blue-400;
                background-color: rgba(236, 242, 252, 0.25);
            }
            &.active,
            &.router-link-active {
                background-color: rgba(236, 242, 252, 0.2);

                &:after {
                    display: inline-block;
                }
                &:hover {
                    color: #3f536e;
                }
            }
            span {
                padding-left: 6px;
                font-size: 12px;
                opacity: 0.6;
                // color: rgba(255,255,255,.6)
            }
        }
    }
    .by-nav__arrow {
        position: absolute;
        top: 18px;
        right: 12px;
        width: 16px;
        opacity: 0.25;
        margin: -4px 0 0;

        .active & {
            transform: rotate(180deg);
        }
    }
    .by-nsc,
    .by-nsc:focus,
    .by-nsc:hover,
    .by-nsc:active,
    .by-nsc:visited {
        color: #fff;
    }
</style>