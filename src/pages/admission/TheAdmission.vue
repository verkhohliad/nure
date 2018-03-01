<script>
  import Vue from 'vue';

  import components from '../../componentsOLD/admission/index';
  import AdmissionRules from '../../componentsOLD/admission/AdmissionRules';
  import SelectionCommittee from '../../componentsOLD/admission/SelectionCommittee';
  import Specialities from '../../componentsOLD/admission/Specialties';
  import DocumentsSubmission from '../../componentsOLD/admission/DocumentsSubmission';
  import SchoolWork from '../../componentsOLD/admission/SchoolWork';
  import ColledgeWork from '../../componentsOLD/admission/ColledgeWork';
  import SideBar from '../../components/SideBar';
  import { getAdmissionComponents } from '../../api/admission';

  export default {
    components: {
      AdmissionRules,
      SelectionCommittee,
      Specialities,
      DocumentsSubmission,
      SchoolWork,
      ColledgeWork,
      SideBar,
    },
    name: 'TheAdmission',
    data() {
      return {
        items: getAdmissionComponents(),
        showSideBar: true,
        componentToDisplay: '',
        components,
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    beforeCreate() {

    },
    created() {
      if (this.$route.query.component) {
        this.componentToDisplay = this.$route.query.component || '';
      }
    },
    computed: {},
    watch: {
      $route: {
        handler(nextRoute = {}) {
          this.componentToDisplay = nextRoute.query.component;
        }
      }
    },
    methods: {
      displayComponent(data) {
        this.$router.push({ path: 'admission', query: { component: data.value } });
      },
    }
  }
</script>

<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <v-container class="TheAdmission">
      <SideBar :items="items" :show="showSideBar" @hideSideBar="showSideBar=!showSideBar"
               @displayComponent="displayComponent"
               :componentToDisplay="componentToDisplay"/>
      <div class="show-button" v-if="!showSideBar">
        <v-toolbar-side-icon @click="showSideBar=!showSideBar"></v-toolbar-side-icon>
      </div>
      <div class="content">
        <div v-if="!componentToDisplay">
          <h1>Вступ до університету радіоелектроніки</h1>
        </div>
        <transition name="slide-fade">
          <component :is="componentToDisplay"/>
        </transition>
      </div>
    </v-container>
  </transition>
</template>

<style scoped>
</style>

