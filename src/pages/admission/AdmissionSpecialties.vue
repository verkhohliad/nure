<script>
  import nureSpecialities from '../../assets/img/nure2018spec.jpg';

  export default {
    components: {},
    name: 'AdmissionSpecialities',
    data() {
      return {
        nureSpecialities,
      }
    },
    created() {},
    computed: {},
    methods: {},
  }
</script>

<template>
  <section>
    <h1 class="title">Спеціальності, за якими проводиться прийом на 1 курс до ХНУРЕ</h1>
    <div class="specialities-img">
      <img :src="nureSpecialities" alt="">
    </div>
    <a target="_blank" class="pdf-save-link" href="http://doc2pdf.pdf24.org/state.php?jobId=blog_2dd8ac5e581d948ab9b0196d803ab26d&lng=ru"><v-icon>fa-file-pdf-o</v-icon> зберегти цю сторінку в PDF</a>
  </section>
</template>

<style scoped>
</style>
