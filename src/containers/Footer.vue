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
                <a href="google-map?" class="footer-link">
                  <i class="material-icons">place</i>
                  <span>61166, Харків, пр. Науки, 14</span>
                </a>
              </li>
              <li>
                <a href="mailto:abitur@nure.ua" class="footer-link">
                  <i class="material-icons">mail_outline</i>
                  <span>abitur@nure.ua</span>
                </a>
              </li>
              <li>
                <a class="footer-link" href="tel:+38(057)702-17-20">
                  <i class="material-icons">phone</i>
                  <span>+38 (057) 702-17-20</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-copyright">
            <span class="row">© 2018 Офіційна сторінка приймальної комісії ХНУРЕ</span>
            <span class="row">Копіювання материалів без письмового дозволу заборонено.</span>
            <span class="row">Відповідальний:<a class="responsible" target="_blank" href="http://nure.ua/university/structure/departments/kn/ii/staff/oleg-viktorovich-zolotuxin/">Золотухін Олег Вікторович</a> | <a
              class="responsible" href="mailto:oleg.zolotukhin@nure.ua">oleg.zolotukhin@nure.ua</a></span>
          </div>
        </div>
      </v-flex>

      <v-flex d-flex xs6 sm6 md6 child-flex>
        <div class="footer-map">
          google map
        </div>
      </v-flex>
    </v-layout>

  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data: function () {
      return {}
    },
    created: function () {

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

</style>

