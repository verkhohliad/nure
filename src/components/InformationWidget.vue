<template>
  <div class="item-container">
    <div class="item" v-for="item in items" :key="item.id">
      <img :src="item.img" alt="image">
      <div class="item-content">
        <h4>{{ item.title }}</h4>
        <div>
          <p>{{ item.description }}</p>
          <p class="continued">...</p>
          <v-btn class="read-more-button" dark>{{item.button}}</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InformationWidget',
    props: {
      info: Array
    },
    data() {
      return {
        items: []
      }
    },
    created() {
      this.items = this.info;
    }
  }
</script>

<style scoped>
  .item-content {
    padding: 2%;
  }

  .item h4 {
    font-size: 19px;
    margin-top: 15px;
    height: 50px;
    max-height: 50px;
  }

  .item-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 auto;
    border-bottom: 2px solid #e1e1e1;
    padding: 2%;
  }

  .item p {
    font-size: 17px;
    height: 50px;
    max-height: 50px;
    overflow: hidden;
    margin: 0;
  }

  .item {
    overflow: hidden;
    margin: 10px 4%;
    width: 25%;
    border: 1px solid #e1e1e1;
    padding-bottom: 1%;
  }

  .item img {
    width: 100%;
  }

  .item .continued {
    height: 20px;
    font-size: 17px;
    padding-bottom: 10%;
    border-bottom: 2px solid #e1e1e1;
  }

  .item .read-more-button {
    margin-top: 5%;
    background-color: #032735 !important;
  }

</style>
