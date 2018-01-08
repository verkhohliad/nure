<template>
  <v-footer class="test">
    <v-spacer></v-spacer>
    <ul>
      <li>Свяжитесь с нами</li>
      <li>Меню 2</li>
      <li>Меню 3</li>
    </ul>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {}
    },
    created() {

    },
    methods: {}
  }
</script>

<style scoped>
  .test {
    background: #05384d !important;
    color: #fff;
    height: 300px;
  }

</style>
