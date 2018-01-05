<template>
    <header>
      <div class="flex-container">
        <div class="logo">
          <img :src="navBar.logo" alt="">
          <h1>NURE INFO</h1>
        </div>
        <div class="signing">
          <div>
            <v-btn flat dark>Вход</v-btn>
          </div>
          <div>
            <v-btn flat dark>Регистрация</v-btn>
          </div>
        </div>
      </div>
      <MainSlider />
      <nav>
        <ul class="nav-list">
          <li class="nav-item" v-for="item in navBar.items" v-on:click="$_Header_onClick" :key="item.id">
            <router-link :to="item.url">{{ item.label }}</router-link>
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
    data: function () {
      return {
        navBar: {
          logo: nureLogo,
          items: [
            {
              id: 1,
              label: 'Главная',
              value: 'MainPage',
              url: '/'
            },
            {
              id: 2,
              label: 'Специальности',
              value: 'SpecialitiesPage',
              url: '/specialities'
            },
            {
              id: 3,
              label: 'Поступление',
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
              label: 'Результаты экзаменов',
              value: 'ExamsPage',
              url: '/exams'
            },
            {
              id: 6,
              label: 'Контакты',
              value: 'ContactPage',
              url: '/contact'
            }
          ]
        }
      }
    },
    created: function () {

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
    display: flex;
    margin: 0;
    color: #fff;
  }

  .logo img {
    width: 70px;
    height: 50px;
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
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .nav-list .nav-item {
    display: inline-block;
    margin: 25px;
  }

  .nav-list .nav-item a {
    display: inline-block;
  }

</style>
