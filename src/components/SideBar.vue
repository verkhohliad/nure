<script>

  export default {
    name: 'SideBar',
    props: {
      componentToDisplay: String,
      items: Array,
      show: Boolean
    },
    data() {
      return {}
    },
    methods: {},

  }
</script>

<template>
  <v-navigation-drawer permanent light class="sidebar" v-bind:class="{sidebarHidden: !show}">
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
      <v-list-tile v-for="item in items"
                   :key="item.title"
                   @click="$emit('displayComponent', item)"
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
</template>

<style scoped>

</style>

