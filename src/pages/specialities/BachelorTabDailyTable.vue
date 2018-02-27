<script>
  import { mapGetters } from 'vuex'

  import { GETTERS, SPECIALITIES_PAGE } from '../../common'

  export default {
    name: 'BachelorTabDailyTable',
    data() {
      return {
        headers: [
          { text: SPECIALITIES_PAGE.TABLE_HEADERS.CIPHER, value: 'cipher' },
          { text: SPECIALITIES_PAGE.TABLE_HEADERS.SPECIALITY, value: 'specialty_name' },
          { text: SPECIALITIES_PAGE.TABLE_HEADERS.SPECIALIZATION, value: 'name' },
          { text: SPECIALITIES_PAGE.TABLE_HEADERS.FACULTY, value: 'faculty_name' },
          { text: SPECIALITIES_PAGE.TABLE_HEADERS.MARKS, value: 'marks' },
          { text: SPECIALITIES_PAGE.TABLE_HEADERS.MIN_MARK, value: 'minMark' },
          { text: SPECIALITIES_PAGE.TABLE_HEADERS.VOLUME, value: 'volume' },
          { text: SPECIALITIES_PAGE.TABLE_HEADERS.PERIOD, value: 'period' },
          { text: SPECIALITIES_PAGE.TABLE_HEADERS.COST, value: 'cost' },
        ],
        pagination: {
          rowsPerPage: 10,
        },
      }
    },
    computed: {
      ...mapGetters({
        specializations: GETTERS.GET_BACHELOR_DAILY_SPECIALIZATIONS,
      }),
    },
    methods: {
    },
  }
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="specializations"
    :pagination.sync="pagination"
    class="elevation-1">
    <template slot="items" slot-scope="props">
      <td>{{ props.item.cipher }}</td>
      <td class="text-xs-right">{{ props.item.speciality_name }}</td>
      <td class="text-xs-right">{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.faculty_name }}</td>
      <td class="text-xs-right">{{ props.item.marks }}</td>
      <td class="text-xs-right">{{ props.item.minMark }}</td>
      <td class="text-xs-right">{{ props.item.volume }}</td>
      <td class="text-xs-right">{{ props.item.period }}</td>
      <td class="text-xs-right">{{ props.item.cost }}</td>
    </template>
  </v-data-table>
</template>

<style scoped>
</style>

