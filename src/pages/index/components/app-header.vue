<template>
    <div class="app-header" @click="onHandellClickLogo">
        <router-link :to="'/'">
            <img src="@/assets/images/logo.svg"
                 alt="">
        </router-link>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class Appheader extends Vue {
        onHandellClickLogo(){
            const container = document.getElementById("container");
            container && container.scrollTo(0, 0);
        }
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
            width: 270px;
            height: 30px;
            margin: 10px 0;
            img {
                width: 100%;
            }
        }
    }
</style>