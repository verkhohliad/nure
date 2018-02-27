<script>
  import {GOOGLE} from '../../common';
  import nureLogo from '../../assets/img/nure-logo.png';
  import ministryLogo from '../../assets/img/ministryEducationLogo2.png';
  export default {
    name: 'TheFooter',
    data() {
      return {
        googlePositionLink: GOOGLE.POSITION_LINK,
        nureLogo,
        ministryLogo
      }
    },
    methods: {},
  }
</script>

<template>
  <v-footer class="TheFooter">
    <v-layout row wrap class="TheFooter-layout">
      <div class="TheFooter-content">
        <v-flex d-flex xs3 sm3 md3 child-flex>
          <a class="TheFooter-column-link" target="_blank" href="http://nure.ua/">
            <div class="TheFooter_logo">
              <img class="TheFooter_logo_image" :src=nureLogo alt="">
              <span class="TheFooter_logo_text">Харківський національний університет радіоелектроніки</span>
            </div>
          </a>
        </v-flex>


        <v-flex d-flex xs6 sm6 md6 child-flex>
          <div class="TheFooter_menu">
            <div class="TheFooter-contacts">
              <h6 class="TheFooter-contacts__header">Зв'яжіться з нами
              </h6>
              <ul>
                <li>
                  <a target="_blank"
                     href="https://www.google.com.ua/maps/place/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D1%80%D0%B0%D0%B4%D0%B8%D0%BE%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8/@50.0156365,36.2259817,16.75z/data=!4m5!3m4!1s0x0:0x6daed05394f03251!8m2!3d50.0152877!4d36.2278514"
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

        <v-flex d-flex xs3 sm3 md3 child-flex>
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
              <span class="TheFooter-copyright_row">© 2018 Офіційна сторінка приймальної комісії ХНУРЕ</span>
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
