<script>
  import { mapGetters } from 'vuex'

  import { ACTIONS, MUTATIONS, GETTERS, ROUTES } from '../../common'

  export default {
    name: 'TheAnnouncement',
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        announcements: GETTERS.GET_ANNOUNCEMENTS
      })
    },
    created() {
      this.$scrollTo('.TheHeader', 700);
      this.announcement = this.$store.getters.GET_ANNOUNCEMENT_BY_ID(this.$route.query.id);
    },
  }
</script>

<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <v-container class="TheAnnouncement">
      <h1 class="section-title">{{announcement.title}}</h1>
      <v-flex xs12 sm6 md4 class="TheAnnouncement-img text-center w-100">
        <img :src="announcement.img" alt="Announcement">
      </v-flex>
      <v-flex xs12 sm6 md8 class="TheAnnouncement-description">
        <!--<p v-if="announcement.description.length>100" class="subheading"-->
           <!--v-for="item in announcement.description.split('.')">{{item + '.'}}</p>-->
        <p class="subheading">
          {{announcement.description}}
        </p>
      </v-flex>
    </v-container>
  </transition>
</template>

<style scoped>
</style>

