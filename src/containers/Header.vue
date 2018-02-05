<template>
  <header>
    <v-toolbar class="header-toolbar">
      <!--<div class="languages">
          <div class="language-item">RU</div>
          <div class="language-item">UA</div>
          <div class="language-item">EN</div>
        </div>
      -->
      <v-layout
      >
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
      <section>
        <v-parallax :src="navBar.parallaxImg" height="500">

        </v-parallax>
      </section>
    </v-content>

    <!--<MainSlider />-->
      <nav>
        <ul class="nav-list">
          <li class="nav-item" v-for="item in navBar.items" :key="item.id">
            <router-link :to="item.url">
              <v-btn flat dark>{{ item.label }}</v-btn>
            </router-link>
          </li>
        </ul>
      </nav>
    <SignIn @closeModal="signInActive = false" :show="signInActive"/>
    <SignUp @closeModal="signUpActive = false" :show="signUpActive"/>
  </header>
</template>

<script>
  import MainSlider from '../components/MainSlider';
  import nureLogo from '../../img/nure-logo.png';
  import parallaxImg from '../../img/test1.jpg';
  import SignIn from '../components/signing/SignIn';
  import SignUp from '../components/signing/SignUp';

  export default {
    components: {MainSlider, SignIn, SignUp},
    name: 'Header',
    data() {
      return {
        navBar: {
          logo: nureLogo,
          parallaxImg,
          items: [
            {
              id: 1,
              label: 'Головна',
              value: 'MainPage',
              url: '/'
            },
            {
              id: 2,
              label: 'Спеціальності',
              value: 'SpecialitiesPage',
              url: '/specialities'
            },
            {
              id: 3,
              label: 'Вступ',
              value: 'AdmissionPage',
              url: '/admission'
            },
            {
              id: 4,
              label: 'Олімпіада',
              value: 'OlympiadPage',
              url: '/olympiad'
            },
            {
              id: 5,
              label: 'Блог',
              value: 'BlogPage',
              url: '/blog'
            },
            {
              id: 6,
              label: 'Результати іспитів',
              value: 'ExamsPage',
              url: '/exams'
            },
            {
              id: 7,
              label: 'Контакти',
              value: 'ContactPage',
              url: '/contact'
            }
          ]
        },
        signInActive: false,
        signUpActive: false
      }
    },
    created() {

    },
    methods: {}
  }
</script>

<style scoped>

</style>
