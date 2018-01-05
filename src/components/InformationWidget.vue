<template>
  <div class="item-container">
    <div class="item" v-for="item in items" :key="item.id"
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
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 auto;
  }

  .item {
    margin: 4%;
    width: 25%;
  }

  .item img {
    width: 300px;
  }

</style>
