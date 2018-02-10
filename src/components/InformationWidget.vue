<template>
  <div class="item-container">
    <div class="item" v-for="item in items" :key="item.id" @click="showWidgetItem(item)">
      <img :src="item.img" alt="image">
      <div class="item-content">
        <h4>{{ item.title }}</h4>
        <div>
          <p>{{ item.description }}</p>
          <p class="continued">...</p>
          <v-btn class="read-more-button" dark>Читати більше...</v-btn>
        </div>
      </div>
    </div>
  </div>
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
