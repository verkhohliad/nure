<script>
  import AdmissionRules from './AdmissionRules';
  import SelectionCommittee from './AdmissionSelectionCommittee';
  import Specialities from './AdmissionSpecialties';
  import DocumentsSubmission from './AdmissionDocumentsSubmission';
  import SchoolWork from './AdmissionSchoolWork';
  import ColledgeWork from './AdmissionColledgeWork';
  import SideBar from './AdmissionSideBar';
  import { getAdmissionTabs } from '../../utils';
  // import { ROUTES } from '../../common'

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
        tabs: getAdmissionTabs(),
        showSideBar: true,
        componentToDisplay: '',
      }
    },
    created() {
      // do not need now, because whatever loading is redirecting on main page now.
      // if (this.$route.query.component) {
      //  this.componentToDisplay = this.$route.query.component || '';
      // }
    },
    watch: {
      // $route(nextRoute = {}) {
      //  this.componentToDisplay = nextRoute.query.component;
      // },
    },
    methods: {
      displayComponent(data) {
        this.componentToDisplay = data.value;
        // this.$router.push({ path: ROUTES.ADMISSION, query: { component: data.value } });
      },
    },
  }
</script>

<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <v-container class="TheAdmission">
      <SideBar :tabs="tabs"
               :show="showSideBar"
               :componentToDisplay="componentToDisplay"
               @hideSideBar="showSideBar = !showSideBar"
               @displayComponent="displayComponent"/>

      <div class="show-button" v-if="!showSideBar">
        <v-toolbar-side-icon @click="showSideBar=!showSideBar"></v-toolbar-side-icon>
      </div>

      <div class="content">
        <div v-if="!componentToDisplay">
          <h1>Вступ до університету радіоелектроніки</h1>
        </div>
        <transition name="slide-fade">
          <div :is="componentToDisplay"/>
        </transition>
      </div>
    </v-container>
  </transition>
</template>

<style scoped>
</style>

