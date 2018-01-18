<template>
  <div class="admission">
    <v-navigation-drawer permanent light class="sidebar" v-bind:class="{sidebarHide: !showSideBar}">
      <v-toolbar flat>
        <v-list>
          <v-list-tile class="sidebar-heading">
            <v-list-tile-title class="title">
              Меню
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
            <v-icon>fa-thermometer-empty</v-icon>
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
      <component :is="componentToDisplay" />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import components from '../components/admission/index';
  import Vue from 'vue';
  import AdmissionRules from '../components/admission/AdmissionRules';
  import SelectionCommittee from '../components/admission/SelectionCommittee';
  import Specialities from '../components/admission/Specialties';

  export default {
    components: { AdmissionRules, SelectionCommittee, Specialities },
    name: 'Admission',
    data() {
      const items = [{
        id: 1,
        name: 'Спеціальності, за якими проводиться прийом на 1 курс до ХНУРЕ',
        value: 'specialities'
      },
        { id: 2, name: 'Приймальна комісія', value: 'selectionCommittee', content: 'test' },
        { id: 3, name: 'Правила прийому', value: 'admissionRules', content: 'test' },
        { id: 4, name: 'Порядок подання документів', content: 'test' },
        { id: 5, name: 'Робота зі школярами', content: 'test' },
        { id: 6, name: 'Робота з технікумами', content: 'test' },
        { id: 7, name: 'Центр довузівської підготовки', content: 'test' },
        { id: 8, name: 'Заходи', content: 'test' },
        { id: 9, name: 'Для іноземних громадян', content: 'test' },
        { id: 10, name: 'Для майбутніх магістрів', content: 'test' },
        { id: 11, name: 'Друга вища освіта', content: 'test' }
      ];

      return {
        items,
        showSideBar: true,
        componentToDisplay: 'specialities',
        components,
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    beforeCreate() {

    },
    created() {

    },
    computed: {},
    methods: {
      displayComponent(data) {
        this.componentToDisplay = data.value;
      }
    }
  }
</script>

<style scoped>

</style>
