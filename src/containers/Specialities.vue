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
        <v-toolbar-title slot="extension" class="display-2 title">СПЕЦІАЛЬНОСddТІ ТА СПЕЦІАЛІЗАЦІЇ ДЛЯ ВСТУПУ ДО ХНУРЕ</v-toolbar-title>
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
              <v-data-table
                v-bind:headers="specialities.headers"
                :items="specialities.items"
                hide-actions
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.specialty }}</td>
                  <td class="text-xs-right">{{ props.item.specialization }}</td>
                  <td class="text-xs-right">{{ props.item.marks }}</td>
                  <td class="text-xs-right">{{ props.item.minMark }}</td>
                  <td class="text-xs-right">{{ props.item.volume }}</td>
                  <td class="text-xs-right">{{ props.item.period }}</td>
                  <td class="text-xs-right">{{ props.item.cost }}</td>
                </template>
              </v-data-table>
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

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

   export default {
    components: {},
    name: 'Specialities',
    data() {
      const tabs = ['Бакалавр (на 1-й курс)', 'Магістр', 'Друга вища освіта'];

      return {
        tabs,
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


</style>
