<template>
  <div class="container">
    <div class="admission">
      <v-navigation-drawer permanent light class="sidebar" v-bind:class="{sidebarHide: !showSideBar}">
        <v-toolbar flat>
          <v-list>
            <v-list-tile class="sidebar-heading">
              <v-list-tile-title class="title">
                Вступ
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
          <v-toolbar-side-icon @click="showSideBar=!showSideBar"></v-toolbar-side-icon>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list dense class="pt-0">
          <v-list-tile v-for="item in items"
                       :key="item.title"
                       @click="displayComponent(item)"
                       v-bind:class="{active: item.value === componentToDisplay}">
            <v-list-tile-action>
              <v-icon>fa-graduation-cap</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <div class="show-button" v-if="!showSideBar">
        <v-toolbar-side-icon @click="showSideBar=!showSideBar"></v-toolbar-side-icon>
      </div>
      <div class="content">
        <div v-if="!componentToDisplay">
          <h1>Вступ до університету радіоелектроніки</h1>
        </div>
        <component :is="componentToDisplay"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import components from '../components/admission/index';
  import Vue from 'vue';
  import AdmissionRules from '../components/admission/AdmissionRules';
  import SelectionCommittee from '../components/admission/SelectionCommittee';
  import Specialities from '../components/admission/Specialties';
  import DocumentsSubmission from '../components/admission/DocumentsSubmission';
  import SchoolWork from '../components/admission/SchoolWork';
  import ColledgeWork from '../components/admission/ColledgeWork';

  export default {
    components: {AdmissionRules, SelectionCommittee, Specialities, DocumentsSubmission, SchoolWork, ColledgeWork},
    name: 'Admission',
    data() {
      const items = [{
        id: 1,
        name: 'Спеціальності, за якими проводиться прийом на 1 курс до ХНУРЕ',
        value: 'specialities'
      },
        {id: 2, name: 'Приймальна комісія', value: 'selectionCommittee'},
        {id: 3, name: 'Правила прийому', value: 'admissionRules'},
        {id: 4, name: 'Порядок подання документів', value: 'documentsSubmission'},
        {id: 5, name: 'Робота зі школярами', value: 'schoolWork'},
        {id: 6, name: 'Робота з технікумами', value: 'colledgeWork'},
        {id: 7, name: 'Центр довузівської підготовки'},
        {id: 8, name: 'Заходи'},
        {id: 9, name: 'Для іноземних громадян'},
        {id: 10, name: 'Для майбутніх магістрів'},
        {id: 11, name: 'Друга вища освіта'}
      ];

      return {
        items,
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
        this.componentToDisplay = this.$route.query.component;
      }
    },
    computed: {},
    watch: {
      $route: {
        handler(nextRoute = {}) {
          this.componentToDisplay = nextRoute.query.component;
          console.log(nextRoute.query.component)
        }
      }
    },
    methods: {
      displayComponent(data) {
        this.$router.push({path: 'admission', query: {component: data.value}});
      }
    }
  }
</script>

<style scoped>

</style>
