<script>
  import { mapGetters } from 'vuex'

  import { GETTERS } from '../../common'
  import { formatDate } from '../../utils'

  export default {
    name: 'MainNewsWidget',
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
    <div class="post"
         v-for="item in news"
         :key="item.id">
      <div class="date">
        <time>{{ formatDate(item.date) }}</time>
        <h4><a href="#">{{ item.title }}</a></h4>
      </div>

      <div class="description">
        <p> {{ item.description }} </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

