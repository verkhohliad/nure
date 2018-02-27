<script>
  import { mapGetters, mapActions } from 'vuex'

  import { ACTIONS, GETTERS } from '../common'
  import * as utils from '../utils'

  export default {
    name: 'TheOlympiadModal',
    data() {
      return {
        surname: '',
        name: '',
        patronymic: '',
        placeOfStudy: '',
        phone: '',
        email: '',
        subjects: {
          ukrainian: false,
          maths: false,
          biology: false,
        },
        valid: false,
        rules: {
          userNameRules: [
            v => !!v || 'Обов\'язкове поле',
            v => utils.validateUserName(v) || 'Поле повинно бути не менше 3х символів',
          ],
          emailRules: [
            v => !!v || 'Обов\'язкове поле',
            v => utils.validateEmail(v) || 'E-mail повинен бути валідним',
          ],
          phoneRules: [
            v => !!v || 'Обов\'язкове поле',
            v => utils.validatePhoneNumber(v) || 'Номер телефону повинен бути валідним',
          ],
          placeOfStudyRules: [
            v => !!v || 'Обов\'язкове поле',
            v => utils.validatePlaceOfStudy(v) || 'Поле повинно бути не менше 5 символів',
          ],
        },
      }
    },
    computed: {
      ...mapGetters({
        olympiadModal: GETTERS.GET_OLYMPIAD_MODAL,
      }),
    },
    beforeDestroy() {
      this.setInitialState();
    },
    methods: {
      setInitialState() {
        this.name = '';
        this.surname = '';
        this.patronymic = '';
        this.email = '';
        this.phone = '';
        this.placeOfStudy = '';
        this.subjects = {
          ukrainian: false,
          maths: false,
          biology: false,
        };
        this.valid = false;
      },
      submit() {
        if (this.$refs.form.validate() && utils.getSelectedSubjects(this.subjects).length > 0) {
          const userOlympicData = {
            name: utils.getValidString(this.name),
            surname: utils.getValidString(this.surname),
            patronymic: utils.getValidString(this.patronymic),
            placeOfStudy: utils.getValidString(this.placeOfStudy),
            email: this.email.trim(),
            phone: this.phone.trim(),
            subjects: utils.getSelectedSubjects(this.subjects),
          };
          console.log(userOlympicData);
        }
      },
      hideOlympicModal() {
        this.setInitialState();
        this.switchOlympiadModal()
      },
      ...mapActions({
        switchOlympiadModal: ACTIONS.SWITCH_OLYMPIAD_MODAL,
      }),
    },
  }
</script>

<template>
  <v-layout row justify-center>
    <v-dialog v-model="olympiadModal" persistent width="80%">
      <v-card>

        <v-card-title>
          <span class="headline">Форма для реєстрації на участь в олімпіаді ХНУРЕ</span>
          <div class="inline-1-flex justify-end">
            <v-icon @click="hideOlympicModal" large class="cancel-icon">fa-times</v-icon>
          </div>
        </v-card-title>

        <v-form v-model="valid" ref="form">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field :rules="rules.userNameRules"
                              v-model="surname"
                              label="Прізвище"
                              required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field :rules="rules.userNameRules"
                              v-model="name"
                              label="Ім'я"
                              required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field :rules="rules.userNameRules"
                              v-model="patronymic"
                              label="По-батькові"
                              required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field :rules="rules.placeOfStudyRules"
                              v-model="placeOfStudy"
                              label="Назва навчального закладу освіти"
                              required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field placeholder="+38096......"
                              :rules="rules.phoneRules"
                              v-model="phone"
                              label="Номер телефону"
                              prepend-icon="phone"
                              required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field :rules="rules.emailRules"
                              label="Email"
                              prepend-icon="email"
                              v-model="email"
                              required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-list three-line subheader>
                  <v-subheader>Оберіть предмети для участі в олімпіаді*</v-subheader>
                  <v-list-tile href="javascript:;">
                    <v-list-tile-action>
                      <v-checkbox v-model="subjects.ukrainian"></v-checkbox>
                    </v-list-tile-action>

                    <v-list-tile-content @click="subjects.ukrainian = !subjects.ukrainian">
                      <v-list-tile-title>Українська мова</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile href="javascript:;">
                    <v-list-tile-action>
                      <v-checkbox v-model="subjects.maths"></v-checkbox>
                    </v-list-tile-action>

                    <v-list-tile-content @click="subjects.maths = !subjects.maths">
                      <v-list-tile-title>Математика</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile href="javascript:;">
                    <v-list-tile-action>
                      <v-checkbox v-model="subjects.biology"></v-checkbox>
                    </v-list-tile-action>

                    <v-list-tile-content @click="subjects.biology = !subjects.biology">
                      <v-list-tile-title>Біологія</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>

        <v-card-actions>
          <v-layout wrap>
            <v-flex xs12 sm6 md6 style="text-align: right">
              <v-btn color="success" :disabled="!valid" @click="submit">Зареєструватись в олімпіаді</v-btn>
            </v-flex>
            <v-flex xs12 sm6 md6 style="text-align: center">
              <v-btn color="error" @click="hideOlympicModal">Закрити</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<style scoped>
</style>

