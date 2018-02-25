<script>
  import { mapActions } from 'vuex'

  import { ACTIONS } from '../../common'

  import TheOlympiadModal from '../../components/modals/TheOlympiadModal'

  export default {
    name: 'TheOlympiad',
    components: { TheOlympiadModal },
    data() {
      return {}
    },
    methods: {
      ...mapActions({
        switchOlympiadModal: ACTIONS.SWITCH_OLYMPIAD_MODAL,
      }),
    },
  }
</script>

<template>
  <transition name="slide-fade">
    <v-container class="TheOlympiad" grid-list-md text-xs-center>
      <v-layout row wrap class="TheOlympiad_content">
        <v-flex d-flex xs12 sm12 md12 child-flex>
          <section>
            <h3> Харківський національний університет радіоелектроніки проводить
              Всеукраїнську олімпіаду навчального закладу для абітурієнтів на основі повної середньої освіти з
              предметів:</h3>
            <ul class="steps">
              <li>Українська мова і література;</li>
              <li>Математика;</li>
              <li>Біологія.</li>
            </ul>

            <h2>Умови участі в олімпіаді:</h2>

            <ul class="steps">
              <li>Зареєструватися для участі в першому дистанційному турі олімпіади шляхом заповнення і відправки
                форми, яка опублікована на даній сторінці, в період з 01 березня по 25 березня 2018 року.
              </li>
              <li>Відповісти на завдання, які будуть надіслані Вам поштою, і переслати відповіді на e-mail приймальної
                комісії olimp@nure.ua до 19 квітня 2018 року.
              </li>
              <li>Отримати запрошення на другий очний тур Олімпіади, який буде проходити 22 квітня 2018 року.</li>
              <li>Прибути до університету об 11-00 22 квітня 2018 року, виконати завдання Олімпіади і отримати
                додаткові бали до сертифікату ЗНО з певного предмету при вступі до ХНУРЕ.
              </li>
              <li>При собі мати паспорт.</li>
            </ul>
            <p>
              Учасники II-го (очного) туру Олімпіади отримують додаткові бали
              (максимально - 20) до сертифікату ЗНО по одному з предметів під час
              вступу на наступні спеціальності університету:
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
            <v-btn @click="switchOlympiadModal" class="flex_margin_auto" color="info">Взяти участь в олімпіаді</v-btn>
          </section>
        </v-flex>
        <v-flex>
          <TheOlympiadModal/>
        </v-flex>
      </v-layout>
    </v-container>
  </transition>
</template>

<style scoped>
</style>

