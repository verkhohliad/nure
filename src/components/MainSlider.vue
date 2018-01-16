<template>
  <div class="slider">
    <v-carousel interval="8000">
      <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  import nureImg from '../../img/first.jpg';
  import sliderTwo from '../../img/second.jpg';
  import sliderThree from '../../img/third.jpg';

  export default {
    name: 'MainSlider',
    data: function () {
      return {
        items: [
          {
            src: nureImg
          },
          {
            src: sliderTwo
          },
          {
            src: sliderThree
          }
        ]
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
    color: #fff;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .slider {
    display: flex;
    height: 400px;
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
  }

</style>
