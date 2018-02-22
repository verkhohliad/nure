<script>
  import { mapGetters } from 'vuex'

  import { GETTERS } from '../../common'

  export default {
    name: 'TheSpecialities',
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters({
        specialities: GETTERS.GET_SPECIALITIES,
      }),
    },
    methods: {
    },
  }
</script>

<template>
  <div class="TheSpecialities">
    Specialities page
  </div>
</template>

<style scoped>
</style>

