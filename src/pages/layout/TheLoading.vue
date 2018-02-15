<script>
  import { getUserPages } from '../../utils'
  import { MUTATIONS, ROUTES } from '../../common'
  import { addRoutes } from '../../router'

  export default {
    name: 'TheLoading',
    data() {
      return {
      }
    },
    async created() {
      this.createUserScope();

      await this.loadEntities();
      this.$router.push(ROUTES.MAIN)
    },
    methods: {
      createUserScope() {
        const userPages = getUserPages(this.$store.state.user.isAdmin);
        addRoutes([...userPages]);

        // while the whole scope is just pages
        this.$store.commit(MUTATIONS.SET_USER_SCOPE, [...userPages]);
      },
      loadEntities() {
        // todo: temporary shit
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        })
      },
    },
  }
</script>

<template>
  <div class="TheLoading">
    <v-progress-circular class="TheLoading-spinner" indeterminate color="grey lighten-4"></v-progress-circular>
  </div>
</template>

<style scoped>
</style>

