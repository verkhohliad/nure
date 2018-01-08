<template>
  <div class="container">
    <InformationWidget :info="information"/>
    <section class="second-container">
      <div class="nure-video">
        <youtube video-id="hT_nvWreIhg"></youtube>
        <div class="description">
          <p> Video description...</p>
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
    components: { BlogWidget, InformationWidget },
    name: 'MainPage',
    data() {
      return {
        information: [
          {
            id: 1,
            img: firstImg,
            title: 'ЗАПИТАННЯ КОНТРАКТНОЇ ФОРМІ НАВЧАННЯ В ХНУРЕ',
            description: 'Зачисление в ряды студентов высшего учебного заведения – всегда волнительный процесс, во время которого даже самые уверенные. ',
            button: 'Читати більше...'
          },
          {
            id: 2,
            img: secondImg,
            title: 'РОЗКЛАД ВСТУПНИХ ІСПИТІВ В ХНУРЕ 2017',
            description: 'Расписание вступительных экзаменов ХНУРЭ и дополнительных вступительных экзаменов для поступления',
            button: 'Читати більше...'
          },
          {
            id: 3,
            img: thirdImg,
            title: 'ПРАВИЛА І ПОРЯДОК ПОДАЧІ ДОКУМЕНТІВ В ХНУРЕ',
            description: 'Регистрация электронных кабинетов поступающих и загрузка приложений к документам о ',
            button: 'Читати більше...'
          }
        ],
        blogNews: [
          {
            id: 1,
            date: '05 OCT',
            title: 'First description...',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "'
          },
          {
            id: 2,
            date: '05 OCT',
            title: 'Second description...',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
          },
          {
            id: 3,
            date: '05 OCT',
            title: 'Third description...',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "'
          },
        ]
      }
    },
    created: function () {

    },
    methods: {}
  }
</script>

<style scoped>


.item img{
  margin-bottom:10px;
}


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
body{
  font-family:CenGot;
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

  .item p{
  overflow: hidden;
  max-height: 50px;
  }

  .nure-video .description p {
  text-align: start;
  font-size: 19px;
    display: inline-flex;
}
  
</style>
