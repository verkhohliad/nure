<template>
  <div class="blog-news">
    <h4 class="title">Новини</h4>
    <div class="post" v-for="item in items" :key="item.id">
      <div class="date">
        <time>{{ item.date }}</time>
        <h4><a href="#">{{ item.title }}</a></h4>
      </div>

      <div class="description">
        <p> {{ item.description }} </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlogWidget',
    props: {
      info: Array
    },
    data: function () {
      return {}
    },
    created: function () {
      this.items = this.info;
    }
  }
</script>

<style scoped>

</style>

