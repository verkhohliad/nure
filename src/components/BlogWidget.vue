<template>
  <div class="blog-news">
    <h2>Новое в блоге</h2>
    <div class="post" v-for="item in items" :key="item.id">
      <div class="date">
        <h4>{{ item.date }}</h4>
      </div>
      <div>
        <p>{{ item.description }}</p>
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
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .blog-news {
    width: 100%;
    padding-left: 25px;
  }

  .blog-news h2 {
    display: block;
    background: #05384d;
    color: #fff;
    margin: 0;
    padding: 10px;
  }

  .blog-news .post {
    margin-top: 15px;
    display: flex;
    width: 100%;
  }
</style>
