<template>
  <v-layout row justify-center>
    <v-dialog v-model="show" persistent max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="headline">Вхiд</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="email" label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="password" label="Пароль" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>Забули пароль?</small>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" dark class="login-enter">Увійти</v-btn>
          <v-btn color="blue darken-1" class="login-close" flat @click.native="close">Закрити</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'SignIn',
    props: {
      show: Boolean
    },
    data() {
      return {
        dialog: false,
        email: '',
        password: ''
      }
    },
    methods: {
      close() {
        this.email = '';
        this.password = '';
        this.$emit('closeModal');
      }
    }
  }
</script>

<style scoped>
  .login-enter {
    margin-left: 40%;
  }

  .login-close {
    /*add breakpoints*/

  }

</style>
