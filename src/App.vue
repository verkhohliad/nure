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

</style>
