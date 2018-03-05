<script>
  import { GOOGLE } from '../common';

  export default {
    name: 'GoogleMap',
    data() {
      return {
        location: GOOGLE.MAP_LOCATION_OF_UNIVERSITY,
      }
    },
    methods: {},
  }
</script>

<template>
  <div class="google-map">
    <gmap-map class="map-container" :center="{lat: location.lat, lng: location.lng}" :zoom="15">
      <gmap-marker :position="{lat: location.lat, lng: location.lng}">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<style scoped>
  .google-map {
    width: 100%;
  }
  .map-container {
    width: 100% !important;
    height: 50vh !important;
  }
</style>

