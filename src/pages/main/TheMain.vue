<script>
  import MainAnnouncementsWidget from './MainAnnouncementsWidget'
  import MainNewsWidget from './MainNewsWidget'
  import bgImg from '../../assets/img/test3.jpg'

  export default {
    name: 'TheMain',
    components: { MainAnnouncementsWidget, MainNewsWidget },
    data() {
      return {
        bgImg
      }
    },
    created() {
      this.$scrollTo('.TheHeader', 700)
    },
    computed: {},
    methods: {}
  }
</script>

<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <div class="TheMain" grid-list-md text-xs-center>
      <section class="parallax_section">
        <div class="parallax_section_content" :style="{ 'background-image': 'url(' + bgImg + ')' }">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="project-name white--text">Офіційна сторінка приймальної комісії
              Харківського національного університету радіоелектроніки</h1>
            <div class="project-subheading">Інформація про вступ до ХНУРЕ у 2018 році
            </div>
            <v-icon class="scroll-down-icon" v-scroll-to="{ el: '.greeting', offset: -70, duration: 1000 }">
              fa-chevron-down
            </v-icon>
          </v-layout>
        </div>
      </section>

      <section class="greeting">
        <h1 class="section-title black--text mb-4 display-0 text-xs-center">
          Шановні Абітурієнти!</h1>
        <div class="subheading mb-3 text-xs-center">
          <p>
            Вітаємо Вас на інформаційному порталі приймальної комісії Харківського національного університету
            радіоелектроніки.
            Ви зможете знайти найактуальнішу і повну інформацію щодо вступної кампанії до Харківського національного
            університету
            радіоелектроніки в 2018 році.
          </p>
          <p>
            Сторінка приймальної комісії ХНУРЕ дозволить Вам отримати інформацію про навчальну структуру закладу
            вищої освіти (ЗВО)
            і короткий опис спеціалізацій, за якими здійснюється підготовка.
            Тут зібрана і представлена в зручному вигляді інформація, яка необхідна
            Абітурієнтам при вступі до ХНУРЕ на підставі сертифікатів зовнішнього незалежного
            оцінювання (ЗНО) на перший курс; інформація для вступників в ХНУРЕ після технікуму
            на підставі диплома молодшого спеціаліста; інформація для вступників на заочну форму
            навчання; інформація для вступників в ХНУРЕ для навчання в магістратурі.
          </p>
          <p>
            Тут Ви можете ознайомитися зі списком спеціалізацій Харківського національного університету
            радіоелектроніки.
          </p>
          <p>
            Також на сторінках приймальної комісії ХНУРЕ представлена інформація про необхідні ЗНО,
            коефіцієнтах ЗНО при розрахунку конкурсного бала, інформація про мінімальні прохідні бали
            у минулі роки на всі спеціалізації ХНУРЕ, інформація про ліцензійні обсяги, вартості контрактного
            навчання в зручній таблиці.
          </p>
          <p>
            На сторінці приймальної комісії ХНУРЕ є інформація про підготовче відділення Харківського
            національного університету радіоелектроніки, де представлені всі факультативи та курси підготовчого
            відділення ХНУРЕ.
          </p>
          <p>
            Будемо раді бачити Вас в якості Абітурієнтів і в майбутньому Студентами нашого Університету!
          </p>
          <p>
          </p>
          Бажаємо всім Абітурієнтам успішного вступу!
        </div>
      </section>
      <MainAnnouncementsWidget/>
      <MainNewsWidget/>
    </div>
  </transition>
</template>

<style scoped>
</style>

