<template>
  <div class="specialities">
    <h1>СПЕЦІАЛЬНОСТІ ТА СПЕЦІАЛІЗАЦІЇ ДЛЯ ВСТУПУ ДО ХНУРЕ</h1>

    <v-tabs v-model="active">
      <v-tabs-bar class="cyan" dark>
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
