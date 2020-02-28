<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    // import { date } from 'by-tools';

    @Component
    export default class App extends Vue {
        mounted() {
            // console.log(date.getCurrentWeekDays());
            // console.log(date.getDateRange('2020-01-01', '2020-01-31'));
        }
    }
</script>
<style lang="scss" scoped>
    .app {
        height: 100%;
    }
</style>
