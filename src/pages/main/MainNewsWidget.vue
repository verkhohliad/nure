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
  <div class="blog-news">
    <h4 class="title">Новини</h4>
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
  </div>
</template>

<style scoped>
</style>

