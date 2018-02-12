<template>
  <v-app>
    <!--<h1>Сервер на даний час оновлюється. Просимо вибачення за незручності.</h1>-->
    <div v-if="loading">
      <MainLoadingComponent/>
    </div>

    <Header/>
    <router-view/>
    <Footer/>
  </v-app>
</template>

<script>
  import Header from './pages/layout/TheHeader'
  import Footer from './pages/layout/Footer'
  import MainLoadingComponent from './componentsOLD/MainLoadingComponent'

  import './styles/index.scss'

  export default {
    components: { Header, Footer, MainLoadingComponent },
    name: 'App',
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
