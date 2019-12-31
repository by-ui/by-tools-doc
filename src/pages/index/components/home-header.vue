<template>
    <div class="home-header">
        <div class="container">
            <div class="left-dv">
                <img src="@/assets/images/logo.svg"
                     class="logo"
                     @click="handleClickLogo">
                <span>
                    <h3>BY-TOOLS</h3>
                    <h4>一个现代的JavaScript实用程序库，提供公共方法&相关正则等等。</h4>
                </span>
            </div>
            <div class="btn-group">
                <by-button type="primary"
                           size="large"
                           @click="handleClickDoc">Documentation</by-button>
                <by-button type="primary"
                           plain
                           size="large"
                           @click="handleClickUi">BY-UI</by-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class Home extends Vue {
        
        handleClickLogo() {
            window.location.reload();
        }

        handleClickDoc() {
            this.$router.push({
                name: 'doc'
            });
        }

        handleClickUi() {
            window.open('https://by-ui.github.io/by-ui-doc');
        }
    }
</script>
<style lang="scss" scoped>
    .home-header {
        box-shadow: 0 0 2.25rem #9da5ab;
        background-color: #fff;
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 25px 0;
            line-height: 2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left-dv {
                width: 70%;
                display: inline-flex;
                justify-content: flex-start;
                .logo {
                    width: 290px;
                    padding-right: 20px;
                    border-right: 2px solid #c5c5c5;
                    vertical-align: top;
                    cursor: pointer;
                }
                span {
                    font-size: 18px;
                    margin-left: 20px;
                    h3,
                    h4 {
                        color: #5f5f5f;
                    }
                }
            }
            .btn-group {
                button {
                    margin-left: 20px;
                }
            }
        }
    }
</style>