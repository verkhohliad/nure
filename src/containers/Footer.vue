<template>
  <v-footer class="main-footer">
    <v-layout row wrap class="main-footer__layout">
      <v-flex d-flex xs6 sm6 md6 child-flex>
        <div class="footer_menu">
          <div class="footer-contacts">
            <h5 class="footer-contacts__header">Зв'яжіться з нами
            </h5>
            <ul>
              <li>
                <a target="_blank"
                   href="https://www.google.com.ua/maps/place/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D1%80%D0%B0%D0%B4%D0%B8%D0%BE%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8/@50.0156365,36.2259817,16.75z/data=!4m5!3m4!1s0x0:0x6daed05394f03251!8m2!3d50.0152877!4d36.2278514"
                   class="footer-link">
                  <i class="material-icons">place</i>
                  <span class="footer-contacts__text">61166, Харків, пр. Науки, 14</span>
                </a>
              </li>
              <li>
                <a href="mailto:abitur@nure.ua" class="footer-link">
                  <i class="material-icons">mail_outline</i>
                  <span class="footer-contacts__text">abitur@nure.ua</span>
                </a>
              </li>
              <li>
                <a class="footer-link" href="tel:+38(057)702-17-20">
                  <i class="material-icons">phone</i>
                  <span class="footer-contacts__text">+38 (057) 702-17-20</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-copyright">
            <p class="row">© 2018 Офіційна сторінка приймальної комісії ХНУРЕ</p>
            <p class="row">Копіювання материалів без письмового дозволу заборонено.</p>
            <p class="row">Відповідальний:<a class="responsible" target="_blank"
                                                href="http://nure.ua/university/structure/departments/kn/ii/staff/oleg-viktorovich-zolotuxin/">Золотухін Олег Вікторович</a> | <a
              class="responsible" href="mailto:oleg.zolotukhin@nure.ua">oleg.zolotukhin@nure.ua</a></p>
          </div>
        </div>
      </v-flex>

      <v-flex d-flex xs6 sm6 md6 child-flex>
        <div class="footer-map" v-if="location">
          <gmap-map class="map-container" :center="{lat:location.lat, lng:location.lng}" :zoom="12">
            <gmap-marker :position="{lat:location.lat, lng:location.lng}">
            </gmap-marker>
          </gmap-map>
        </div>
      </v-flex>
    </v-layout>

  </v-footer>
</template>

<script>
  import { getCoordinates } from '../api/google';

  export default {
    name: 'Footer',
    data: function () {
      return {
        location: null
      }
    },
    beforeCreate: async function () {
      const apiGoogleKey = 'AIzaSyBPk8GZiIly7Ww8LThI8N4hu8QZR9qT1Yk';
      const data = await getCoordinates(apiGoogleKey);

      this.location = data.results[0].geometry.location;
    },
    methods: {}
  }

  /*
   <div class="footer_menu">
   <div class="footer-item">
   <i class="material-icons">place</i>
   <a href="place">61166, Харків, пр.Науки, 14</a>
   <div>кім. 146</div>
   </div>

   <div class="footer-item">
   <i class="material-icons">mail_outline</i>
   <a href="mailto:">abitur@nure.ua</a>
   </div>


   <div class="footer-item">
   <i class="material-icons">phone</i>
   <a href="tel:0577021720">(057) 702-17-20</a>
   </div>
   </div>
   */
</script>

<style scoped>

  .map-container {
    width: 100%;
    height: 250px;
  }

</style>

