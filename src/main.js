import Vue from 'vue';
import App from './views/app.vue';
import router from './router/router.js';
import store from './store/global.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/index.css';
import './css/common.scss';
import 'utils/filters';
import axios from 'utils/http.js';

import VueI18n from 'vue-i18n';
import i18nLang from './utils/vue-i18n/i18n-lang.js';

Vue.prototype.$http = axios;

Vue.use(ElementUI);
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: i18nLang.currentLang,
    messages: i18nLang.langes,
    silentTranslationWarn: true // 不显示il8n的 warning 
});

new Vue({
    store,
    i18n,
    router,
    render: h => h(App)
}).$mount('#app');
