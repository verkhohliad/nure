<script>
  import { mapGetters } from 'vuex'

  import logo from '../../assets/img/nure-logo.png'

  import { GETTERS } from '../../common'
  // import bgImg from '../../assets/img/bg2.jpeg'

  export default {
    name: 'TheHeader',
    data() {
      return {
        logo,
        transformHeader: false,
        navStyle: 'default',
        active: null
      }
    },
    watch: {
      $route(to, from) {
        this.checkRouteStyles(to.path);
      }
    },
    computed: {
      ...mapGetters({
        items: GETTERS.GET_USER_SCOPE
      })
    },
    methods: {
      handleScroll() {
        window.pageYOffset >= 80 ? this.transformHeader = true : this.transformHeader = false;
      },
      checkRouteStyles(route) {
        if (route !== '/') {
          this.navStyle = 'solid';
        }
        else {
          this.navStyle = 'default';
        }
      }
    }
  }
</script>

<template>
  <header class="TheHeader" v-scroll="handleScroll">
    <nav
      v-bind:class="[transformHeader ? 'transformed' : '', navStyle==='default' ? 'default-navbar' : 'solid-navbar']">
      <div class="logo" @click="active=null">
        <router-link :to="items[0].path" class="item-link">
          <img class="logo-img" :src=logo alt="">
          <h5 class="logo-name">Приймальна комісія ХНУРЕ</h5>
        </router-link>
      </div>
      <ul class="navigation">
        <li class="item"
            :class="{active: item.path === active}"
            v-for="item in items.slice(1)"
            :key="item.path"
            @click="active=item.path">
          <router-link :to="item.path" class="item-link">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>
