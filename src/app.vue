<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { phone, date, money } from 'by-tools';

    @Component
    export default class App extends Vue {
        mounted() {
            console.log(date.getCurrentWeekDays());
        }
    }
</script>
<style lang="scss" scoped>
    .app {
        height: 100%;
    }
</style>
