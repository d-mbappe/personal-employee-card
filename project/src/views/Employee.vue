<template>
  <v-main>
    <v-container
        class="py-8 px-6"
        fluid
    >
      <v-card>
        <v-card-title>
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Поиск по ФИО и должности"
              hide-details
              class=""
          ></v-text-field>

        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="employee"
            :search="search"

            :footer-props="{
               'items-per-page-text':'Сотрудников на странице',
               'items-per-page-options': this.perPageOptions,
               'items-per-page-all-text': 'Все',
               'page-text' : ''
            }"
        >
        </v-data-table>
      </v-card>
    </v-container>

  </v-main>


</template>

<script>
  export default {
    name: 'Employee',

    data() {
      return {
        perPageOptions: [
          5,
          10,
          15,
          -1
        ],
        search: '',
        headers: [
          {
            text: 'ФИО',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          {text: 'Должность', value: 'position'},

        ],
        employee: [
          {
            name: 'Копытова Ольга Михайловна',
            position: 'зав.каф. ИИСА, доцент',
          },
          {
            name: 'Бочаров Дмитрий Михайлович',
            position: 'старший преподаватель',

          },
          {
            name: 'Бычкова Елена Викторовна',
            position: 'старший преподаватель',
          },
          {
            name: 'Гудаев Олег Александровчи',
            position: 'старший преподаватель',

          },
          {
            name: 'Едемская Евгения Николаевна',
            position: 'старший преподаватель',
          },
          {
            name: 'Елисеев Виктор Иванович',
            position: 'старший преподаватель',

          },
          {
            name: 'Кравец Татьяна Николаевна',
            position: 'к.ф.-м.н., доцент',

          },
          {
            name: 'Левкина Анастасия Викторовна',
            position: 'ассистент',

          },
          {
            name: 'Маслова Елена Александровна',
            position: 'старший преподаватель',

          },
          {
            name: 'Норкене Елена Александровна',
            position: 'ассистент',

          },
        ],
      }
    },

  }
</script>

<style lang="scss" scoped>
  .mw {
    margin-left: 500px;
    max-width: 500px;
  }
</style>
