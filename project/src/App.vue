<template>
    <v-app id="inspire">
        <v-system-bar app class="primary">
            <v-spacer></v-spacer>

            <router-link class="mr-5" to="/auth">Авторизация</router-link>
            <router-link class="mr-5" to="/">Домой</router-link>

            <v-icon>mdi-square</v-icon>

            <v-icon>mdi-circle</v-icon>

            <v-icon>mdi-triangle</v-icon>
        </v-system-bar>
        <v-navigation-drawer
                v-model="drawer"
                app
                v-if="$route.path !== '/auth'"
        >
            <v-sheet
                    color="grey lighten-1"
                    class="pa-4 primary"
            >
                <v-avatar
                        class="mb-4"
                        color="grey darken-3"
                        size="64"
                >
                    <img  v-if="avatar"
                          :src="avatar"
                          alt="avatar"
                    >
                    <img  v-else
                          src="./assets/icons/avatar_logo.svg"
                          class="pa-2"
                          alt="avatar"
                    >

                </v-avatar>

                <div class="user-name">Иванов Иван</div>
            </v-sheet>

            <v-divider></v-divider>

            <v-list class="toolbar-list">

                <v-list-item
                        v-for="[icon, text, path] in links"
                        :key="icon"
                        link
                        :to="path"
                        active-class="active"
                >

                        <v-list-item-icon>
                            <v-icon :color="$router.currentRoute.path === path ? 'primary' : 'white'" >{{ icon}}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title active-class="active-class" class="link-list">{{ text }}</v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <router-view />
    </v-app>
</template>

<script>
    export default {
        name: 'App',

        data: () => ({
            cards: ['Today', 'Yesterday'],
            drawer: null,
            links: [
                ['mdi-account', 'Личный кабинет', '/'],
                ['mdi-format-list-bulleted', 'Сотрудники', '/employee'],
                ['mdi-file-document', 'Учебная литература', '/educational-literature'],
                ['mdi-table-account', 'Расписание', '/schedule'],
                ['mdi-file-link', 'Научные работы', '/scientific-work'],
            ],
        }),

        computed: {
            avatar() {
                return this.$store.state.avatar;
            }
        }
    }
</script>

<style lang="scss">
    $base-color: #367DBF;
    @import '~vue-advanced-cropper/dist/theme.classic.scss';

    /* Указываем box sizing */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        background-repeat: inherit !important;
    }

    .cropper-wrapper {
        overflow: hidden;
        position: relative;
        height: 700px;
        background: black;
    }
    .cropper-background {
        background: none !important;
    }
    .image-background {
        position: absolute;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        left: -10px;
        top: -10px;
    }

    .image {
        border-radius: 20px ;
    }

    .btn.white.change {
        width: 40px;
        margin: 10px;
    }

    button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;

        cursor: pointer;

        &:focus {
            border: none;
            outline: none;
        }
    }

    a {
        color: #ccc !important;
    }
    /*Сайдбар*/
    .toolbar-list {
        height: calc(100% - 137px);
        background-color: #33393D !important;
    }

    .toolbar-link {
        width: 100%;
        text-decoration: none;
        display: flex;
    }

    .user-name {
        color: white;
    }

    .link-list {
        color: white !important;
    }

    .active  {
        background: rgba(0, 0, 0, .6);
    }
</style>

