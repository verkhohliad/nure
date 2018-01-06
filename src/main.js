import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import VueYouTubeEmbed from 'vue-youtube-embed'
import App from './App';
import router from './router'


Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, VueYouTubeEmbed }
});
