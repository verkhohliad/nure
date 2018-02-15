<script>
  import './styles/index.scss'
  import TheHeader from './pages/layout/TheHeader'
  import TheFooter from './pages/layout/TheFooter'
  import { ROUTES } from './common'

  export default {
    components: { TheHeader, TheFooter },
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
    <TheHeader/>
    <router-view/>
    <TheFooter/>
  </v-app>
</template>

<style>
</style>
