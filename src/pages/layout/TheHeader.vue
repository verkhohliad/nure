<script>
  import MainSlider from '../../componentsOLD/MainSlider'
  import logo from '../../assets/img/nure-logo.png'
  import parallaxImg from '../../assets/img/test1.jpg'
  import { GETTERS } from '../../common'

  export default {
    components: { MainSlider },
    name: 'TheHeader',
    data() {
      return {
        logo,
        parallaxImg,
      }
    },
    computed: {
      items() {
        return this.$store.getters[GETTERS.GET_USER_SCOPE]
      },
    },
    created() {
    },
    methods: {
    },
  }
</script>

<template>
  <header class="TheHeader">
    <v-toolbar class="TheHeader-toolbar">
      <v-layout>
        <div class="toolbar-bar white--text mb-2 display-1 text-xs-center">
          <div class="bar-logo">
            <img :src="logo" alt="">
            <h4 class="bar-name">Cторінка приймальної комісії
              Харківського національного університету радіоелектроніки</h4>
          </div>
        </div>
      </v-layout>

      <div class="toolbar-auth">
        <div>
          <v-btn flat dark @click="">Вхід</v-btn>
        </div>
        <div>
          <v-btn flat dark @click="">Реєстрація</v-btn>
        </div>
      </div>
    </v-toolbar>

    <v-content class="TheHeader-content">
      <section>
        <v-parallax class="content-parallaxImg" :src="parallaxImg"></v-parallax>
      </section>
    </v-content>

    <nav class="TheHeader-nav">
      <ul class="nav-list">
        <li class="nav-item" v-for="item in items" :key="item.path">
          <router-link :to="item.path">
            <v-btn flat dark>{{ item.label }}</v-btn>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
</style>
