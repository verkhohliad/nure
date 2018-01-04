<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from './containers/Header';

  export default {
    components: { Header },
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
