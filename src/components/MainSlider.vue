<template>
  <div class="slider">
    <v-carousel hide-delimiters interval="80000">
      <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i">
        <div class="slider-content">
          <h1 class="title">{{item.title}}</h1>
          <p class="description ">{{item.description}}</p>
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
            title: 'Вступ до ХНУРЕ для навчання в магістратурі',
            description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
            '\n'
          },
          {
            src: schoolImg,
            title: 'Вступ до ХНУРЕ після 11 класу',
            description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
            '\n'
          },
          {
            src: sliderThree,
            title: '',
            description: ''
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .slider-content {
    position: absolute;
    top: 250px;
    background: rgba(1, 1, 1, 0.7);
    width: 100%;
    height: 150px;
    z-index: 2;
    color: #fff;
  }
  .slider-content .title {
    margin: 20px 0;
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
