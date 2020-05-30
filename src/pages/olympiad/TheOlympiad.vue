<script>
  import { mapMutations } from 'vuex'

  import { MUTATIONS } from '../../common'


  export default {
    name: 'TheOlympiad',
    data() {
      return {}
    },
    created() {
      this.$scrollTo('.TheHeader', 700)
    },
    methods: {
      ...mapMutations({
        openOlympiadModal: MUTATIONS.OPEN_OLYMPIAD_MODAL,
      }),
    },
  }
</script>

<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <v-container class="TheOlympiad" grid-list-md text-xs-center>
      <v-layout row wrap class="TheOlympiad_content">
        <v-flex d-flex xs12 sm12 md12 child-flex>
          <section>
            <h2>З результатами II туру Всеукраїнської олімпіади ХНУРЕ можна ознайомитись за посиланнями:</h2>
            <ul>
              <li><a target="_blank" href="https://docs.google.com/spreadsheets/d/1wc3-0Jh-a4fCrn52dVLU9bhBbPEbtlbswNO1Jea6WI4/edit?usp=gmail&ouid=105780797421689063705">Математика</a></li>
              <li><a target="_blank" href="https://docs.google.com/spreadsheets/d/1DrB5Nfn5oJLAkw7m_GXjPk0St2AzaN79TlQhfubqBeA/edit?usp=gmail&ouid=105780797421689063705">Українська мова та література</a></li>
              <li><a target="_blank" href="https://docs.google.com/spreadsheets/d/17cOGDQnG59wqCXlIZf2Bk2LVNFUGZ1l7GBBzwGWBgkA/edit?usp=gmail&ouid=105780797421689063705">Біологія</a></li>
            </ul>

            <h3 class="section-title"> Харківський національний університет радіоелектроніки проводить
              Всеукраїнську олімпіаду навчального закладу для абітурієнтів на основі повної середньої освіти з
              предметів:</h3>
            <ul class="steps">
              <li>Українська мова і література;</li>
              <li>Математика;</li>
              <li>Біологія.</li>
            </ul>

            <!--<h3 class="section-title">-->
              <!--Результати олімпіади:-->
            <!--</h3>-->
            <!--<ul class="steps">-->
              <!--<li><a target="_blank" href="https://docs.google.com/spreadsheets/u/2/d/1wc3-0Jh-a4fCrn52dVLU9bhBbPEbtlbswNO1Jea6WI4/edit?usp=sharing">-->
                <!--Математика-->
              <!--</a></li>-->
              <!--<li>-->
                <!--<a target="_blank" href="https://docs.google.com/spreadsheets/d/1DrB5Nfn5oJLAkw7m_GXjPk0St2AzaN79TlQhfubqBeA/edit?usp=sharing">-->
                  <!--Українська мова та література-->
                <!--</a>-->
              <!--</li>-->
              <!--<li>-->
                <!--<a target="_blank" href="https://docs.google.com/spreadsheets/d/17cOGDQnG59wqCXlIZf2Bk2LVNFUGZ1l7GBBzwGWBgkA/edit?usp=sharing">-->
                  <!--Біологія-->
                <!--</a>-->
              <!--</li>-->
            <!--</ul>-->
            <h3 class="section-title">Умови участі в олімпіаді:</h3>
            <ul class="steps">
              <li>Зареєструватися для участі в першому дистанційному турі олімпіади шляхом заповнення і відправки форми,
                яка опублікована на даній сторінці, в період з 02 по 27 березня 2020 року.
              </li>
              <li>Відповісти на завдання, які будуть надіслані Вам поштою,
                і переслати відповіді на e-mail приймальної комісії
                <a class="responsible" href="mailto:olimp@nure.ua">olimp@nure.ua</a> до 10 квітня 2020 року.
              </li>
              <li>Отримати запрошення на другий очний тур Олімпіади, який буде проходити 12 квітня 2020 року.</li>
              <li>Прибути до університету о 9-00 12 квітня 2020 року, виконати завдання Олімпіади і отримати додаткові бали
                до сертифікату ЗНО з певного предмету при вступі до ХНУРЕ.
              </li>
              <li>При собі мати паспорт.</li>
            </ul>
            <p>
              Учасники II-го (очного) туру Олімпіади отримують додаткові бали (максимально - 20)
              до сертифікату ЗНО по одному з предметів під час вступу на наступні спеціальності університету:
            </p>

            <ul class="steps">
              <li>124 Системний аналіз;</li>
              <li>151 Автоматизація та комп'ютерно-інтегровані технології;</li>
              <li>152 Метрологія та інформаційно-вимірювальна техніка;</li>
              <li>153 Мікро- та наносистемна техніка;</li>
              <li>163 Біомедична інженерія;</li>
              <li>171 Електроніка;</li>
              <li>172 Телекомунікації та радіотехніка;</li>
              <li>173 Авіоніка</li>
              <li>186 Видавництво і поліграфія.</li>
            </ul>
              <!--<h2 class="text-center">Реєстрацію завершено</h2>-->
            <v-btn @click="openOlympiadModal()" class="flex_margin_auto default-button">Взяти участь в олімпіаді</v-btn>
          </section>
        </v-flex>
      </v-layout>
    </v-container>
  </transition>
</template>

<style scoped>
</style>

