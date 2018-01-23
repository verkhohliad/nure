<template>
  <div class="loading">
    <v-progress-circular class="loading-spinner" indeterminate color="grey lighten-4"></v-progress-circular>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'MainLoadingComponent',
    data() {
      return {}
    },
    beforeCreate() {

    },
    created() {

    },
    computed: {},
    methods: {}
  }
</script>

<style scoped>
  .loading {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.45);
  }

  .loading-spinner {
    margin-top: 300px;
    height: 100px !important;
    width: 100px !important;
    z-index: 2;
  }

</style>
