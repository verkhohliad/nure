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
  <v-layout class="item-container" row wrap>
    <v-flex class="item" d-flex xs12 sm4 md4 child-flex
            v-for="announcement in announcements"
            :key="announcement.id">
      <img :src="announcement.img" alt="image">
      <div class="item-content">
        <h4>{{ announcement.title }}</h4>
        <div>
          <p>{{ announcement.description }}</p>
          <p class="continued">...</p>
          <v-btn class="read-more-button" dark>Читати більше...</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<style scoped>
</style>
