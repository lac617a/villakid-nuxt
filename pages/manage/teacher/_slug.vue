<template>
  <div class="container -p:2">
    <!-- MODAL-CREATE -->
    <transition name="fade" mode="in-out">
      <Modal
        v-if="$store.state.isBackdrop && isModalCreate"
        title="Crear profesor"
        with-header
        @close="isModalCreate = $event"
      >
        <div class="-flex:flex-direction:column -gap:2 -mBlock:2">
          <div class="-flex:align-items:center t-profile">
            <div class="-pRelative">
              <img
                v-if="teacher.picture !== ''"
                :src="teacher.picture"
                alt="teacher"
                class="picture"
              />
              <img
                v-else
                src="@/assets/img/icon/camera-add.svg"
                alt="camera-add"
              />
              <input
                type="file"
                accept="image/*"
                @change.capture="handleGetPicture"
              />
            </div>
            <button class="-pRelative">
              <input
                type="file"
                accept="image/*"
                @change.capture="handleGetPicture"
              />
              <p v-if="teacher.picture !== ''" class="-fontSize2:1 -bold">
                Cambiar foto de perfil
              </p>
            </button>
            <p class="-medium -fontSize2:1">HRJKL982</p>
          </div>
          <div class="-flex:justify-content:flexEnd -gap:2">
            <label for="password" class="-textRight">Biografía:</label>
            <textarea rows="5" placeholder="Introduce una breve descripción">
            </textarea>
          </div>
          <div class="-flex:align-items:center -justify-content:flexEnd -gap:2">
            <label for="password" class="-textRight">Contraseña:</label>
            <InputUI
              id="password"
              type="text"
              name="password"
              placeholder="Introduce tu nueva contraseña"
            />
          </div>
          <div class="-flex:align-items:center -justify-content:flexEnd -gap:2">
            <label for="email" class="-textRight"
              >Correo electrónico del padre:</label
            >
            <InputUI
              id="email"
              type="email"
              name="email"
              placeholder="Introduce el correo electrónico"
            />
          </div>
          <div class="-flex:align-items:center -justify-content-evenly -gap:2">
            <label for="password" class="-textRight">Estado:</label>
            <SelectUI
              placeholder="Introduce el estado de tu alumno"
              :suggestion-list="['Active', 'Inactive']"
            />
          </div>
        </div>
        <div class="v-modal__content-footer">
          <ButtonUI
            name="Cancelar"
            type="button"
            fill="outline"
            class="btn -pInline:2"
            @click="handleRemoveModal"
          />
          <ButtonUI name="Crear" type="button" class="btn -pInline:3" />
        </div>
      </Modal>
    </transition>
    <!-- END-MODAL-CREATE -->

    <!-- MODAL-IMPORT -->
    <transition name="fade" mode="in-out">
      <ModalImportFile
        v-if="$store.state.isBackdrop && isModalImport"
        title="Importar profesores"
        @close="isModalImport = $event"
      />
    </transition>
    <!-- END-MODAL-IMPORT -->

    <div
      class="-flex:justify-content:between -flex-wrap:wrap -align-items:center"
    >
      <h1 class="text-color-primary -bold">
        Profesores - Nivel {{ hanldeCapitalize }}
      </h1>
      <div class="btn-group -flex:flex-wrap:wrap -gap:1">
        <ButtonUI
          name="Importar profesores"
          type="button"
          color="secondary"
          @click="handleShowModal('import')"
        />
        <ButtonUI
          name="Crear profesor"
          type="button"
          color="secondary"
          @click="handleShowModal('create')"
        />
      </div>
    </div>
    <Summary
      v-if="false"
      title="No tienes ningún profesor registrado"
      body="Por favor,haga clic en el botón superior para poder importar o crear a los profesores según corresponda."
    />
    <template v-else>
      <transition :name="transitionName" mode="out-in">
        <template v-if="transitionAnimated">
          <TableTeacher :suggestion-list="tableTeacher" />
        </template>
        <LoaderCircle v-else />
      </transition>

      <Paginator
        current-page="1"
        @currentPage="currentPage = $event"
        @transitionName="transitionName = $event"
        @transitionAnimated="transitionAnimated = $event"
      />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Summary from '@/components/Summary.vue'
