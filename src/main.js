import Vue from 'vue'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueI18n from 'vue-i18n'

var Lang = require('vuejs-localization');
Lang.requireAll(require.context('./lang', true, /\.js$/));

import router from './router'
import App from './App'
import store from './stores/configureStore'

Vue.use(Lang);
Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.use(VueYouTubeEmbed);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App, VueYouTubeEmbed}
});
