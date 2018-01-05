<template>
  <v-app id="app">
    <Header/>
    <router-view/>
    <Footer />
  </v-app>
</template>

<script>
  import VueYouTubeEmbed from 'vue-youtube-embed'
  import Vue from 'vue'
  import Header from './containers/Header';
  import Footer from './containers/Footer';

  import('../node_modules/vuetify/dist/vuetify.min.css');

  Vue.use(VueYouTubeEmbed);
  export default {
    components: {Header, VueYouTubeEmbed, Footer},
    name: 'app'
  }
</script>

<style>
  html, head, body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    /*maybe 80% width here*/
  }
</style>
