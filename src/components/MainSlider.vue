<template>
  <div class="slider">
    <v-carousel hide-delimiters interval="80000">
      <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i">
        <div class="slider-content">
          <h1 class="title">{{item.description}}</h1>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  import masterImg from '../../img/slider-images/first.jpg';
  import schoolImg from '../../img/slider-images/second.jpg';
  import sliderThree from '../../img/third.jpg';

  export default {
    name: 'MainSlider',
    data: function () {
      return {
        items: [
          {
            src: masterImg,
            description: 'Вступ до ХНУРЕ для навчання в магістратурі',
          },
          {
            src: schoolImg,
            description: 'Вступ до ХНУРЕ після 11 класу',
          },
          {
            src: sliderThree,
            description: '',
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .slider-content {
    position: absolute;
    top: 45vh;
    background: rgba(1, 1, 1, 0.7);
    width: 100%;
    line-height: 30vh;
    height: 30vh;
    z-index: 2;
    color: #fff;
  }
  .slider-content .title {
    margin: 20px 0;
    font-size: 25px !important;
  }
  .slider-content .description {
    font-size: 16px;
    padding: 5px 2%;
  }

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
    height: 60vh;
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
  }

</style>
