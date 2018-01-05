<template>
  <div class="container">
    <InformationWidget :info="information"/>
    <section class="second-container">
      <div class="nure-video">
        <youtube video-id="hT_nvWreIhg"></youtube>
        <div class="description">
          <p>Video description...</p>
        </div>
      </div>
      <BlogWidget :info="blogNews"/>
    </section>
  </div>
</template>

<script>
  import BlogWidget from '../components/BlogWidget';
  import InformationWidget from '../components/InformationWidget';


  import firstImg from '../../img/first.jpg';
  import secondImg from '../../img/second.jpg';
  import thirdImg from '../../img/third.jpg';


  export default {
    components: {BlogWidget, InformationWidget},
    name: 'MainPage',
    data: function () {
      return {
        information: [
          {
            id: 1,
            img: firstImg,
            title: 'First',
            description: 'First description...'
          },
          {
            id: 2,
            img: secondImg,
            title: 'Second',
            description: 'Second description...'
          },
          {
            id: 3,
            img: thirdImg,
            title: 'Third',
            description: 'Third description...'
          }
        ],
        blogNews: [
          {
            id: 1,
            date: '05 OCT',
            description: 'First description...'
          },
          {
            id: 2,
            date: '05 OCT',
            description: 'Second description...'
          },
          {
            id: 3,
            date: '05 OCT',
            description: 'Third description...'
          }
        ]
      }
    },
    created: function () {

    },
    methods: {}
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

  .container {

    /*padding: 50px 5%;*/
  }

  .second-container {
    display: flex;
    margin-top: 55px;
  }

  .nure-video {
    display: flex;
    flex-direction: column;
  }

  .nure-video .description {
    display: flex;
  }
</style>
