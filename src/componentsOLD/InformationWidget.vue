<template>
  <v-layout class="item-container" row wrap>
    <v-flex class="item" d-flex xs12 sm4 md4 child-flex  v-for="item in items" :key="item.id" @click="showWidgetItem(item)">
        <img :src="item.img" alt="image">
        <div class="item-content">
          <h4>{{ item.title }}</h4>
          <div>
            <p>{{ item.description }}</p>
            <p class="continued">...</p>
            <v-btn class="read-more-button" dark>Читати більше...</v-btn>
          </div>
        </div>
    </v-flex>
  </v-layout>

</template>

<script>
  export default {
    name: 'InformationWidget',
    props: {
      info: Array
    },
    data() {
      return {
        items: []
      }
    },
    created() {
      this.items = this.info;
    },
    methods: {
      showWidgetItem(data) {
        if (data.value) {
          this.$router.push({path: 'admission', query: {component: data.value}});
        }
      }
    }
  }
</script>

<style scoped>


</style>
