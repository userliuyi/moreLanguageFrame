import zh from './i18n-lang-zh.js';
import en from './i18n-lang-en.js';

import eleZhLocale from 'element-ui/lib/locale/lang/en';
import eleEnLocale from 'element-ui/lib/locale/lang/zh-CN';


let langes = {
    'zh': Object.assign(zh, eleZhLocale),
    'en': Object.assign(en, eleEnLocale),
    // 'fr': Object.assign(fr, eleFrLocale),
    // 'km': Object.assign(km, eleEnLocale),
    // 'es': Object.assign(es, eleEsLocale)
};
export default {
    currentLang: 'zh',
    langes: langes
};
