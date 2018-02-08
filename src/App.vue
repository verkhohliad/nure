<template>
  <v-app id="app">
    <h1>Сервер на даний час оновлюється. Просимо вибачення за незручності.</h1>
    <!--<div v-if="loading">-->
      <!--<MainLoadingComponent />-->
    <!--</div>-->
    <!--<Header />-->
    <!--<router-view />-->
    <!--<Footer />-->
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

  h1 {
    margin-top: 150px;
  }
</style>
