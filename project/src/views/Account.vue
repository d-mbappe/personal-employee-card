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
                        <v-card class="pb-10">
                            <v-subheader></v-subheader>
                            <Avatar ref="avatar"
                                    @setImg="setProfileImg($event)"
                                    :imageURL="img"

                                    :original="originalPhoto"
                            />

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
            originalPhoto: '',
        }),

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
</style>