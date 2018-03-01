<template>
  <transition name="slide-fade">
    <div class="container">
      <v-flex d-flex xs6 sm6 md6 child-flex>
        <div class="contact-content">
          <h1>Контакти ХНУРЕ:</h1>
          <div>
            <h5>Юридична адреса ХНУРЕ:</h5>
            <ul>
              <li>Україна, Харків, 61166, пр. Науки, 14</li>
            </ul>
          </div>
          <div>
            <h5>Приймальна комісія ХНУРЕ:</h5>
            <ul>
              <li>+38 (057) 702-17-20</li>
            </ul>
          </div>
          <div>
            <h5>Телефон / факс ХНУРЕ:</h5>
            <ul>
              <li>+38 (057) 702-10-13</li>
            </ul>
          </div>
          <div>
            <h5>Приймальна ректора ХНУРЕ:</h5>
            <ul>
              <li>+38 (057) 702-18-07</li>
            </ul>
          </div>
          <div>
            <h5>Приймальна проректора з науково-методичної роботи ХНУРЕ:</h5>
            <ul>
              <li>+38 (057) 702-18-11</li>
            </ul>
          </div>
          <div>
            <h5>Приймальна проректора з адміністративно-господарської роботи ХНУРЕ:</h5>
            <ul>
              <li>+38 (057) 702-13-18</li>
            </ul>
          </div>
          <div>
            <h5>Приймальна навчального відділу ХНУРЕ:</h5>
            <ul>
              <li>+38 (057) 702-14-92</li>
            </ul>
          </div>

          <div>
            <h5>
              Приймальна начальника НДЧ ХНУРЕ:</h5>
            <ul>
              <li>+38 (057) 702-10-20, 702-14-13</li>
            </ul>
          </div>
          <div>
            <h5>Офіційна адреса ХНУРЕ:</h5>
            <ul>
              <li>info@nure.ua</li>
            </ul>
          </div>
          <div>
            <h5>Приймальна проректора з адміністративно-господарської роботи ХНУРЕ:</h5>
            <ul>
              <li>+38 (057) 702-13-18</li>
            </ul>
          </div>
          <div>
            <h5>Запит на отримання доступу до публічної інформації ХНУРЕ:</h5>
            <ul>
              <li>zapyt@kture.kharkov.ua</li>
            </ul>
          </div>

          <div>
            <h5>Прес-служба ХНУРЕ:</h5>
            <ul>
              <li>press@nure.ua</li>
            </ul>
          </div>
        </div>
      </v-flex>
      <v-flex class="flex-wrap" d-flex xs6 sm6 md6 child-flex>
        <div class="selection-committee-way" @click="dialog=true">
          <img :src="selectionCommitteeWay" alt="">
        </div>

        <div class="footer-map" v-if="location">
          <gmap-map class="map-container" :center="{lat:location.lat, lng:location.lng}" :zoom="12">
            <gmap-marker :position="{lat:location.lat, lng:location.lng}">
            </gmap-marker>
          </gmap-map>
        </div>
      </v-flex>

      <v-dialog v-model="dialog" max-width="1000px">
        <v-card>
          <v-card-text>
            <div class="selection-committee-way">
              <img :src="selectionCommitteeWay" alt="">
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="dialog=false">Закрити</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </transition>
</template>

<script>
  import selectionCommitteeWay from '../assets/img/selectionCommitteeWay.jpg';

  export default {
    name: 'Contact',
    data() {
      return {
        selectionCommitteeWay,
        dialog: false
      }
    },
    methods: {}
  }
</script>


<style scoped>
  .map-container {
    width: 100%;
    height: 250px;
  }
</style>
