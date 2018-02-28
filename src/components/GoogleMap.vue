<script>
  import { getGoogleCoordinates } from '../api/google';

  export default {
    name: 'GoogleMap',
    data() {
      return {
        location: null
      }
    },
    methods: {},
    created: async function () {
      const data = await getGoogleCoordinates();

      this.location = data.results[0].geometry.location;
    }
  }
</script>

<template>
  <div class="google-map">
    <div v-if="location">
      <gmap-map class="map-container" :center="{lat:location.lat, lng:location.lng}" :zoom="12">
        <gmap-marker :position="{lat:location.lat, lng:location.lng}">
        </gmap-marker>
      </gmap-map>
    </div>
    <div v-if="!location">
      <h2>Завантаження...</h2>
    </div>
  </div>
</template>

<style scoped>
  .map-container {
    width: 100% !important;
    height: 250px !important;
  }
</style>

