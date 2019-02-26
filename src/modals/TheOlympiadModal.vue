<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import VueNotifications from 'vue-notifications'

  import { MUTATIONS, GETTERS, ACTIONS } from '../common'
  import * as utils from '../utils'

  const initialState = {
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
  };

  export default {
    name: 'TheOlympiadModal',
    data() {
      return {
        ...initialState,
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
    // todo:  change it
    notifications: {
      showSuccessMsg: {
        type: VueNotifications.types.success,
        title: 'Ви успішно зареєструвались на участь у Олімпіаді',
        message: 'Завдання були вислани на вашу пошту',
        timeout: 5000,
      },
      showInfoMsg: {
        type: VueNotifications.types.info,
        title: 'Hey you',
        message: 'Here is some info for you'
      },
      showWarnMsg: {
        type: VueNotifications.types.warn,
        title: 'Wow, man',
        message: 'That\'s the kind of warning'
      },
      showErrorMsg: {
        type: VueNotifications.types.error,
        title: 'Wow-wow',
        message: 'That\'s the error'
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
        Object.assign(this, initialState);
      },
      async onSubmit() {
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
          const res = await this.olympiadRegisterUser(userOlympicData);
          if (res) {
            this.showSuccessMsg();
            this.hideOlympicModal();
          }
        }
      },
      hideOlympicModal() {
        this.setInitialState();
        this.closeOlympiadModal()
      },
      ...mapMutations({
        closeOlympiadModal: MUTATIONS.CLOSE_OLYMPIAD_MODAL,
      }),
      ...mapActions({
        olympiadRegisterUser: ACTIONS.OLYMPIAD_REGISTER_USER,
      })
    },
  }
</script>

<template>
  <v-layout row justify-center>
    <v-dialog v-model="olympiadModal.show" persistent width="80%">
      <v-card>

        <v-card-title>
          <span class="headline">Форма для реєстрації на участь в олімпіаді ХНУРЕ</span>
          <div class="inline-1-flex justify-end">
            <v-icon @click="hideOlympicModal" large class="cancel-icon">fa-times</v-icon>
          </div>
        </v-card-title>
        <v-form v-model="valid" ref="form">

            <v-layout wrap class="p-5">
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
                <v-text-field placeholder="+380........"
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
                      <v-list-tile-title>Українська мова та література</v-list-tile-title>
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
        </v-form>

        <v-card-actions>
          <v-layout wrap>
            <v-flex xs12 sm6 md6 style="text-align: right">
              <v-btn color="success" :disabled="!valid" @click="onSubmit">Зареєструватись в олімпіаді</v-btn>
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

