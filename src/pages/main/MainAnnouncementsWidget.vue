<script>
  import {mapGetters} from 'vuex'

  import {GETTERS} from '../../common'

  export default {
    name: 'MainAnnouncementsWidget',
    computed: {
      announcements: () => {
        let announcements = store.getters.GET_ANNOUNCEMENTS || []

        if (announcements.length) {
          announcements = announcements.filter(a => !a.disabled)
        }
        return announcements
      }
    },
    methods: {
      openAnnouncement(item) {
        if (item.url !== '/') {
          this.$router.push({ path: 'admission', query: { component: item.value } })
        } else {
          this.$router.push({ path: 'announcements', query: { id: item.uid } })
        }
      }
    }
  }
</script>

<template>
  <section class="announcements">
    <h1 class="section-title white--text mb-4 text-xs-center">
      Оголошення</h1>
    <v-layout class="item-container" row wrap>
      <v-flex xs12 sm6 md4 class="item"
              @click="openAnnouncement(announcement)"
              v-for="announcement in announcements"
              :key="announcement.id">
        <img :src="announcement.img" alt="image">
        <div class="item-content">
          <h4>
            {{ announcement.title }}
          </h4>
        </div>
      </v-flex>
    </v-layout>
  </section>

</template>

<style scoped>
</style>
