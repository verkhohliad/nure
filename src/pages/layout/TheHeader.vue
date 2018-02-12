<script>
  import MainSlider from '../../componentsOLD/MainSlider';
  import nureLogo from '../../assets/img/nure-logo.png';
  import parallaxImg from '../../assets/img/test1.jpg';
  import SignIn from '../../componentsOLD/signing/SignIn';
  import SignUp from '../../componentsOLD/signing/SignUp';

  export default {
    components: {MainSlider, SignIn, SignUp},
    name: 'Header',
    data() {
      return {
        navBar: {
          logo: nureLogo,
          parallaxImg,
          items: [
            ,
          ]
        },
      }
    },
    created() {

    },
    methods: {}
  }
</script>

<template>
  <header>
    <v-toolbar class="header-toolbar">
      <v-layout>
        <div class="white--text mb-2 display-1 text-xs-center header-bar">
          <div class="logo">
            <img :src="navBar.logo" alt="">
            <h4 class="name">Cторінка приймальної комісії
              Харківського національного університету радіоелектроніки</h4>
          </div>
        </div>
      </v-layout>
      <div class="signing">
        <div>
          <v-btn flat dark @click="signInActive=true">Вхід</v-btn>
        </div>
        <div>
          <v-btn flat dark @click="signUpActive=true">Реєстрація</v-btn>
        </div>
      </div>
    </v-toolbar>
    <v-content>
      <MainSlider />
    </v-content>


      <nav>
        <ul class="nav-list">
          <li class="nav-item" v-for="item in navBar.items" :key="item.id">
            <router-link :to="item.url">
              <v-btn flat dark>{{ item.label }}</v-btn>
            </router-link>
          </li>
        </ul>
      </nav>
  </header>
</template>

<style scoped>
</style>
