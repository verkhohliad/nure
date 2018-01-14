<template>
  <div class="item-container">
    <div class="item" v-for="item in items" :key="item.id">
      <img :src="item.img" alt="image">
      <h4>{{ item.title }}</h4>
      <div>
        <p>{{ item.description }}</p>
        <p class="continued">...</p>
        <button> {{item.button}}</button>
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

  .item h4 {
    font-size: 19px;
    margin-top: 15px;
  }

  .item-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 auto;
  }

  .item p {
    font-size: 17px;
    max-height: 70px;
    overflow: hidden;
    margin: 0;
  }

  .item {
    overflow: hidden;
    margin: 10px 4%;
    width: 25%;
  }

  .item img {
    width: 300px;
  }

  .item .continued {
    font-size: 17px;
    margin-bottom: 10px;
  }

  .item button {
    background-color: #f3f3f3;
    outline: 0;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f3f3f3), color-stop(50%, #dddddd), color-stop(50%, #d2d2d2), color-stop(100%, #dfdfdf));
    background-image: -webkit-linear-gradient(top, #f3f3f3 0%, #dddddd 50%, #d2d2d2 50%, #dfdfdf 100%);
    background-image: -moz-linear-gradient(top, #f3f3f3 0%, #dddddd 50%, #d2d2d2 50%, #dfdfdf 100%);
    background-image: -ms-linear-gradient(top, #f3f3f3 0%, #dddddd 50%, #d2d2d2 50%, #dfdfdf 100%);
    background-image: -o-linear-gradient(top, #f3f3f3 0%, #dddddd 50%, #d2d2d2 50%, #dfdfdf 100%);
    background-image: linear-gradient(top, #f3f3f3 0%, #dddddd 50%, #d2d2d2 50%, #dfdfdf 100%);
    border-right: 1px solid #dfdfdf;
    border-bottom: 1px solid #b4b4b4;
    border-right: 1px solid #dfdfdf;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 1px 0 0 white, 0 1px 0 0 #d5d5d5, 0 -1px 2px 1px #efefef;
    box-shadow: inset 0 1px 0 0 white, 0 1px 0 0 #d5d5d5, 0 -1px 2px 1px #efefef;
    color: #000;
    font-weight: bold;
    margin: 0;
    padding: 7px 0;
    text-shadow: 0 1px 1px #fff;
    width: 150px;
  }

  .item button:hover {
    background-color: #e5e5e5;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #e5e5e5), color-stop(50%, #d1d1d1), color-stop(50%, #c4c4c4), color-stop(100%, #b8b8b8));
    background-image: -webkit-linear-gradient(top, #e5e5e5 0%, #d1d1d1 50%, #c4c4c4 50%, #b8b8b8 100%);
    background-image: -moz-linear-gradient(top, #e5e5e5 0%, #d1d1d1 50%, #c4c4c4 50%, #b8b8b8 100%);
    background-image: -ms-linear-gradient(top, #e5e5e5 0%, #d1d1d1 50%, #c4c4c4 50%, #b8b8b8 100%);
    background-image: -o-linear-gradient(top, #e5e5e5 0%, #d1d1d1 50%, #c4c4c4 50%, #b8b8b8 100%);
    background-image: linear-gradient(top, #e5e5e5 0%, #d1d1d1 50%, #c4c4c4 50%, #b8b8b8 100%);
    -webkit-box-shadow: inset 0 1px 0 0 #f2f2f2, 0 1px 0 0 #c9c9c9, 0 -1px 2px 1px #e3e3e3;
    box-shadow: inset 0 1px 0 0 #f2f2f2, 0 1px 0 0 #c9c9c9, 0 -1px 2px 1px #e3e3e3;
    cursor: pointer;
  }

  .item button:active {
    -webkit-box-shadow: inset 0 0 30px 0 #999999, 0 1px 0 0 white;
    box-shadow: inset 0 0 30px 0 #999999, 0 1px 0 0 white;
  }
</style>
