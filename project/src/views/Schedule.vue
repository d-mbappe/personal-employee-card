<template>
  <v-main>
    <v-container
        class="py-8 px-6"
        fluid
    >
      <v-card color="">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold text-h2 basil--text">
            Расписание
          </h1>
        </v-card-title>

        <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
        >
          <v-tab
              v-for="( day, i ) in days"
              :key="day.name"
              @click="setCurDay(i)"
          >
            {{ day.name }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
              v-for="( day, i ) in days"
              :key="day.name"
          >
            <v-card
                color=""
                flat
                class="pa-4"
                v-for="( subject, i ) in day.academicSubject"
                :key="subject.discipline"
            >
              <v-card
                  class="mx-auto mb-3"
                  color="#356859"
                  dark
                  max-width="800"
              >
                <v-card-title class="d-flex justify-lg-space-between">
                  <div class="ml-2">
                    <v-icon
                        large
                        left
                    >
                      mdi-briefcase-clock
                    </v-icon>
                    <span class="text-h6 font-weight">{{i + 1}} пара</span>
                  </div>

                  <!--Изменение пары-->
                  <div>
                    <v-btn
                        fab
                        dark
                        x-small
                        color="orange"
                        class="ml-4"
                        @click="changeScheduleCart( i, subject )"
                    >
                      <v-icon v-if="(!isChange && currentChangeItem === i || isChange && currentChangeItem !== i) || currentChangeItem === null" dark small>
                        mdi-pencil
                      </v-icon>

                      <v-icon v-else dark>
                        mdi-check
                      </v-icon>
                    </v-btn>
                    <!--Удаление пары-->
                    <v-btn
                        fab
                        dark
                        x-small
                        color="error"
                        class="ml-4"
                        @click="removeItem(i)"
                    >
                      <v-icon dark small>
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </div>
                </v-card-title>

                <v-container class="d-flex">
                  <!--Верхняя неделя-->
                  <v-card-text v-if="Object.keys(subject.upper).length !== 0 && !isChange" class="text-h6  white--text">
                    <p class="subtitle-2 mb-0 orange--text">Дисциплина:</p>
                    <p class="subject-info"> {{ subject.upper.discipline }}</p>
                    <p class="subtitle-2 mb-0 orange--text">Наименование:</p>
                    <p class="subject-info"> {{ subject.upper.group }}</p>
                    <p class="subtitle-2 mb-0 orange--text">Аудитория:</p>
                    <p class="subject-info"> {{ subject.upper.auditorium }}</p>
                  </v-card-text>

                  <v-card-text v-else-if="currentChangeItem === i && isChange" class="text-h6  white--text">
                    <v-text-field
                        label="Дисциплина"
                        :rules="[() => !!subject.upper.discipline  || 'Поле не может быть пустым']"
                        required
                        v-model="subject.upper.discipline "
                    ></v-text-field>
                    <v-text-field
                        label="Группа"
                        :rules="[() => !!subject.upper.group || 'Поле не может быть пустым']"
                        required
                        v-model="subject.upper.group"
                    ></v-text-field>
                    <v-text-field
                        label="Аудитория"
                        :rules="[() => !!subject.upper.auditorium  || 'Поле не может быть пустым']"
                        required
                        v-model="subject.upper.auditorium "
                    ></v-text-field>
                  </v-card-text>
                  <v-card-text class="text-h6  white--text" v-else>
                  <p  class="subject-info">Окно</p>
                  </v-card-text>
                  <!--Изменения-->


                  <v-divider vertical></v-divider>

                  <!--Нижняя неделя-->
                  <v-card-text v-if="Object.keys(subject.bottom).length !== 0 && !isChange" class="text-h6  white--text">
                    <p class="subtitle-2 mb-0 orange--text">Дисциплина:</p>
                    <p class="subject-info"> {{ subject.bottom.discipline }}</p>
                    <p class="subtitle-2 mb-0 orange--text">Наименование:</p>
                    <p class="subject-info"> {{ subject.bottom.group }}</p>
                    <p class="subtitle-2 mb-0 orange--text">Аудитория:</p>
                    <p class="subject-info"> {{ subject.bottom.auditorium }}</p>
                  </v-card-text>
                  <v-card-text v-else-if="currentChangeItem === i && isChange" class="text-h6  white--text">
                    <v-text-field
                        label="Дисциплина"
                        :rules="[() => !!subject.bottom.discipline  || 'Поле не может быть пустым']"
                        required
                        v-model="subject.bottom.discipline "
                    ></v-text-field>
                    <v-text-field
                        label="Группа"
                        :rules="[() => !!subject.bottom.group || 'Поле не может быть пустым']"
                        required
                        v-model="subject.bottom.group"
                    ></v-text-field>
                    <v-text-field
                        label="Аудитория"
                        :rules="[() => !!subject.bottom.auditorium  || 'Поле не может быть пустым']"
                        required
                        v-model="subject.bottom.auditorium "
                    ></v-text-field>
                  </v-card-text>
                  <v-card-text class="text-h6  white--text" v-else>
                    <p  class="subject-info">Окно</p>
                  </v-card-text>
                </v-container>
              </v-card>
            </v-card>
            <!--Добавление пары-->
            <v-col class="d-flex justify-center">
              <v-btn
                  fab
                  dark
                  small
                  color="primary"
                  @click="addItem(i)"
              >
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-col>
            <!--Сохранение расписания-->
            <v-col class="d-flex justify-end">
              <v-btn
                  dark
                  color="success"
              >
                Сохранить
              </v-btn>

            </v-col>



          </v-tab-item>
        </v-tabs-items>
      </v-card>
  </v-container>
</v-main>
</template>

<script>
  export default {
    name: 'Schedule',

    data() {
      return {
        currentChangeItem: null,
        isChange: false,
        curDay: 0,

        focus: '',
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
        categories: ['John Smith', 'Tori Walker'],

        tab: null,
        days: [
          {
            name: 'Понедельник',
            academicSubject: [
              {
                upper: {
                  discipline: 'Дискретная математика',
                  group: 'ПОИС-17',
                  auditorium: '404'
                },
                bottom: {}
              },

              {
                upper: {},
                bottom: {
                  discipline: 'Русский язык',
                  group: 'ПОИС-19',
                  auditorium: '406'}
              },
            ]
          },

          {
            name: 'Вторник',
            academicSubject: [
              {
                upper: {
                  discipline: 'Дискретная математика',
                  group: 'ПОИС-17',
                  auditorium: '404'
                },
                bottom: {}
              },

              {
                upper: {},
                bottom: {
                  discipline: 'Системный анализ',
                  group: 'ПОИС-19',
                  auditorium: '406'}
              },
            ]
          },
          {
            name: 'Среда',
            academicSubject: [
              {
                upper: {
                  discipline: 'Дискретная математика',
                  group: 'ПОИС-17',
                  auditorium: '404'
                },
                bottom: {
                  discipline: 'Высшая математика',
                  group: 'САУ-20',
                  auditorium: '409'
                }
              },

              {
                upper: {},
                bottom: {
                  discipline: 'Русский язык',
                  group: 'ПОИС-19',
                  auditorium: '406'}
              },
            ]
          },
          {
            name: 'Четверг',
            academicSubject: [
              {
                upper: {
                  discipline: 'Дискретная математика',
                  group: 'ПОИС-17',
                  auditorium: '404'
                },
                bottom: {}
              },

              {
                upper: {},
                bottom: {
                  discipline: 'Русский язык',
                  group: 'ПОИС-19',
                  auditorium: '406'}
              },
            ]
          },
          {
            name: 'Пятница',
            academicSubject: [
              {
                upper: {
                  discipline: 'Дискретная математика',
                  group: 'ПОИС-17',
                  auditorium: '404'
                },
                bottom: {}
              },

              {
                upper: {},
                bottom: {
                  discipline: 'Русский язык',
                  group: 'ПОИС-19',
                  auditorium: '406'}
              },
            ]
          },

        ],

      }
    },

    methods: {
      setCurDay(i) {
        console.log(i, 'day')
        this.curDay = i;
      },

      changeScheduleCart( i, subject) {
        let emptyUp = this.checkProperties(subject.upper);
        let emptyBottom = this.checkProperties(subject.bottom);
        let emptyWeek = emptyUp ? 'upper' : emptyBottom ? 'bottom' : null;

        this.addEmptyObject( subject, emptyWeek);

        this.isChange = !this.isChange;
        this.currentChangeItem =  this.isChange ? i : null;
      },

      checkProperties(obj) {
        let counter = 0;

        for (let key in obj) {
          counter++;
        }
        /*Если в объекте пары не все свойства, то делаем его пустым*/
        return counter < 3;
      },

      addEmptyObject(obj, week) {
        week ? obj[week] = {} : '';
      },

      addItem(i) {
        this.days[i].academicSubject.push({
          upper: {},
          bottom: {},
        })
      },

      removeItem(i) {
        console.log(this.curDay);
        this.days[this.curDay].academicSubject.splice( i, 1)
      }
    },


  }
</script>
<style>
  /* Helper classes */
  .basil {
    background-color: #FFFBE6 !important;
  }
  .basil--text {
    color: #356859 !important;
  }
</style>
