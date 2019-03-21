<script>
  import {mapGetters} from 'vuex'
  import {PAGES_NAMES} from '../../common'

  import logo from '../../assets/img/nure-logo.png'

  import {GETTERS} from '../../common'

  export default {
    name: 'TheHeader',
    data() {
      return {
        logo,
        transformHeader: false,
        showNavBar: false,
        navStyle: 'default',
        active: null
      }
    },
    watch: {
      $route(to, from) {
        if (to) {
          this.checkRouteStyles(to.path);
        }
      }
    },
    computed: {
      items: () => {
        // Store is defined in window.
        let items = store.getters.GET_USER_SCOPE || []

        if (items.length) {
          // Do not show main page and announcements page in Header.
          items = items.filter(x => !x.disabled && x.label !== PAGES_NAMES.MAIN && x.label !== PAGES_NAMES.ANNOUNCEMENTS)
        }

        return items
      }
      // ...mapGetters({
      //   items: GETTERS.GET_USER_SCOPE
      // })
    },
    methods: {
      handleScroll() {
        if (!this.showNavBar) {
          window.pageYOffset >= 80 ? this.transformHeader = true : this.transformHeader = false;
        }
      },
      checkRouteStyles(route) {
        if (route !== '/') {
          this.navStyle = 'solid';
        }
        else {
          this.navStyle = 'default';
        }
        this.transformHeader = false;
        this.showNavBar = false;
      },
      switchNavBarDisplay() {
        if (this.transformHeader && window.pageYOffset >= 80) {
          this.showNavBar = !this.showNavBar;
        }
        else {
          this.showNavBar = !this.showNavBar;
          this.transformHeader = !this.transformHeader;
        }
      },
      getRootPath() {
        const mockedRootPath = '/'
        return mockedRootPath
      }
    }
  }
</script>

<template>
  <header class="TheHeader" v-scroll="handleScroll">
    <nav
      v-bind:class="[transformHeader ? 'transformed' : '', navStyle==='default' ? 'default-navbar' : 'solid-navbar']">
      <div class="logo" @click="active=null">
        <router-link :to="getRootPath()" class="item-link">
          <img class="logo-img" :src=logo alt="">
          <h5 class="logo-name">Приймальна комісія ХНУРЕ</h5>
        </router-link>
      </div>
      <ul class="navigation">
        <li class="item"
            :class="{active: item.path === active}"
            v-for="item in items"
            :key="item.path"
            @click="active=item.path">
          <router-link :to="item.path" class="item-link">
            {{ item.label.toUpperCase() }}
          </router-link>
        </li>
      </ul>
      <div class="mini-navigation">
        <i @click="switchNavBarDisplay" class="fa fa-bars navigation-display-icon" />
        <v-list v-bind:class="[showNavBar ? 'active' : '']" class="navigation-list">
          <v-list-tile v-for="item in items.slice(0, items.length-1)" :key="item.title" @click="switchNavBarDisplay">
            <router-link :to="item.path" class="w-100" style="text-decoration: none;">
              {{ item.label.toUpperCase() }}
            </router-link>
          </v-list-tile>
        </v-list>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>
