<script>
  export default {
    name: 'AdmissionSideBar',
    props: {
      componentToDisplay: String,
      tabs: Array,
      show: Boolean,
    },
  }
</script>

<template>
  <v-navigation-drawer permanent light class="sidebar" :class="{sidebarHidden: !show}">
    <v-toolbar flat>
      <v-list>
        <v-list-tile class="sidebar-heading">
          <v-list-tile-title class="title">
            Вступ
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-toolbar-side-icon @click="$emit('hideSideBar')"></v-toolbar-side-icon>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile v-for="tab in tabs"
                   :key="tab.title"
                   :class="{active: tab.value === componentToDisplay}"
                   @click="$emit('displayComponent', tab)">
        <v-list-tile-action>
          <v-icon>fa-graduation-cap</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ tab.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>

