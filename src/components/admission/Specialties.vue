<template>
  <div>
    <h2>Спеціальності, за якими проводиться прийом на 1 курс до ХНУРЕ</h2>
    <div class="specialities-img">
      <img :src="nureSpecialities" alt="">
    </div>
  </div>
</template>

<script>
  import nureSpecialities from '../../../img/nure2018spec.jpg';

  export default {
    components: {},
    name: 'Specialities',
    data() {
      return {
        nureSpecialities
      }
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

</style>
