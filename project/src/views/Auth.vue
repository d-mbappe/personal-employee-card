<template>
    <v-app>
        <main>
            <v-container fluid fill-height class="loginOverlay mt-10">
                <v-layout flex align-center justify-center>
                    <v-flex xs12 sm4 elevation-6>
                        <v-toolbar class="pt-1 primary" rounded>
                            <v-flex id="auth-header">
                                <button id="log" text class="auth-btn" :class="{'active-name': logActive}"  @click="changeForm($event, 'log')">Вход</button>
                                    <button id="reg" text class="auth-btn" :class="{'active-name': regActive}"  @click="changeForm($event, 'reg')">Регистрация</button>
                            </v-flex>
                            </v-toolbar-items>
                        </v-toolbar>
                        <v-card >
                            <v-card-text class="pt-4">
                                <div>
                                    <v-form v-if="logActive" v-model="valid" ref="form">
                                        <v-text-field
                                                label="Введи логин"
                                                v-model="email"
                                                :rules="emailRules"
                                                required
                                                outlined
                                        ></v-text-field>
                                        <v-text-field
                                                label="Введите пароль"
                                                v-model="password"
                                                min="8"

                                                :type="e1 ? 'password' : 'text'"
                                                :rules="passwordRules"
                                                counter
                                                required
                                                outlined
                                        ></v-text-field>
                                        <v-layout justify-space-between class="mt-10">
                                            <v-btn @click="submit" :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }">Войти</v-btn>
                                            <a href="">Забыли пароль?</a>
                                        </v-layout>

                                    </v-form>
                                    <!---->

                                    <v-form v-if="regActive" v-model="valid" ref="form">
                                        <v-text-field
                                                label="Введи логин"
                                                v-model="email"
                                                :rules="emailRules"
                                                required
                                                outlined
                                        ></v-text-field>
                                        <v-text-field
                                                label="Введите пароль"
                                                v-model="password"
                                                min="8"

                                                :type="e1 ? 'password' : 'text'"
                                                :rules="passwordRules"
                                                counter
                                                required
                                                outlined
                                        ></v-text-field>

                                        <v-text-field
                                                label="Подтвердите пароль"
                                                v-model="password"
                                                min="8"

                                                :type="e1 ? 'password' : 'text'"
                                                :rules="passwordRules"
                                                counter
                                                required
                                                outlined
                                        ></v-text-field>
                                        <v-layout justify-space-between class="mt-10">
                                            <v-btn @click="submit" :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }">Войти</v-btn>
                                            <a href="">Забыли пароль?</a>
                                        </v-layout>

                                    </v-form>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </main>
    </v-app>
</template>

<script>
    export default {
        name: "Auth",

        data() {
            return {
                regActive:  false,
                logActive: true,


                valid: false,
                e1: true,
                password: '',
                passwordRules: [
                    (v) => !!v || 'Пароль обязателен',
                ],
                email: '',
                emailRules: [
                    (v) => !!v || 'E-mail обязателен',
                    (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail должен быть валидным'
                ],
            }
        },
        methods: {
            changeForm(e, curr) {
                if (e.target.id === 'reg') {
                    console.log('reg')
                    this.regActive = true;
                    this.logActive = false;
                } else  {
                    this.regActive = false;
                    this.logActive = true;
                }


            },

            submit () {
                if (this.$refs.form.validate()) {
                    this.$refs.form.$el.submit()
                }
            },
            clear () {
                this.$refs.form.reset()
            }
        },
    }
</script>

<style lang="scss">

    #auth-header {
        .auth-btn {
            color: white;
            text-transform: none;
            font-size: 18px;
            opacity: .8;

            margin-right: 20px;

            &:before {
                background-color: inherit;
            }

            &.active-name {
                opacity: 1;
                font-size: 24px;
            }
        }
    }

</style>