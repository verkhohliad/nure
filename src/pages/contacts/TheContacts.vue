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
    created() {
      this.$scrollTo('.TheHeader', 700)
    },
  }
</script>

<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <v-container class="TheContacts">
      <v-flex d-flex xs12 sm12 md6 child-flex>
        <div class="TheContacts_content">
          <h1>Контакти ХНУРЕ:</h1>
          <div class="TheContacts_content_item">
            <h5>Юридична адреса ХНУРЕ:</h5>
            <a href="javascript:void">
              Україна, Харків, 61166, пр. Науки, 14
            </a>
          </div>
          <div class="TheContacts_content_item">
            <h5>Приймальна комісія ХНУРЕ:</h5>
            <a href="tel:+380577021720">
              +38 (057) 702-17-20
            </a>
          </div>
          <div class="TheContacts_content_item">
            <h5>Телефон / факс ХНУРЕ:</h5>
            <a href="tel:+380577021013">
              +38 (057) 702-10-13
            </a>
          </div>
          <div class="TheContacts_content_item">
            <h5>Приймальна ректора ХНУРЕ:</h5>
            <a href="tel:+380577021807">
              +38 (057) 702-18-07
            </a>
          </div>
          <div class="TheContacts_content_item">
            <h5>Приймальна проректора з науково-методичної роботи ХНУРЕ:</h5>
            <a href="tel:+380577021807">
              +38 (057) 702-18-11
            </a>
          </div>
          <div class="TheContacts_content_item">
            <h5>Приймальна проректора з адміністративно-господарської роботи ХНУРЕ:</h5>
            <a href="tel:+380577021318">
              +38 (057) 702-13-18
            </a>
          </div>
          <div class="TheContacts_content_item">
            <h5>Приймальна навчального відділу ХНУРЕ:</h5>
            <a href="tel:+380577021492">
              +38 (057) 702-14-92
            </a>
          </div>
          <div class="TheContacts_content_item">
            <h5>Офіційна адреса ХНУРЕ:</h5>
            <a target="_blank" href="http://www.nure.ua">
              http://www.nure.ua
            </a>
          </div>
          <div class="TheContacts_content_item">
            <h5>Приймальна проректора з адміністративно-господарської роботи ХНУРЕ:</h5>
            <a href="tel:+380577021318">
              +38 (057) 702-13-18
            </a>
          </div>
          <div class="TheContacts_content_item">
            <h5>Прес-служба ХНУРЕ:</h5>
            <a href="mailto:press@nure.ua">
              press@nure.ua
            </a>
          </div>
        </div>
      </v-flex>
      <v-flex class="flex-wrap" d-flex xs12 sm12 md6 child-flex>
        <v-zoom class="selection-committee-way" :width="400" :img="selectionCommitteeWay"></v-zoom>
        <GoogleMap/>
      </v-flex>
    </v-container>
  </transition>
</template>

<style scoped>
</style>

