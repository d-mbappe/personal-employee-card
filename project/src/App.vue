<template>
    <v-app id="inspire">
        <v-system-bar app>
            <v-spacer></v-spacer>

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

