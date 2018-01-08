import Vue from 'vue'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'

import VueYouTubeEmbed from 'vue-youtube-embed'
import App from './App';
import router from './router'
import store from './stores/configureStore';


Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App, VueYouTubeEmbed }
});
