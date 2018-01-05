<template>
    <header>
      <div class="flex-container">
        <div class="logo">
          <h1>NURE INFO</h1>
        </div>
        <div class="signing">
          <a href="">Вход</a>
          <a href="">Регистрация</a>
        </div>
      </div>
      <MainSlider />
      <nav>
        <ul class="nav-list">
          <li class="nav-item" v-for="item in navBar.items" v-on:click="onClick">
            <router-link :to="item.url">{{ item.label }}</router-link>
          </li>
        </ul>
      </nav>
    </header>
</template>

<script>
  import MainSlider from '../components/MainSlider';

  export default {
    components: { MainSlider },
    name: 'Header',
    data: function () {
      return {
        navBar: {
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
      onClick: ev => {
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
  }

  .logo {
    display: flex;
    width: 25%;
  }

  .logo h1 {
    display: flex;
    margin: 0;
    color: #fff;
  }

  .signing {
    display: flex;
    width: 75%;
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
