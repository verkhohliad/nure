import Vue from 'vue'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import * as VueGoogleMaps from 'vue2-google-maps'

import router from './router'
import App from './App'
import store from './stores/configureStore'

Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App, VueYouTubeEmbed }
});
