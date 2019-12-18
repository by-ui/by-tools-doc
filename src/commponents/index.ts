import Vue, { PluginObject } from 'vue';
import DemoBox from './demobox/index.vue'; // md文件代码块

const Components: PluginObject<never> = {
    install(Vue) {
        Vue.component('demo-box', DemoBox);
    }
}

Vue.use(Components);
