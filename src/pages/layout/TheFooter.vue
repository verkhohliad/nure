<script>
  import { GOOGLE } from '../../common';

  export default {
    name: 'TheFooter',
    data() {
      return {
        location: null,
        googlePositionLink: GOOGLE.POSITION_LINK
      }
    },
    methods: {}
  }
</script>

<template>
  <v-footer class="TheFooter">
    <v-layout row wrap class="TheFooter__layout">
      <v-flex d-flex xs3 sm3 md3 child-flex/>

      <v-flex d-flex xs6 sm6 md6 child-flex>
        <div class="layout__menu">
          <div class="menu__contacts">
            <h6 class="contacts__header">Зв'яжіться з нами</h6>
            <ul>
              <li>
                <a  class="footer__link"
                    target="_blank"
                    href="googlePositionLink"
                >
                  <i class="material-icons">place</i>
                  <span class="contacts__text">61166, Харків, пр. Науки, 14</span>
                </a>
              </li>

              <li>
                <a class="footer__link"
                   href="mailto:abitur@nure.ua"
                >
                  <i class="material-icons">mail_outline</i>
                  <span class="contacts__text">abitur@nure.ua</span>
                </a>
              </li>

              <li>
                <a class="footer__link"
                   href="tel:+38(057)702-17-20"
                >
                  <i class="material-icons">phone</i>
                  <span class="contacts__text">+38 (057) 702-17-20</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </v-flex>

      <v-flex d-flex xs3 sm3 md3 child-flex/>

      <v-flex d-flex xs12 sm12 md12 child-flex>
        <div class="layout__copyright">
          <p class="row">© 2018 Офіційна сторінка приймальної комісії ХНУРЕ</p>
          <p class="row">Копіювання материалів без письмового дозволу заборонено.</p>
          <p class="row">Відповідальний:<a class="responsible" target="_blank"
                                           href="http://nure.ua/university/structure/departments/kn/ii/staff/oleg-viktorovich-zolotuxin/">Золотухін Олег Вікторович</a> | <a
            class="responsible" href="mailto:oleg.zolotukhin@nure.ua">oleg.zolotukhin@nure.ua</a></p>
        </div>
      </v-flex>

    </v-layout>
  </v-footer>
</template>

<style scoped>
</style>

