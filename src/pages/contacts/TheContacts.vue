<script>
  import vZoom from 'vue-zoom'

  import GoogleMap from '../../components/GoogleMap';
  import selectionCommitteeWay from '../../assets/img/selectionCommitteeWay.jpg';

  export default {
    name: 'TheContacts',
    components: { GoogleMap, vZoom },
    data() {
      return {
        selectionCommitteeWay,
      }
    },
  }
</script>

<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <v-container class="TheContacts">
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
        <v-zoom class="selection-committee-way" :width="400" :img="selectionCommitteeWay"></v-zoom>
        <GoogleMap/>
      </v-flex>
    </v-container>
  </transition>
</template>

<style scoped>
</style>

