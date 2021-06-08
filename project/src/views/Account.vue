<template>
  <section>

    <CropImage
        @hideModal="hide"
        @setImg="set($event)"
        v-if="modal"
        :img="img"
    />


    <v-main>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <v-row>
          <v-col
              cols="12"
          >
            <v-card class="pa-10">
              <v-row>
                <Avatar ref="avatar"
                        @setImg="setProfileImg($event)"
                        :imageURL="img"
                />

                <div class="profile-form">
                  <h3 class="mb-3">Основная информация</h3>

                  <v-text-field
                      v-model="profile.FIO"
                      label="ФИО"
                      outlined
                      clearable
                  ></v-text-field>

                  <v-text-field
                      v-model="profile.position"
                      label="Должность"
                      outlined
                      clearable
                  ></v-text-field>

                  <v-text-field
                      v-model="profile.qualification"
                      label="Квалификация"
                      outlined
                      clearable
                  ></v-text-field>

                  <h3>Дополнительная информация</h3>
                  <!--Курсы повышения квалификации-->
                  <v-col class="pa-0 mt-5">
                    <v-expansion-panels accordion>
                      <v-expansion-panel>
                        <v-expansion-panel-header>Курсы повышения квалификации</v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <v-list>
                            <v-list-item-group >
                              <v-list-item
                                  v-for="(item, i) in courses"
                                  :key="i + 'item'"
                                  class="item"
                              >
                                <v-list-item-icon>
                                  <v-icon> mdi-attachment</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-list-item-title v-if="!item.change" v-text="item.text"></v-list-item-title>
                                  <v-text-field
                                      v-else
                                      label="Название курса"
                                      placeholder="Введите текст"
                                      v-model="item.text"
                                  ></v-text-field>
                                </v-list-item-content>
                                <!--Редактирование-->
                                <v-btn
                                    fab
                                    dark
                                    x-small
                                    color="orange"
                                    class="ml-4"
                                    @click.prevent="changeItem(i, 'courses')"
                                >
                                  <v-icon v-if="!item.change" dark small>
                                    mdi-pencil
                                  </v-icon>
                                  <v-icon v-else dark>
                                    mdi-check
                                  </v-icon>
                                </v-btn>
                                <!--Удаление-->
                                <v-btn
                                    fab
                                    dark
                                    x-small
                                    color="red"
                                    class="ml-4"
                                    @click.prevent="deleteItem(i, 'courses')"
                                >
                                  <v-icon dark small>
                                    mdi-delete
                                  </v-icon>
                                </v-btn>
                              </v-list-item>

                            </v-list-item-group>
                          </v-list>

                          <v-col class="plus-btn">
                            <v-btn
                                fab
                                dark
                                small
                                color="primary"
                                @click="addItem('courses')"
                            >
                              <v-icon dark>
                                mdi-plus
                              </v-icon>
                            </v-btn>
                          </v-col>

                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>

                  <!--Награды-->
                  <v-col class="pa-0 mt-5">
                    <v-expansion-panels accordion>
                      <v-expansion-panel>
                        <v-expansion-panel-header>Награды</v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <v-list>
                            <v-list-item-group >
                              <v-list-item
                                  v-for="(item, i) in awards"
                                  :key="i + 'item'"
                              >
                                <v-list-item-icon>
                                  <v-icon> mdi-attachment </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-list-item-title v-if="!item.change" v-text="item.text"></v-list-item-title>
                                  <v-text-field
                                      v-else
                                      label="Награда"
                                      placeholder="Введите текст"
                                      v-model="item.text"
                                  ></v-text-field>
                                </v-list-item-content>
                                <!--Редактирование-->
                                <v-btn
                                    fab
                                    dark
                                    x-small
                                    color="orange"
                                    class="ml-4"
                                    @click.prevent="changeItem(i, 'awards')"
                                >
                                  <v-icon v-if="!item.change" dark small>
                                    mdi-pencil
                                  </v-icon>

                                  <v-icon v-else dark>
                                    mdi-check
                                  </v-icon>
                                </v-btn>
                                <!--Удаление-->
                                <!--Удаление-->
                                <v-btn
                                    fab
                                    dark
                                    x-small
                                    color="red"
                                    class="ml-4"
                                    @click.prevent="deleteItem(i, 'courses')"
                                >
                                  <v-icon dark small>
                                    mdi-delete
                                  </v-icon>
                                </v-btn>
                              </v-list-item>

                            </v-list-item-group>
                          </v-list>

                          <v-col class="plus-btn">
                            <v-btn
                                fab
                                dark
                                small
                                color="primary"
                                @click="addItem('awards')"
                            >
                              <v-icon dark>
                                mdi-plus
                              </v-icon>
                            </v-btn>
                          </v-col>

                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>

                  <v-col class="text-right pa-0 mt-5"
                  >
                    <v-btn
                        depressed
                        color="success"
                        @click="save"
                    >
                      Сохранить
                    </v-btn>
                  </v-col>
                </div>
              </v-row>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </section>

</template>

<script>
  import CropImage from "../components/CropImage";
  import Avatar from "../components/Avatar";

  export default {
    components: {CropImage, Avatar},

    data: () => ({
      modal: false,
      drawer: null,
      img: '',

    }),

    computed: {
      profile() {
        return this.$store.state.profile
      },

      courses() {
        return this.$store.getters.arrayAddChangeProperty( 'courses')
      },

      awards() {
        return this.$store.getters.arrayAddChangeProperty( 'awards')
      }
    },

    mounted() {
    },

    methods: {
      addItem(array) {
        let newItem = this[array].length;

        this[array].push({
          text: '',
        });

        this.changeItem(newItem, array);
        this.$forceUpdate();
      },

      deleteItem(i, type) {
        this[type].splice(i, 1);
        this.$forceUpdate();

      },

      changeItem(i , type) {
        this[type][i].change = !this[type][i].change;
        this.$forceUpdate();
      },

      hide() {
        this.modal = false;
      },

      setProfileImg(url) {
        this.img = url;

        url ? this.modal = true : '';
      },

      set(url) {
        this.img = url.result;
        this.originalPhoto = url.original;
        this.modal = false;
      },

      save() {
        this.$store.commit('set_avatar', this.img)
        console.log(this.$store.state.avatar)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .toolbar-list {
    height: calc(100% - 137px);
    background-color: #33393D !important;
  }

  .user-name {
    color: white;
  }

  .link-list {
    color: white !important;
  }

  .profile-form {
    width: 45%;
    margin: 0 auto;
  }

  .plus-btn {
    text-align: center;
  }

</style>
