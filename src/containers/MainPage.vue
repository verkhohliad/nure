<template>
  <div class="container">
    <InformationWidget :info="information"/>
    <section class="second-container">
      <div class="nure-video">
        <youtube video-id="PVdYbUIhJ1k"></youtube>
        <div class="description">
          <p>Посвячення в студенти ХНУРЕ 2017!</p>
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
    data() {
      return {
        information: [
          {
            id: 1,
            img: firstImg,
            title: 'ЗАПИТАННЯ КОНТРАКТНОЇ ФОРМІ НАВЧАННЯ В ХНУРЕ',
            description: 'Зарахування до лав студентів вищого навчального закладу - завжди хвилюючий процес, під час якого навіть самі впевнені. ',
            button: 'Читати більше...'
          },
          {
            id: 2,
            img: secondImg,
            title: 'РОЗКЛАД ВСТУПНИХ ІСПИТІВ В ХНУРЕ 2017',
            description: 'Розклад вступних іспитів ХНУРЕ і додаткових вступних випробувань для вступу',
            button: 'Читати більше...'
          },
          {
            id: 3,
            img: thirdImg,
            title: 'ПРАВИЛА І ПОРЯДОК ПОДАЧІ ДОКУМЕНТІВ В ХНУРЕ',
            description: 'Реєстрація електронних кабінетів вступників та завантаження додатків до документів.',
            button: 'Читати більше...'
          }
        ],
        blogNews: [
          {
            id: 1,
            date: '22 ЧЕР 2017',
            title: 'ОБРАЗОВАНИЕ В ТЕХНИКУМЕ И ПОСЛЕ ТЕХНИКУМА',
            description: 'Система освіти має комплексну структуру в кілька етапів. Зазвичай її можна розділити на три стадії: дошкільна, шкільна і вища освіта.'
          },
          {
            id: 2,
            date: '19 ЧЕР 2017',
            title: 'ПРАВИЛА ОТРИМАННЯ СТИПЕНДІЇ В ХНУРЕ',
            description: 'Що найприємніше в студентському житті? Можна було б сказати, що скільки людей - стільки і відповідей. Для кого-то - придбання знань, навичок, досвіду і професійного мислення. Для кого-то - заклад нових друзів, а для кого-то - студентські свята, волонтерство тощо Але всі погодяться, що отримання стипендії стало для них важливим аспектом студентського життя.'
          },
          {
            id: 3,
            date: '14 ЧЕР 2017',
            title: 'УМОВИ І ПОРЯДОК ЗДАЧІ ЗНО ДЛЯ ВИПУСКНИКІВ ВЕЧІРНЬОЇ ШКОЛИ',
            description: 'Говорячи про школу, в першу чергу ми представляємо маленьких учнів, що після закінчення школи виходять з неї подорослішали молодими людьми, починаючи свій "класичний" життєвий план. Однак також відомо, що не всі ситуації складаються однаково, не всі життя схожі одна на іншу.'
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
  .item img {
    margin-bottom: 10px;
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

  body {
    font-family: CenGot;
  }

  .container {

    /*padding: 50px 5%;*/
  }

  .second-container {
    display: flex;
    margin-top: 35px;
  }

  .nure-video {
    display: flex;
    flex-direction: column;
  }

  .item p {
    overflow: hidden;
    max-height: 50px;
  }

  .nure-video .description p {
    margin-top: 20px;
    text-align: start;
    font-size: 22px;
    display: inline-flex;
  }

</style>
