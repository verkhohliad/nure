<script>
  import { mapGetters } from 'vuex'

  import { GETTERS } from '../../common'
  import { formatDate } from '../../utils'
  import olympiad from '../../assets/img/olympiad.jpg'

  export default {
    name: 'MainNewsWidget',
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        news: GETTERS.GET_NEWS,
      }),
    },
    methods: {
      formatDate,
    },
  }
</script>

<template>
  <section class="blog-news">
    <h1 class="section-title black--text mb-4 display-0 text-xs-center">Новини</h1>
    <v-layout wrap>
      <v-flex xs12 sm6 md4 class="post" v-for="item in news" :key="item.id">
        <img :src=item.image alt="Зображення відсутнє." class="image">
        <!--<h6>{{ formatDate(item.date) }}</h6>-->
        <h6>
          <router-link to="" class="link">
            25 Січня, 2018
          </router-link>
        </h6>
        <h4><a href="#">{{ item.title }}</a></h4>
        <div class="description">
          <p> {{ item.description }} </p>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<style scoped>
  img {

  }
</style>

