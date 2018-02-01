<template>
  <section>
    <h1 class="title">Спеціальності, за якими проводиться прийом на 1 курс до ХНУРЕ</h1>
    <div class="specialities-img">
      <img :src="nureSpecialities" alt="">
    </div>
    <a class="pdf-save-link" href=""><v-icon>fa-file-pdf-o</v-icon> зберегти цю сторінку в PDF</a>
  </section>
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
