<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
            dark
            color="primary"
        >
          <v-btn
              icon
              dark
              @click="closeView"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <vue-pdf-app style="height: calc(100vh - 64px);" :pdf="fileName"></vue-pdf-app>

      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import pdf from 'vue-pdf'
  import VuePdfApp from "vue-pdf-app";
  import "vue-pdf-app/dist/icons/main.css";

  export default {
    name: "PdfViewer",
    components: {
      pdf, VuePdfApp
    },

    props: {
      display: {
        type: Boolean,
        required: true,
        default: false,
      },

      fileName: {
        type: String,
        default: ''
      }
    },


    data () {
      return {
        dialog: this.display,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },

    methods: {
      closeView() {
        this.dialog = false;
        this.$emit('closePdf')
      },


    },
  }
</script>