<script>
  import AdmissionRules from './AdmissionRules';
  import AdmissionSelectionCommittee from './AdmissionSelectionCommittee';
  import AdmissionSpecialities from './AdmissionSpecialties';
  import AdmissionDocumentsSubmission from './AdmissionDocumentsSubmission';
  import AdmissionSchoolWork from './AdmissionSchoolWork';
  import AdmissionColledgeWork from './AdmissionColledgeWork';
  import AdmissionSideBar from './AdmissionSideBar';
  import { getAdmissionTabs } from '../../utils';
  // import { ROUTES } from '../../common'

  export default {
    components: {
      AdmissionRules,
      AdmissionSelectionCommittee,
      AdmissionSpecialities,
      AdmissionDocumentsSubmission,
      AdmissionSchoolWork,
      AdmissionColledgeWork,
      AdmissionSideBar,
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
      if (this.$route.query.component) {
        this.componentToDisplay = this.$route.query.component || '';
      }
      this.$scrollTo('.TheHeader', 700)
    },
    watch: {
      // $route(nextRoute = {}) {
      //  this.componentToDisplay = nextRoute.query.component;
      // },
    },
    methods: {
      displayComponent(data) {
        console.log(window.innerWidth)
        this.componentToDisplay = data.value;
        if (window.innerWidth < 600) {
          this.showSideBar = false;
        }
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
    <section class="TheAdmission">
      <AdmissionSideBar :tabs="tabs"
                        :show="showSideBar"
                        :componentToDisplay="componentToDisplay"
                        @hideSideBar="showSideBar = !showSideBar"
                        @displayComponent="displayComponent"/>

      <div class="show-button" v-if="!showSideBar">
        <v-toolbar-side-icon @click="showSideBar=!showSideBar"></v-toolbar-side-icon>
      </div>

      <div class="content">
        <div v-if="!componentToDisplay" style="text-align: center;">
          <h1>Вступ до університету радіоелектроніки</h1>
        </div>
        <transition name="slide-fade">
          <div :is="componentToDisplay"/>
        </transition>
      </div>
    </section>
  </transition>
</template>

<style scoped>
</style>

