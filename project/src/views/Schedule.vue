<template>
  <v-main>
    <v-container
        class="py-8 px-6"
        fluid
    >
      <v-card color="basil">
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
              v-for="day in days"
              :key="day.name"
          >
            {{ day.name }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
              v-for="day in days"
              :key="day.name"
          >
            <v-card
                color="basil"
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
                <v-card-title >
                  <v-icon
                      large
                      left
                  >
                    mdi-briefcase-clock
                  </v-icon>
                  <span class="text-h6 font-weight">{{i + 1}} пара</span>
                </v-card-title>

                <v-container class="d-flex">
                  <!--Верхняя неделя-->
                  <v-card-text v-if="Object.keys(subject.upper).length !== 0" class="text-h6  white--text">
                    <p class="subject-info"> {{ subject.upper.discipline }}</p>
                    <p class="subject-info"> {{ subject.upper.group }}</p>
                    <p class="subject-info"> {{ subject.upper.auditorium }}</p>
                  </v-card-text>
                  <v-card-text class="text-h6  white--text d-flex justify-center" v-else>
                  <p  class="subject-info">Окно</p>
                  </v-card-text>

                  <v-divider vertical></v-divider>

                  <!--Нижняя неделя-->
                  <v-card-text v-if="Object.keys(subject.bottom).length !== 0" class="text-h6  white--text">
                    <p class="subject-info"> {{ subject.bottom.discipline }}</p>
                    <p class="subject-info"> {{ subject.bottom.group }}</p>
                    <p class="subject-info"> {{ subject.bottom.auditorium }}</p>
                  </v-card-text>
                  <v-card-text class="text-h6  white--text d-flex justify-center" v-else>
                    <p  class="subject-info">Окно</p>
                  </v-card-text>
                </v-container>



                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                          class="elevation-6"
                          alt=""
                          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Evan You</v-list-item-title>
                    </v-list-item-content>

                    <v-row
                        align="center"
                        justify="end"
                    >
                      <v-icon class="mr-1">
                        mdi-heart
                      </v-icon>
                      <span class="subheading mr-2">256</span>
                      <span class="mr-1">·</span>
                      <v-icon class="mr-1">
                        mdi-share-variant
                      </v-icon>
                      <span class="subheading">45</span>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-card>



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
                  discipline: 'Русский язык',
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
