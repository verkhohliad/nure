<template>
    <header>
      <div class="flex-container">
        <div class="logo">
          <a href="/">
          <img :src="navBar.logo" alt="">
          <h1>NURE INFO</h1>
        </a>
        </div>
        <div class="signing">
          <div>
            <v-btn flat dark>Вхід</v-btn>
          </div>
          <div>
            <v-btn flat dark>Реєстрація</v-btn>
          </div>
        </div>
      </div>
      <MainSlider />
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

  a {
    text-decoration: none;
    color: #fff;
  }

  .flex-container {
    display: flex;
    padding: 12px;
    width: 85%;
    margin: 0 auto;
  }

  .logo {
    display: flex;
    width: 20%;
    justify-content: center;
  }

  .logo h1 {
    font-weight: bold;
    font-size: 26px;
    display: inline-flex;
    margin: 0;
    color: #fff;
  }


  .logo img {
    width: 70px;
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
