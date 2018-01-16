<template>
  <header>
    <v-toolbar class="header-toolbar">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <div class="signing">
        <div>
          <v-btn flat dark>Вхід</v-btn>
        </div>
        <div>
          <v-btn flat dark>Реєстрація</v-btn>
        </div>
      </div>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax src="../../img/bg2.jpeg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <div class="white--text mb-2 display-1 text-xs-center header-bar">
              <div class="logo">
                <img :src="navBar.logo" alt="">
                <h3 class="name">Офіційна сторінка приймальної комісії
                  Харьківського Національного Університету Радіоелектроніки</h3>
              </div>
            </div>
          </v-layout>
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
  </header>
</template>

<script>
  import MainSlider from '../components/MainSlider';
  import nureLogo from '../../img/nure-logo.png';

  export default {
    components: { MainSlider },
    name: 'Header',
    data() {
      return {
        navBar: {
          logo: nureLogo,
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
              label: 'Блог',
              value: 'BlogPage',
              url: '/blog'
            },
            {
              id: 5,
              label: 'Результати іспитів',
              value: 'ExamsPage',
              url: '/exams'
            },
            {
              id: 6,
              label: 'Контакти',
              value: 'ContactPage',
              url: '/contact'
            }
          ]
        }
      }
    },
    created() {

    },
    methods: {
      $_Header_onClick: ev => {
      }
    }
  }
</script>

<style scoped>
  header {
    background: #05384d;
  }

  .header-toolbar {
    background: #032735;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .header-bar {
    background-color: rgba(0, 0, 0, 0.65);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 2%;
    width: 60%;
  }

  .header-bar .name {

  }

  .flex-container {
    display: flex;
    padding: 12px;
    width: 100%;
    margin: 0 auto;
    height: 400px;
    background: url('../../img/bg.jpeg')
  }

  .logo {
    display: flex;
    justify-content: center;
  }

  .logo h5 {
    font-weight: bold;
    display: inline-flex;
    margin: 10px 0;
    color: #fff;
  }

  .logo img {
    height: 50px;
    display: inline-flex;
  }

  .signing {
    display: flex;
    width: 80%;
    justify-content: flex-end;
  }

  .signing a {
    display: inline-block;
    margin: 15px;
  }

  .nav-list {
    background: #032735;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .nav-list .nav-item {
    display: inline-block;
    margin: 10px;
  }

  .nav-list .nav-item a {
    display: inline-block;
  }

</style>
