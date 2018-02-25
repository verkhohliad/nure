<script>
  import { mapGetters, mapActions } from 'vuex'

  import { ACTIONS, GETTERS } from '../../common'

  export default {
    name: 'AlertErrorModal',
    props: {
      show: Boolean,
      text: String,
    },
    data() {
      return {}
    },
  }
</script>

<template>
  <v-layout row justify-center>
    <v-dialog v-model="show" width="80%">
      <v-card class="pa-4">
        <v-alert type="error" :value="true" class="error_alert">
          {{ text }}
        </v-alert>
        <v-btn class="ok_button" @click="$emit('hideAlertErrorModal')">Ok</v-btn>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<style scoped>
  .ok_button {
    width: 40%;
    margin: 0 auto;
  }
</style>

