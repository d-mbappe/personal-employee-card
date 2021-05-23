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

                                    <v-col class="text-right pa-0"
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
                            <v-row>


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
</style>