<script>
  import { mapGetters } from 'vuex'

  import { GETTERS } from '../../common'

  export default {
    name: 'MainAnnouncementsWidget',
    computed: {
      ...mapGetters({
        announcements: GETTERS.GET_ANNOUNCEMENTS,
      }),
    },
  }
</script>

<template>
  <section class="announcements">
    <h1 class="section-title white--text mb-4 display-0 text-xs-center">
      Оголошення</h1>
    <v-layout class="item-container" row wrap>
      <div class="item"
           v-for="announcement in announcements"
           :key="announcement.id">
        <img :src="announcement.img" alt="image">
        <div class="item-content">
          <h4>{{ announcement.title }}</h4>
        </div>
      </div>
    </v-layout>
  </section>

</template>

<style scoped>
</style>
