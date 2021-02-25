<script>
  import './styles/index.scss'
  import TheHeader from './pages/layout/TheHeader'
  import TheFooter from './pages/layout/TheFooter'
  import TheModals from './modals/TheModals'
  import { ROUTES } from './common'

  export default {
    components: { TheHeader, TheFooter, TheModals },
    name: 'App',
    data() {
      return {
      }
    },
    beforeCreate() {
      // need to restore context from storage
      // so maybe will need to move it on 'created'
      this.$router.push(ROUTES.LOADING)
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    beforeUpdate() {
    },
    updated() {
      this.$nextTick(() => {
        // Код, который будет запущен только после
        // обновления всех представлений
      })
    },
    activated() {
    },
    deactivated() {
    },
    beforeDestroy() {
    },
    destroyed() {
    },
    errorCaptured() {
    },
  }
</script>

<template>
  <v-app class="App">
    <div class="temp-content">
    <h1>Шановні абітурієнти!</h1>
    <p>Реєстрація на Всеукраїнську олімпіаду
    Харківського національного університету радіоелектроніки
    для професійної орієнтації вступників
    на основі повної загальної середньої освіти розпочнеться з 1 березня 2021 року.
    </p>
    </div>


    <!--    <TheHeader/>-->
<!--    <router-view/>-->
<!--    <TheFooter/>-->

<!--    <TheModals/>-->
  </v-app>
</template>

<style>
</style>
