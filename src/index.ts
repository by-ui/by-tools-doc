import Vue from 'vue'
import router from './packages/vue-router';
import App from './app.vue';

/******** 公共UI及样式 ********/
import './packages/by-ui'
import 'by-ui-style/src/index.scss'
import './styles/main.scss';
import '../node_modules/highlightjs/styles/a11y-dark.css';
/*****************************/

/************ 组件 ************/
import './commponents/index.ts';
/*****************************/

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});