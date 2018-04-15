<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'

  import { getUserPages } from '../../utils'
  import { ACTIONS, MUTATIONS, GETTERS, ROUTES } from '../../common'
  import { addRoutes } from '../../router'

  import logo from '../../assets/img/nure-logo.png'

  export default {
    name: 'TheLoading',
    data() {
      return { logo }
    },
    computed: {
      ...mapGetters({
        currentUserIsAdmin: GETTERS.GET_USER_ADMIN_ACCESS
      })
    },
    async created() {
      const userPages = getUserPages(this.currentUserIsAdmin);
      // user scope - pages which user have access
      this.setUserScope([...userPages]);
      // set routes by scope of user
      addRoutes([...userPages]);

      // upload all entities
      await this.uploadAllEntities();

      this.$router.push(ROUTES.MAIN)
    },
    methods: {
      ...mapActions({
        uploadAllEntities: ACTIONS.UPLOAD_ALL_ENTITIES
      }),
      ...mapMutations({
        setUserScope: MUTATIONS.SET_USER_SCOPE
      })
    }
  }
</script>

<template>
  <div class="TheLoading">
    <div class="TheLoading_progress">
      <img class="TheLoading_logo" :src=logo alt="">
      <h2 class="TheLoading_title">Приймальна комісія ХНУРЕ</h2>
      <v-progress-circular class="TheLoading_spinner" indeterminate color="grey lighten-4"></v-progress-circular>
    </div>
  </div>
</template>

<style scoped>
</style>

