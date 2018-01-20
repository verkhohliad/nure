<template>
  <div class="specialities">
    <v-tabs fixed centered>
      <v-toolbar extended class="blue-background specialities-toolbar" dark>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-toolbar-title slot="extension" class="display-0 title">СПЕЦІАЛЬНОСТІ ТА СПЕЦІАЛІЗАЦІЇ ДЛЯ ВСТУПУ ДО ХНУРЕ
        </v-toolbar-title>
      </v-toolbar>
      <v-tabs-bar class="cyan specialities-tabs blue-background specialities-tabs" dark>
        <v-tabs-item
          v-for="tab in tabs"
          :key="tab"
          :href="'#' + tab"
          ripple
        >
          {{ tab }}
        </v-tabs-item>
        <v-tabs-slider color="yellow"></v-tabs-slider>
      </v-tabs-bar>

      <v-tabs-items>
        <v-tabs-content
          v-for="tab in tabs"
          :key="tab"
          :id="tab"
        >
          <v-card flat>
            <v-card-text class="information-tab">
              <div v-if="tab==='Бакалавр'">
                <v-tabs fixed centered>
                  <v-tabs-bar class="cyan specialities-tabs blue-background specialities-tabs" dark>
                    <v-tabs-item
                      v-for="tab in childTabs"
                      :key="tab"
                      :href="'#' + tab"
                      ripple
                    >
                      {{ tab }}
                    </v-tabs-item>
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                  </v-tabs-bar>

                  <v-tabs-items>
                    <v-tabs-content
                      v-for="tab in childTabs"
                      :key="tab"
                      :id="tab"
                    >
                      <v-card flat>
                        <v-card-text class="information-tab">
                          <div v-if="tab==='1 курс'">
                            <v-data-table
                              v-bind:headers="specialities.headers"
                              :items="specialities.items"
                              hide-actions
                              class="elevation-1"
                            >
                              <template slot="items" slot-scope="props">
                                <td>{{ props.item.cipher }}</td>
                                <td class="text-xs-right">{{ props.item.specialty }}</td>
                                <td class="text-xs-right">{{ props.item.specialization }}</td>
                                <td class="text-xs-right">{{ props.item.marks }}</td>
                                <td class="text-xs-right">{{ props.item.minMark }}</td>
                                <td class="text-xs-right">{{ props.item.volume }}</td>
                                <td class="text-xs-right">{{ props.item.period }}</td>
                                <td class="text-xs-right">{{ props.item.cost }}</td>
                              </template>
                            </v-data-table>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tabs-content>
                  </v-tabs-items>
                </v-tabs>
              </div>
              <div v-else>
                <h4>table for master</h4>
              </div>
            </v-card-text>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
    <div class="specialities-content">
      <h5>Умовні позначення:</h5>
      <ul>
        <li>У - Українська мова та література;</li>
        <li>М - Математика;</li>
        <li>Ф - Фізика;</li>
        <li>А - Астрономія;</li>
        <li>Х - Хімія;</li>
        <li>IМ - Іноземна мова;</li>
        <li>ІУ - Історія України;</li>
        <li>A - Атестат про середню освіту;</li>
        <li>П - Пiдкурси ХНУРЕ.</li>
      </ul>
      <h1>ФОРМИ І ТЕРМІНИ НАВЧАННЯ:</h1>
      <div>
        <h5>Денна</h5>
        <ul>
          <li>4 роки - бакалавр;</li>
          <li>1,5 або 2 роки - магістр.</li>
        </ul>
      </div>
      <div>
        <h5>Заочна</h5>
        <ul>
          <li>5 роки - бакалавр;</li>
          <li>1,5 або 2 роки - магістр з використанням технологій дистанційного навчання.</li>
        </ul>
      </div>

           <div>
        <h5>Контрактна форма навчання:</h5>
        <ul>
          <li>Можлива для всіх спеціальностей на будь-якої спеціалізації.</li>
        </ul>
          </div>
    
        <div>
        <h5>Друга вища освіта:</h5>
        <ul>
          <li>В університеті ХНУРЕ можливо отримати другу вищу освіту в Центрі післядипломної освіти (кімната 283, т. 702-18-05) на контракті з двох або трирічним терміном навчання.</li>
         
        </ul>
       </div>


       <div>
        <h5>Для вступу на навчання із скороченим терміном підготовки для отримання ступеня бакалавра приймаються особи, які отримали навчально-кваліфікаційний рівень молодшого спеціаліста:</h5>
        <ul>
          <li>1-й (скорочений термін навчання);</li>
          <li>2-й курс з терміном навчання 3 роки;</li>
          <li>  3-1 курс з терміном навчання 2 роки.</li>
         </ul>
      </div>


       <div>
        <h5>Студенти ХНУРЕ мають можливість:</h5>
        <ol>
          <li> Навчатися на військовій кафедрі;</li>
<li> Отримати європейський диплом за програмою подвійного дипломування;</li>
<li> Брати участь в міжнародних стажуваннях і обмінах;</li>
<li> Проживати в гуртожитку;</li>
<li> Брати участь в студентських і спортивних клубах;</li>
<li> Отримувати практичні навички в українських і міжнародних компаніях.</li>
        </ol>
      </div>


    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    components: {},
    name: 'Specialities',
    data() {
      const tabs = ['Бакалавр', 'Магістр'];
      const childTabs = ['1 курс', '2 курс', '3 курс'];
      return {
        tabs,
        childTabs,
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    beforeCreate() {
      this.$store.dispatch('fetchData');
    },
    created() {
      console.log(this.specialities);
    },
    computed: {
      ...mapGetters({
        specialities: 'getSpecialities'
      })
    },
    methods: {}
  }
</script>

<style scoped>
  .information-tab {
    padding: 0;
  }
</style>