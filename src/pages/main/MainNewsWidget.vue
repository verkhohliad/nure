<script>
  import { mapGetters } from 'vuex'

  import { GETTERS } from '../../common'
  import { formatDate } from '../../utils'
  import bgImage from '../../assets/img/testBG.jpg'
  import video from '../../assets/video/olympiad.mp4'

  export default {
    name: 'MainNewsWidget',
    data() {
      return {
        bgImage,
        video
      }
    },
    computed: {
      ...mapGetters({
        news: GETTERS.GET_NEWS
      })
    },
    methods: {
      formatDate
    }
  }
</script>

<template>
  <section class="news">
    <h1 class="section-title black--text mb-4 text-xs-center">Новини</h1>
      <v-layout wrap class="news-layout">
        <v-flex>
          <video controls>
            <source src='../../assets/video/olympiad.mp4' type="video/mp4">
            Your browser does not support the video.
          </video>
          <!--<h4 class="title"><a href="#">{{ item.title }}</a></h4>-->
          <!--<div class="description">-->
            <!--<p> {{ item.description }} </p>-->
          <!--</div>-->
          <!--<h6 class="date">-->
            <!--<router-link to="" class="link">-->
              <!--25 Січня, 2018-->
            <!--</router-link>-->
          <!--</h6>-->
        </v-flex>
      </v-layout>
  </section>
</template>

<style scoped>
  video {
    max-width: 100%;
  }
</style>

