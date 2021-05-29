<template>
    <section class="avatar" :class="{dashed: !image && place !== 'profile-form'}">
        <div class="helper"></div><!--
        --><div class="drop display-inline align-center" @dragover.prevent @drop="onDrop">
        <!--Превью для выбора фото-->
        <div @click="chooseFile" class="custom__preview" v-if="!image">
            <img class="custom__preview__logo" src="../assets/icons/avatar_logo.svg" alt="">
            <p class="custom__preview__title" :class="{profile : 'profile-form'}">Перетащите фотографию сюда
                или нажмите:</p>

            <label  class="btn display-inline choose">
                Выбрать файл
            </label>
            <p class="custom__preview__rules" :class="{profile : 'profile-form'}">Фото jpg, png до 10МБ</p>
            <!--Скрытый инпут для выбора файлов-->
            <input id="template" type="file" name="image" @change="onChange" accept="image/*">
        </div>

        <!--Отображение выбранного фото-->
        <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
            <div class="image__wrap" v-bind:class="{ 'no_valid_img__filter_brightness': !validImgStatus }">
              <img :src="modal ? imageURL : image" alt="" class="img" v-bind:class="{ 'no_valid_img__filter_blur': !validImgStatus }" />
              <br>
              <br>
            </div>
          <div class="no_valid_img__container" v-bind:class="{ 'd-none': validImgStatus }">
            <div class="no_valid_img__msg" v-bind:class="[noValidImgMsgAddAdditionalClass]">
              На загруженой фотгографии не найдено ни одного лица
            </div>
            <div class="no_valid_img__footer">
              <button class="no_valid_img__btn " v-bind:class="[noValidImgBtnAddAdditionalClass]" @click="removeFile">
                Загрузить другое фото
              </button>
              <button class="no_valid_img__btn" v-bind:class="[noValidImgBtnAddAdditionalClass]" @click="showNoValidImg">
                Всё равно продолжить
              </button>
            </div>
          </div>

            <button @click="editImage" class="btn__edit" v-bind:class="{ 'd-none': !validImgStatus }" type="file" @change="onChange"><img src="../assets/icons/edit_logo.svg" alt="">
                <input id="file" type="file" name="image" @change="onChange" accept="image/*">
            </button>

            <button class="btn__remove" v-bind:class="{ 'd-none': !validImgStatus }" @click="removeFile">
                <img src="../assets/icons/remove_logo.svg" alt="">
            </button>

        </div>

    </div>

    </section>
</template>

<script>
    export default {
        name: "Avatar",

        data() {
            return {
                validImgStatus: true,
                imageL: '',
                change: false,
            }
        },
        props: {
            noValidImg: {
              type: Boolean,
              default: false
            },
            noValidImgBtnAddAdditionalClass: {
                type: String,
                default: ''
            },
            noValidImgMsgAddAdditionalClass: {
                type: String,
                default: ''
            },
            place: {
                type: String,
                default: ''
            },
            photoType: {
                type: String,
                default: ''
            },
            imageURL: {
                type: String
            },
            modal: {
                type: Boolean,
                default: false
            },
            original: {
                type: String
            }
        },

        computed: {
            image() {
                if(this.noValidImg){
                  this.hideNoValidImg();
                }else {
                  this.showNoValidImg();
                }
                if (this.imageURL && !this.change ) {
                    return this.imageURL
                }
                /*При закрытии кроппера приходит false, очищаем аватар*/
                return this.modal ? this.imageL : ''
            }
        },

        methods: {
            hideNoValidImg(){
                this.validImgStatus = false;
            },
            showNoValidImg(){
                this.validImgStatus = true;
            },
            chooseFile() {
                !this.image ? document.getElementById('template').click() : '';
            },

            editImage() {
                this.$emit('setImg', this.original)
            },

            onDrop: function(e) {
                e.stopPropagation();
                e.preventDefault();
                var files = e.dataTransfer.files;
                this.createFile(files[0]);
            },

            onChange(e) {
                var type   = ['image/jpg','image/jpeg','image/png'];
                var size   = 10 * 1024 * 1024; // 10 мб
                var file   = e.target.files[0];

                if (type.indexOf(file.type) == -1) {
                    alert('Неправильный тип фото');
                    return false;
                } else if (file.size > size) {
                    alert('Неправильный размер фото');
                    return false;
                } else {
                    this.createFile(file);
                    // this.change = true
                }
            },

            async createFile(file) {

                var img = new Image();
                var reader = new FileReader();
                var vm = this;
                /*Восстанавливаю правдивость change в компоненте Новой анкеты для открытия кроппера*/
                this.modal = true;

                reader.onload = function(e) {
                    vm.imageL = e.target.result;
                    console.log(vm.imageL)
                    vm.$emit('setImg', vm.image)
                };

                reader.readAsDataURL(file);
            },

            removeFile() {
                this.validImgStatus = true;
                this.change = true;
                this.imageL = '';
                this.$emit('setImg', '')
            }
        }
    }
