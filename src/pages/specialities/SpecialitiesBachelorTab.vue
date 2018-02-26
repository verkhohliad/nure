<script>
  import BachelorTabDailyTable from './BachelorTabDailyTable'
  import BachelorTabExtramuralTable from './BachelorTabExtramuralTable'

  export default {
    name: 'SpecialitiesBachelorTab',
    components: { BachelorTabDailyTable, BachelorTabExtramuralTable },
    data() {
      return {
        childTabs: ['Денна форма навчання', 'Заочна форма навчання'],
      }
    },
    methods: {
    },
  }
</script>

<template>
  <v-tabs fixed centered>
    <v-tabs-bar class="cyan specialities-tabs blue-background specialities-tabs" dark>
      <v-tabs-item
        v-for="tab in childTabs"
        :key="tab"
        :href="'#' + tab"
        ripple>
        {{ tab }}
      </v-tabs-item>
      <v-tabs-slider color="yellow"></v-tabs-slider>
    </v-tabs-bar>

    <v-tabs-items>
      <v-tabs-content
        v-for="tab in childTabs"
        :key="tab"
        :id="tab"
        lazy>
        <v-card flat>
          <v-card-text class="information-tab">
            <div v-if="tab==='Денна форма навчання'">
              <BachelorTabDailyTable/>
            </div>
            <div v-if="tab==='Заочна форма навчання'">
              <BachelorTabExtramuralTable/>
            </div>
          </v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
</template>

<style scoped>
</style>

