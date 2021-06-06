<template>
  <v-main>
    <v-container
        class="py-8 px-6"
        fluid
    >
      <!--Вывод документов-->
      <v-card
          class="mb-5"
          elevation="4"

          shaped
          v-for="(item, i) in literature"
          :key="i"
      >
        <v-card-title>
          <p v-if="!item.change">{{item.title}}</p>
          <v-text-field
              v-else
              label="Наименование"
              :rules="[() => !!item.title || 'Поле не может быть пустым']"
              required
              v-model="item.title"
          ></v-text-field>
          <v-btn
              fab
              dark
              x-small
              color="orange"
              class="ml-4"
              @click="changeItemTitle(i)"
          >
            <v-icon v-if="!item.change" dark small>
              mdi-pencil
            </v-icon>

            <v-icon v-else dark>
              mdi-check
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-file-input
              v-if="!item.src"
              show-size
              truncate-length="15"
              @change="onChange"
          ></v-file-input>
        </v-card-text>
        <v-card-actions class="d-flex justify-lg-space-between" v-if="item.src">
          <!--Просмотр-->
          <v-col>
            <v-btn
                outlined
                rounded
                text
                @click="showPdf(item.src)"
                class="mr-3"
            >
              <v-icon class="mr-1" dark>
                mdi-eye-outline
              </v-icon>
              <span>Просмотр</span>
            </v-btn>
            <!--Скачать-->
            <v-btn
                outlined
                rounded
                text
                color="success"
                @click="downloadPdf(item.src)"
            >
              <v-icon class="mr-1" dark>
                mdi-download
              </v-icon>
              <span>
              Скачать
              <a :id="item.src" :href="item.src" download></a>
            </span>
            </v-btn>
          </v-col>


          <v-col class="d-flex justify-end">
            <!--Удалить-->
            <v-btn
                outlined
                rounded
                text
                color="red"
                @click="removeItem(i)"
            >
              <v-icon class="mr-1" dark>
                mdi-delete
              </v-icon>
              <span>
              Удалить
            </span>
            </v-btn>
          </v-col>

        </v-card-actions>
      </v-card>

      <v-col class="d-flex justify-center">
        <v-btn
            fab
            dark
            small
            color="primary"
            @click="addItem()"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>

      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn
            dark
            color="success"
        >
          Сохранить
        </v-btn>

      </v-col>
    </v-container>

    <!--Компонент просмотра файлов-->
    <PdfViewer  :display="pdfView"
                :key="pdfView"
                :fileName="currentFileToView"
                @closePdf="toggleView()"
    />
  </v-main>


</template>

<script>
  import PdfViewer from "../components/PdfViewer";

  export default {
    name: "EducationalLiterature",
    components: { PdfViewer },

    data() {
      return {
        currentFileToView: '',
        pdfView: false,

        literature: [
          {
            title: 'Методичка по нормоконтролю',
            src: 'test.pdf',
            change: false
          },

          {
            title: 'Конспект по дисциплне Программная инженерия',
            src: '1',
            change: false
          }
        ]
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

      changeItemTitle(i) {
        this.literature[i].change = !this.literature[i].change;
        this.$forceUpdate();
      },

      addItem() {
        this.literature.push({
          title: '',
          src: '',
          change: true
        })
      },

      removeItem(i) {
        this.literature.splice(i, 1);
      },

      downloadPdf(element) {
        document.getElementById(element).click();
      },

      showPdf(curFile) {
        this.pdfView = true;
        this.currentFileToView = curFile;
      },

      toggleView() {
        this.pdfView = false;
        this.currentFileToView = '';
      }
    }
  }
</script>

<style scoped>

</style>
