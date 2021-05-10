<template>
    <v-app>
        <main>
            <v-container fluid fill-height class="loginOverlay mt-10">
                <v-layout flex align-center justify-center>
                    <v-flex xs12 sm4 elevation-6>
                        <v-toolbar class="pt-1 blue darken-3" rounded>
                            <v-toolbar-title class="white--text"><h4>Вход</h4></v-toolbar-title>
                            </v-toolbar-items>
                        </v-toolbar>
                        <v-card >
                            <v-card-text class="pt-4">
                                <div>
                                    <v-form v-model="valid" ref="form">
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
                                            <router-link to="/">Домой</router-link>

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

<style lang="scss" scoped>

</style>