import capitalize from '@/utils/capitalize'
import ButtonUI from '~/components/UI/ButtonUI.vue'
import Paginator from '@/components/Paginator.vue'
import LoaderCircle from '~/components/loadings/LoaderCircle.vue'
import TableTeacher from '@/components/table/TableTeacher.vue'
import ModalImportFile from '@/components/modals/ModalImportFile.vue'
import SelectUI from '@/components/UI/SelectUI.vue'
import InputUI from '@/components/UI/InputUI.vue'

import teacherJSON from '@/JSON/teacher.json'

export default Vue.extend({
  name: 'ManageTeacherSlugPage',
  components: {
    Summary,
    InputUI,
    SelectUI,
    ButtonUI,
    Paginator,
    LoaderCircle,
    TableTeacher,
    ModalImportFile,
  },
  layout: 'ManageUI',
  data: () => ({
    tableTeacher: teacherJSON,
    teacher: {
      picture: '',
      email: '',
      password: '',
      state: '',
    },

    // MODAL's
    isModalCreate: false,
    isModalImport: false,

    // PAGINATION's
    currentPage: 1,
    transitionName: 'slide-right',
    transitionAnimated: true,
  }),
  head() {
    return {
      title: `Profesores - nivel ${this.$route.params.slug} - admin | Villakid`,
    }
  },
  computed: {
    hanldeCapitalize(): string {
      return capitalize(this.$route.params.slug)
    },
  },
  watch: {
    currentPage() {
      setTimeout(() => {
        this.transitionAnimated = true
      }, 1000)
    },
  },
  methods: {
    handleShowModal(name: string) {
      this.$store.commit('SETBACKDROP', true)
      switch (name) {
        case 'create':
          this.isModalCreate = true
          break
        case 'import':
          this.isModalImport = true
          break
      }
    },
    handleRemoveModal() {
      this.isModalCreate = false
      this.isModalImport = false
      this.$store.commit('SETBACKDROP', false)
    },
    handleGetPicture(e: Event) {
      const file = (e.target as HTMLInputElement).files?.item(0)

      const fileOnload = (e: any) => {
        const result = e.target.result
        this.teacher.picture = result
      }

      const reader = new FileReader()
      reader.onload = fileOnload
      reader.readAsDataURL(file as unknown as Blob)
    },
  },
})
</script>

<style lang="scss">
@import '@/assets/sass/lib/mixin';
@import '@/assets/sass/lib/var';

.v-header {
  @include mediaQueriesSm() {
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    > div {
      width: 100%;
      gap: 1rem;
      > button > svg {
        font-size: 20px;
      }
    }
  }
}

.summary {
  height: 80vh;
  @include mediaQueriesMd() {
    height: 80%;
  }
}

@include mediaQueriesMd() {
  .btn-group {
    margin-top: 1rem;
  }
}

.v-modal__content {
  display: grid;
  padding: 1rem 0;
  justify-self: flex-end;
  .t-profile {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    > div {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-items: center;
      border-radius: 100px;
      border: 1px solid #9494d8;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      width: 120px;
      height: 120px;
      input {
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0 0 0 0;
        color: transparent;
      }
    }
    > div,
    > button {
      input {
        cursor: pointer;
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0 0 0 0;
        color: transparent;
      }
    }
    img {
      height: 40%;
      object-fit: contain;
      &.picture {
        object-fit: cover;
        height: 100%;
      }
    }
  }
  textarea {
    width: 72%;
    background: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    padding: 11px 30px;
    transition: 300ms;

    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #828282;
    @include mediaQueriesMd() {
      width: 100%;
    }
    &:hover {
      border: 1px solid #9494d8;
    }
  }
  @include mediaQueriesMd() {
    > div div {
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 1rem;
    }
  }

  &-footer {
    display: flex;
    gap: 1rem;
    justify-self: flex-end;
    @include mediaQueriesSm() {
      padding: 0 !important;
      justify-self: center;
      width: 100%;
    }
    button.btn {
      @include mediaQueriesSm() {
        padding: 7px !important;
        width: max-content;
      }
    }
  }
}
</style>