</script>

<style lang="scss" scoped>


.d-none{
    display: none;
}
.avatar {
    width: 185px;
    height: 250px;

    cursor: pointer;
    border-radius: 10px;
    transition: all .2s ease;


    &:hover {
        opacity: .8;
        border-radius: 10px;
    }
}

.drop {
    height: 100%;
    width: 100%;
    background-color: #33393D;
    border-radius: 10px;


}
.custom__preview {
    padding-top: 40px;

    color: white;
    font-size: 14px;
    line-height: 17px;

    height: 100%;

    &__logo {
        margin: 0 auto;
    }

    &__title {
        margin-top: 25px;
        padding: 0 40px;

        &.profile {
            margin-top: 15px;
            padding: 0 25px;
        }


        @media (max-width: 1220px){
            margin-top: 20px !important;
        }
    }

    &__rules {
        margin-top: 30%;
        font-size: 13px;
        color: rgba(255, 255, 255, .8);

        &.profile {
            margin-top: 5%;
        }

        @media (max-width: 1370px) {
            margin-top: 2%;
        }

        @media (max-width: 375px) {
            margin-top: 5px;
        }
    }
}

.btn {
    margin-top: 15px;
    font-size: 14px;

    background-color: white;
    color: black;
    border: 0;
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    padding: 3px 7px;
    border-radius: 5px;
    position: relative;

    &.choose {
        max-width: 130px;
        min-height: 30px;

        font-size: 12px;
        line-height: 22px;
        color: #7E7E7E;
    }

    &__remove, &__edit {
        position: absolute;
        width: 40px;
        height: 40px;
        background-color: white;
        border-radius: 50%;

        box-shadow: 0 0 10px rgba(0,0,0, 0.8);

        @media (max-width: 375px) {
            width: 35px;
            height: 35px;
        }

        input {
            height: 100%;
            top: 0;
            position: absolute;
            opacity: 0;
            width: 100%;
            left: 0;
            cursor: pointer;
        }

        img {
            margin: auto;
            cursor: pointer;
        }
    }

    &__remove {
        bottom: -20px;
        right: 40px;

        @media (max-width: 375px){
            right: 30px;
        }
    }

    &__edit {
        bottom: -20px;
        left: 40px;

        @media (max-width: 375px){
            left: 30px;
        }
    }
}

.btn:hover {
    opacity: 0.8;
}

input[type="file"] {
    opacity: 0;
    z-index: -1;
    display: none;
}

.align-center {
    text-align: center;
}

.helper {
    display: inline-block;
    vertical-align: middle;
    width: 0;
}

.hidden {
    display: none !important;
}

.hidden {
    height: 100%;
    width: 100%;
    display: inline-block !important;
    position: relative;
}

.display-inline {
    display: inline-block;
    vertical-align: middle;
}

.image__wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.img {
    object-fit: cover;
    width: 100%;
    height: 100%;

    border-radius: 10px;
    display: inline-block;
}


.dashed {
    border: 1px dashed white;
}


</style>

