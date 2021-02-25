<script>
  import { GOOGLE } from '../../common';
  import nureLogo from '../../assets/img/nure-logo.png';
  import ministryLogo from '../../assets/img/ministryEducationLogo3.png';

  export default {
    name: 'TheFooter',
    data() {
      return {
        googlePositionLink: GOOGLE.POSITION_LINK,
        nureLogo,
        ministryLogo,
      }
    },
    methods: {},
  }
</script>

<template>
  <v-footer class="TheFooter">
    <v-layout row wrap class="TheFooter-layout">
      <div class="TheFooter-content">
        <v-flex d-flex xs6 sm6 md3 child-flex>
          <a class="TheFooter-column-link" target="_blank" href="http://nure.ua/">
            <div class="TheFooter_logo">
              <img class="TheFooter_logo_image" :src='nureLogo' alt="">
              <span class="TheFooter_logo_text">Харківський національний університет радіоелектроніки</span>
            </div>
          </a>
        </v-flex>


        <v-flex d-flex xs12 sm12 md6 child-flex>
          <div class="TheFooter_menu">
            <div class="TheFooter-contacts">
              <h6 class="TheFooter-contacts__header">Зв'яжіться з нами
              </h6>
              <ul>
                <li>
                  <a target="_blank"
                     :href='googlePositionLink'
                     class="footer-link">
                    <v-icon class="white--text">fa-map-marker</v-icon>
                    <span class="TheFooter-contacts__text">61166, Харків, пр. Науки, 14</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:abitur@nure.ua" class="footer-link">
                    <v-icon class="white--text">fa-envelope-o</v-icon>
                    <span class="TheFooter-contacts__text">abitur@nure.ua</span>
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="tel:+380577021720">
                    <v-icon class="white--text">fa-phone</v-icon>
                    <span class="TheFooter-contacts__text">+38 (057) 702-17-20</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </v-flex>

        <v-flex d-flex xs6 sm6 md3 child-flex>
          <a class="TheFooter-column-link" target="_blank" href="https://mon.gov.ua/ua">
            <div class="TheFooter_logo">
              <img class="TheFooter_logo_image" :src=ministryLogo alt="">
              <span class="TheFooter_logo_text">Міністерство освіти та науки України</span>
            </div>
          </a>
        </v-flex>
      </div>

      <v-flex d-flex xs12 sm12 md12 child-flex>
        <v-layout row wrap>
          <div class="TheFooter-copyright">
            <v-flex d-flex xs12 sm12 md3 child-flex>
              <span class="TheFooter-copyright_row">© 2021 Офіційна сторінка приймальної комісії ХНУРЕ</span>
            </v-flex>
            <v-flex d-flex xs12 sm12 md6 child-flex>
              <span class="TheFooter-copyright_row">Відповідальний:<a class="responsible" target="_blank"
                                                                   href="http://nure.ua/university/structure/departments/kn/ii/staff/oleg-viktorovich-zolotuxin/">Золотухін
            Олег Вікторович</a> | <a
                class="responsible" href="mailto:oleg.zolotukhin@nure.ua">oleg.zolotukhin@nure.ua</a></span>
            </v-flex>
            <v-flex d-flex xs12 sm12 md3 child-flex>
              <span class="TheFooter-copyright_row">Копіювання материалів без письмового дозволу заборонено.</span>
            </v-flex>
          </div>
        </v-layout>

      </v-flex>

    </v-layout>
  </v-footer>
</template>

<style scoped>
</style>

