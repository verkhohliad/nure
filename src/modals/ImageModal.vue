<script>
  import { mapGetters, mapActions } from 'vuex';

  import { GETTERS, ACTIONS } from '../common';

  export default {
    name: 'ImageModal',
    props: {
      image: String
    },
    data() {
      return {}
    },
    created() {
      console.log(this.image)
    },
    computed: {
      ...mapGetters({
        modalData: GETTERS.GET_IMAGE_MODAL,
      }),
    },
    methods: {
      ...mapActions({
        switchImageModal: ACTIONS.SWITCH_IMAGE_MODAL,
      }),
    },
  }
</script>

<template>
  <v-dialog v-model="modalData.show" persistent max-width="1000px">
    <v-card>
      <v-btn color="primary" flat @click="switchImageModal">Закрити</v-btn>
      <v-card-text>
        <div class="">
          <img :src="modalData.image" alt="">
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
</style>

