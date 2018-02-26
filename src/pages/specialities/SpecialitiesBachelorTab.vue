<script>

  export default {
    name: 'SpecialitiesBachelorTab',
    data() {
      return {
      }
    },
    methods: {
    },
  }
</script>

<template>
  <div>Bachelor</div>
  <!--
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
            <div v-if="tab==='Денна форма навчання'">
              <v-data-table
                v-bind:headers="specialities.headers.bachelor.daily"
                :items="specialities.items.bachelor.daily"
                hide-actions
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.cipher }}</td>

                  <td class="text-xs-right">
                    {{ props.item.specialty }}
                  </td>


                  <td class="text-xs-right">
                    {{ props.item.specialization }}
                  </td>
                  <td class="text-xs-right">{{ props.item.faculty }}</td>
                  <td class="text-xs-right">{{ props.item.marks }}</td>
                  <td class="text-xs-right">{{ props.item.minMark }}</td>
                  <td class="text-xs-right">{{ props.item.volume }}</td>
                  <td class="text-xs-right">{{ props.item.period }}</td>
                  <td class="text-xs-right">{{ props.item.cost }}</td>
                </template>
              </v-data-table>
            </div>
            <div v-if="tab==='Заочна форма навчання'">
              <v-data-table
                v-bind:headers="specialities.headers.bachelor.extramural"
                :items="specialities.items.bachelor.extramural"
                hide-actions
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.cipher }}</td>
                  <td class="text-xs-right">{{ props.item.specialty }}</td>
                  <td class="text-xs-right">{{ props.item.specialization }}</td>
                  <td class="text-xs-right">{{ props.item.volume }}</td>
                  <td class="text-xs-right">{{ props.item.cost }}</td>
                </template>
              </v-data-table>
            </div>
          </v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
  -->
</template>

<style scoped>
</style>

