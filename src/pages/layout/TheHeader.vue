<script>
  import { mapGetters } from 'vuex'

  import MainSlider from '../../componentsOLD/MainSlider'
  import logo from '../../assets/img/nure-logo.png'
  import bgImg from '../../assets/img/test3.jpg'
  import { GETTERS } from '../../common'
  // import bgImg from '../../assets/img/bg2.jpeg'

  export default {
    components: { MainSlider },
    name: 'TheHeader',
    data() {
      return {
        logo,
        bgImg,
        transformHeader: false
      }
    },
    computed: {
      ...mapGetters({
        items: GETTERS.GET_USER_SCOPE,
      }),
    },
    created() {
      // window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        window.pageYOffset >= 80 ? this.transformHeader = true : this.transformHeader = false;
        console.log(window.pageYOffset);
      }

    },
  }
</script>

<template>
  <header class="TheHeader" v-scroll="handleScroll">
    <section>
      <v-parallax :src="bgImg" class="content-parallaxImg">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <nav v-bind:class="[transformHeader ? 'transformed' : '']">
            <div class="logo">
              <img class="logo-img" :src=logo alt="">
              <h5 class="logo-name">Приймальна комісія ХНУРЕ</h5>
            </div>

            <ul class="navigation">
              <li class="item" v-for="item in items" :key="item.path">
                <router-link :to="item.path" class="item-link">
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </nav>
          <h1 class="test-name white--text mb-2 display-1 text-xs-center">Офіційна сторінка приймальної комісії
            Харківського національного університету радіоелектроніки</h1>
          <div class="test-subheading subheading mb-3 text-xs-center">Інформація про вступ до ХНУРЕ 2018</div>
          <v-icon class="scroll-down-icon" @click="$vuetify.goTo('.scroll-down-icon', options)">fa-chevron-down</v-icon>
        </v-layout>
      </v-parallax>
    </section>
  </header>
</template>

<style scoped>

  .transformed {
    background: rgb(47, 48, 48);
    padding: 5px 10%;
  }

  .TheHeader {
    font-family: "Century Gothic";
    z-index: 5;
  }

  .scroll-down-icon {
    color: #fff;
    margin-top: 20vh;
    font-size: 30px;
    cursor: pointer;

  }

  .logo-img {
    height: 50px;
    display: inline-flex;
  }

  nav {
    z-index: 10;
    transition: all 0.6s ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 16px 10%;
    background: rgba(0, 0, 0, 0.25);
    font-weight: bold;
  }

  .logo-name {
    margin-left: 3%;
    font-weight: bold;
  }

  .logo {
    display: flex;
    flex: 1 1 25%;
    justify-content: flex-start;
    font-weight: bold;
    align-items: center;
  }

  .navigation {
    font-size: 16px;
    display: flex;
    flex: 1 1 100%;
    justify-content: flex-end;
  }

  .item {
    display: inline-block;
    margin: 15px;
    color: #fff;
  }

  .item-link {
    color: #fff;
  }
  .item-link:hover {
    text-decoration: none;
    color: rgb(222, 224, 226);
  }

  .test-name {
    margin-top: 35vh;
    width: 60%;
    font-weight: bold;

  }

  .test-subheading {
    border-top: 2px solid rgba(255, 255, 255, 0.6);
    margin-top: 5vh;
    padding-top: 15px;
    font-weight: bold;
  }
</style>
