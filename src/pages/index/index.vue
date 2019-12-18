<template>
    <div class="index">
        <app-header></app-header>
        <div class="content row">
            <app-left></app-left>
            <div class="container col-sm-24 col-md-20" id="container">
                <div class="container-dv">
                    <by-date class="md"></by-date>
                    <by-phone class="md"></by-phone>
                    <by-money class="md"></by-money>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    import appHeader from "./components/app-header.vue";
    import appLeft from "./components/app-left.vue";

    import byDate from './markdown/byDate.md';
    import byPhone from './markdown/byPhone.md';
    import byMoney from './markdown/byMoney.md';

    @Component({
        components: {
            appHeader,
            appLeft,

            byDate,
            byPhone,
            byMoney,
        }
    })
    export default class Index extends Vue {
    }
</script>
<style lang="scss" scoped>
    .index {
        .content {
            padding: 25px 10px;
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