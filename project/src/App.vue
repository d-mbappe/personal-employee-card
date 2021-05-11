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
                ['mdi-inbox-arrow-down', 'Inbox'],
                ['mdi-send', 'Send'],
                ['mdi-delete', 'Trash'],
                ['mdi-alert-octagon', 'Spam'],
            ],
        }),
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
</style>

