<template>
  <v-layout row justify-center>
    <v-dialog v-model="show" persistent max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="headline">Реєстрація</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="surname"
                              label="Прізвище"
                              hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="name" label="Ім'я" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="patronymic" label="По батькові" hint="example of persistent helper text"
                              required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="email" label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="password" label="Пароль" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Вiк"
                  required
                  :items="['0-17', '18-29', '30-54', '54+']"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Iнтереси"
                  multiple
                  autocomplete
                  chips
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*вказує обов'язкові для заповнення поля
          </small>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" dark class="signup-enter">Зареєструватися</v-btn>
          <v-btn color="blue darken-1" class="signup-close" flat @click.native="close">Закрити</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'SignUp',
    props: {
      show: Boolean
    },
    data() {
      return {
        dialog: false,
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        password: ''
      }
    },
    methods: {
      close() {
        this.name = '';
        this.surname = '';
        this.patronymic = '';
        this.email = '';
        this.password = '';
        this.$emit('closeModal');
      }
    }
  }
</script>

<style scoped>
  .signup-enter {
    margin-left: 40%;
  }

  .signup-close {

  }

</style>
