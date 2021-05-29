<template>
  <v-main>
    <v-container
        class="py-8 px-6"
        fluid
    >
      <v-card
          elevation="4"
          shaped

      >
        <v-card-title>Название файла</v-card-title>
        <v-card-text>
          <v-file-input
              show-size
              truncate-length="15"
              @change="onChange"
          ></v-file-input>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>

</template>

<script>
  export default {
    name: "EducationalLiterature",

    data() {
      return {
        file: '',
      }
    },

    methods: {
      onChange(e) {
        let file = e;
        this.createFile(file);
      },

      async createFile(file) {
        var reader = new FileReader();
        var vm = this;

        reader.onload = function(e) {
          vm.file = e.target.result;
          console.log(vm.file)
        };

        reader.readAsDataURL(file);
      },
    }
  }
</script>

<style scoped>

</style>