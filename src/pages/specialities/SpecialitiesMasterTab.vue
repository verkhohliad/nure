<script>
  import MasterTabDailyTable from './MasterTabDailyTable'
  import MasterTabExtramuralTable from './MasterTabExtramuralTable'
  import { SPECIALITIES_PAGE } from '../../common'

  export default {
    name: 'SpecialitiesMasterTab',
    components: { MasterTabDailyTable, MasterTabExtramuralTable },
    data() {
      return {
        childTabs: [{
          name: SPECIALITIES_PAGE.TABS.DAILY,
          component: MasterTabDailyTable.name,
        }, {
          name: SPECIALITIES_PAGE.TABS.EXTRAMURAL,
          component: MasterTabExtramuralTable.name,
        }],
      }
    },
    methods: {
    },
  }
</script>

<template>
  <v-tabs fixed centered>
    <v-tabs-bar class="cyan specialities-tabs default_grey-background specialities-tabs" dark>
      <v-tabs-item
        v-for="tab in childTabs"
        :key="tab.name"
        :href="'#' + tab.name"
        ripple>
        {{ tab.name }}
      </v-tabs-item>
      <v-tabs-slider color="white"></v-tabs-slider>
    </v-tabs-bar>

    <v-tabs-items>
      <v-tabs-content
        v-for="tab in childTabs"
        :key="tab.name"
        :id="tab.name"
        lazy>
        <v-card flat>
          <v-card-text class="information-tab">
            <div :is="tab.component"/>
          </v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
</template>

<style scoped>
</style>

