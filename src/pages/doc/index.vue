<template>
    <div class="index">
        <app-header></app-header>
        <div class="content row">
            <app-left></app-left>
            <div class="container col-xs-14 col-sm-20 col-md-20"
                 id="container">
                <div class="container-dv">
                    <by-function class="md"></by-function>
                    <by-data class="md"></by-data>
                    <by-date class="md"></by-date>
                    <by-phone class="md"></by-phone>
                    <by-money class="md"></by-money>
                    <by-string class="md"></by-string>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { phone, date, money, byfunction, bystring } from 'by-tools';

    import appHeader from "./components/app-header.vue";
    import appLeft from "./components/app-left.vue";

    import byFunction from './markdown/byFunction.md';
    import byData from './markdown/byData.md';
    import byDate from './markdown/byDate.md';
    import byPhone from './markdown/byPhone.md';
    import byMoney from './markdown/byMoney.md';
    import byString from './markdown/byString.md';

    @Component({
        components: {
            appHeader,
            appLeft,

            byFunction,
            byData,
            byDate,
            byPhone,
            byMoney,
            byString,
        }
    })
    export default class Index extends Vue { 

        mounted(){
            console.log(bystring.getQueryString('type'));
        }
    }
</script>
<style lang="scss" scoped>
    .index {
        .content {
            padding: 0px 10px;
            .container {
                padding: 25px 35px;
                overflow-y: scroll;
                height: calc(100vh - 110px);
                .md {
                    margin-bottom: 30px;
                }
                h4 {
                    margin-top: 10px;
                    margin-bottom: 20px;
                }
                /deep/ p {
                    margin: 20px 0;
                    margin-left: 20px;
                }
                /deep/ strong {
                    color: #3492ff;
                    font-weight: 600;
                }
                /deep/ blockquote {
                    border-left: 4px solid #3492ff;
                    padding-left: 10px;
                    margin: 30px 0;
                }
            }
        }
    }
</style>