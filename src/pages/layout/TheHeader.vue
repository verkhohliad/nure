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
    methods: {
      handleScroll() {
        window.pageYOffset >= 80 ? this.transformHeader = true : this.transformHeader = false;
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
              <router-link :to="items[0].path" class="item-link">
                <img class="logo-img" :src=logo alt="">
                <h5 class="logo-name">Приймальна комісія ХНУРЕ</h5>
              </router-link>
            </div>

            <ul class="navigation">
              <li class="item" v-for="item in items.slice(1)" :key="item.path">
                <router-link :to="item.path" class="item-link">
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </nav>
          <h1 class="test-name white--text mb-2 display-1 text-xs-center">Офіційна сторінка приймальної комісії
            Харківського національного університету радіоелектроніки</h1>
          <div class="test-subheading subheading mb-3 text-xs-center">Інформація про вступ до ХНУРЕ у 2018 році</div>
          <v-icon class="scroll-down-icon" @click="$vuetify.goTo('.scroll-down-icon', options)">fa-chevron-down</v-icon>
        </v-layout>
      </v-parallax>
    </section>
  </header>
</template>

<style scoped>

</style>
