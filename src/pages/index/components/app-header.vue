<template>
    <div class="app-header">
        <a href="/"></a>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class Appheader extends Vue {
    }
</script>
<style lang="scss" scoped>
    .app-header {
        align-items: center;
        display: flex;
        padding: 20px;
        box-shadow: 0 0 10px #9da5ab;
        a {
            font-size: 26px;
            color: #5f5f5f;
            background-image: url("~@/assets/images/logo.svg");
            background-size: cover;
            background-repeat: no-repeat;
            width: 270px;
            height: 30px;
            margin: 10px 0;
        }
    }
</style>