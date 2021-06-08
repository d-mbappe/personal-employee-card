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
        v-for="(item, i) in scientificWork"
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
            @click="changeItem(i)"
        >
          <v-icon v-if="!item.change" dark small>
            mdi-pencil
          </v-icon>

          <v-icon v-else dark>
            mdi-check
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>
        {{item.type}}
      </v-card-subtitle>

      <v-card-text>
        <!--Описание-->
        <p v-if="!item.change">{{item.description}}</p>
        <v-textarea
            v-else
            name="input-7-1"
            label="Описание"
            v-model="item.description"
            :value="item.description"
        ></v-textarea>

        <!--Ссылка-->
        <v-text-field
            v-if="item.change"
            label="Ссылка"
            :rules="[() => !!item.src || 'Поле не может быть пустым']"
            required
            v-model="item.src"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="d-flex justify-lg-space-between" v-if="item.src">
        <!--Просмотр-->
        <a :id="'link-' + i "
           :href="item.src"
           target="_blank"
        ></a>
        <v-col v-if="!item.change">
          <v-btn
              outlined
              rounded
              text
              @click="redirectToArticle(i)"
              class="mr-3"
          >
            <v-icon class="mr-1" dark>
              mdi-eye-outline
            </v-icon>
            <span>Перейти по ссылке</span>
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
</v-main>
</template>

<script>
  export default {
    name: "ScientificWork",
    data() {
      return {
        scientificWork: [
          {
            title: 'Фреймворк Vue.js',
            type: 'Статья',
            src: 'https://dou.ua/lenta/columns/from-react-to-vuejs/',
            description: 'Данная статья описывает основные возможности фреймворка Vue.js. В ней для наглядных примеров' +
              'используется сравнение с более старшим фреймворком React.js, из которого были взяты самые лучше концепции, ' +
              'но подстроенные под своё видение.',

            change: false
          },

          {
            title: 'Суперглобальный массив $_SERVER',
            type: 'Статья',
            src: 'http://www.softtime.ru/info/articlephp.php?id_article=69',
            description: 'Одним из важнейших предопределённых массивов является массив $_SERVER — в него PHP-интерпретатор помещает ' +
              'переменные, полученные от сервера. Без данных переменных сложно организовать полноценную поддержку Web-приложений. Ниже ' +
              'приводится описание наиболее важных элементов суперглобального массива $_SERVER.',
            change: false
          },
        ]
      }
    },

    methods: {
      changeItem(i) {
        this.scientificWork[i].change = !this.scientificWork[i].change;
        this.$forceUpdate();
      },


      addItem() {
        this.scientificWork.push({
          title: '',
          type: '',
          src: '',
          description: '',
          change: true
        })
      },

      removeItem(i) {
        this.scientificWork.splice(i, 1);
      },

      redirectToArticle(i) {
        document.getElementById('link-' + i ).click();
      }
    }


  }
</script>

<style scoped>

</style>
