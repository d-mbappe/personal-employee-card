<template>
    <section>
        <CropImage
                @hideModal="hide"
                @setImg="set($event)"
                v-if="modal"
                :img="img"
        />


        <v-main>
            <v-container
                    class="py-8 px-6"
                    fluid
            >
                <v-row>
                    <v-col
                            cols="12"
                    >
                        <v-card class="pa-10">
                            <v-row>
                                <Avatar ref="avatar"
                                        @setImg="setProfileImg($event)"
                                        :imageURL="img"

                                        :original="originalPhoto"
                                />
                                <div class="profile-form">
                                    <v-text-field
                                            v-model="profile.FIO"
                                            label="ФИО"
                                            outlined
                                            clearable
                                    ></v-text-field>

                                    <v-text-field
                                            v-model="profile.position"
                                            label="Должность"
                                            outlined
                                            clearable
                                    ></v-text-field>

                                    <v-text-field
                                            v-model="profile.qualification"
                                            label="Квалификация"
                                            outlined
                                            clearable
                                    ></v-text-field>

                                    <v-col class="pa-0 mt-5">
                                        <v-expansion-panels accordion>
                                            <v-expansion-panel>
                                                <v-expansion-panel-header>Курсы повышения квалификации</v-expansion-panel-header>
                                                <v-expansion-panel-content>

                                                    <v-list>
                                                        <v-list-item-group v-model="model">
                                                            <v-list-item
                                                                    v-for="(item, i) in items"
                                                                    :key="i"
                                                            >
                                                                <v-list-item-icon>
                                                                    <v-icon v-text="item.icon"></v-icon>
                                                                </v-list-item-icon>
                                                                <v-list-item-content>
                                                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-list-item-group>
                                                    </v-list>

                                                    <v-col class="test">
                                                        <v-btn
                                                                fab
                                                                dark
                                                                small
                                                                color="primary"
                                                        >
                                                            <v-icon dark>
                                                                mdi-plus
                                                            </v-icon>
                                                        </v-btn>
                                                    </v-col>

                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panels>
                                    </v-col>

                                    <v-col class="text-right pa-0 mt-5"
                                    >
                                        <v-btn
                                                depressed
                                                color="success"
                                                @click="save"
                                        >
                                            Сохранить
                                        </v-btn>
                                    </v-col>
                                </div>
                            </v-row>

                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </section>

</template>

<script>
    import CropImage from "../components/CropImage";
    import Avatar from "../components/Avatar";

    export default {
        components: {CropImage, Avatar},

        data: () => ({
            modal: false,
            drawer: null,
            img: '',

            courses: [],
            items: [
                {
                    icon: 'mdi-attachment',
                    text: 'Введение в преподавание английского языка как второго языка',
                },
                {
                    icon: 'mdi-attachment',
                    text: 'Практика формирования контента для онлайн-курса в условиях цифрового обучения(исключительно ЭОиДОТ)',
                },
                {
                    icon: 'mdi-attachment',
                    text: 'Создание и использование цифровых образовательных ресурсов в профессиональной деятельности учителя(исключительно ЭОиДОТ)',
                },
                {
                    icon: 'mdi-attachment',
                    text: 'Актуальные вопросы преподавания английского языка и культуры в работе преподавателя естественнонаучных и технических факультетов вузов и колледжей (с частичным применением ЭОиДОТ)',
                },
            ],
        }),

        computed: {
            profile() {
                return this.$store.state.profile
            }
        },

        methods: {
            hide() {
                this.modal = false;
            },

            setProfileImg(url) {
                this.img = url;

                url ? this.modal = true : '';
            },

            set(url) {
                this.img = url.result;
                this.originalPhoto = url.original;
                this.modal = false;
            },

            save() {
                this.$store.commit('set_avatar', this.img)
                console.log(this.$store.state.avatar)
            }
        }
    }
</script>

<style lang="scss" scoped>

    .toolbar-list {
        height: calc(100% - 137px);
        background-color: #33393D !important;
    }

    .user-name {
        color: white;
    }

    .link-list {
        color: white !important;
    }

    .profile-form {
        width: 45%;
        margin: 0 auto;
    }

    .test {
        text-align: center;
    }
</style>