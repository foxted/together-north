import Vue from 'vue';
import SocialSharing from 'vue-social-sharing';
import VueClipboard from 'vue-clipboard2';

export default () => {
    Vue.use(SocialSharing);
    Vue.use(VueClipboard);
}
