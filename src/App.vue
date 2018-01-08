<template>
  <v-app id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </v-app>
</template>

<script>
  import Header from './containers/Header'
  import Footer from './containers/Footer'

  import './styles/index.scss'

  export default {
    components: { Header, Footer },
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
