<template>
  <v-app id="app">
    <div v-if="loading">
      <MainLoadingComponent />
    </div>
    <Header />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
  import Header from './containers/Header'
  import Footer from './containers/Footer'
  import MainLoadingComponent from './components/MainLoadingComponent'

  import './styles/index.scss'

  export default {
    components: { Header, Footer, MainLoadingComponent },
    name: 'app',
    data() {
      return {
        loading: true
      }
    },
    beforeCreate() {

    },
    created() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  }
</script>

<style>

</style>
