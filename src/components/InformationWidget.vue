<template>
  <div class="item-container">
    <div class="item" v-for="item in items">
      <img :src="item.img" alt="image">
      <h4>{{ item.title }}</h4>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InformationWidget',
    props: {
      info: Array
    },
    data: function () {
      return {
        items: []
      }
    },
    created: function () {
      this.items = this.info;
    }
  }
</script>

<style scoped>
  .item-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0 auto;
  }

  .item {
    margin: 25px;
    width: 30%;
  }

  .item img {
    width: 400px;
  }

</style>
