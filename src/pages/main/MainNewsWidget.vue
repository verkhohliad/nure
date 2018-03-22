<script>
  import { mapGetters } from 'vuex'

  import { GETTERS } from '../../common'
  import { formatDate } from '../../utils'
  import testBg from '../../assets/img/testBG.jpg';

  export default {
    name: 'MainNewsWidget',
    data() {
      return {
        bgImg: testBg
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
    <h1 class="section-title black--text mb-4 display-0 text-xs-center">Новини</h1>
      <v-layout wrap class="news-layout">
        <v-flex xs12 sm6 md4 class="post" v-for="item in news" :key="item.id">
          <!--<img :src=item.image alt="Зображення відсутнє." class="image">-->
          <!--<h6>{{ formatDate(item.date) }}</h6>-->
          <h4 class="title"><a href="#">{{ item.title }}</a></h4>
          <div class="description">
            <p> {{ item.description }} </p>
          </div>
          <h6 class="date">
            <router-link to="" class="link">
              25 Січня, 2018
            </router-link>
          </h6>
        </v-flex>
      </v-layout>
  </section>
</template>

<style scoped>
  img {

  }
</style>

