<template>
  <div class="container -p:2">
    <!-- MODAL-CREATE -->
    <transition name="fade" mode="in-out">
      <Modal
        v-if="$store.state.isBackdrop && isModal"
        title="Crear alumno"
        with-header
        @close="isModal = $event"
      >
        <div class="-flex:flex-direction:column -gap:2 -mBlock:2">
          <div class="-flex:align-items:center -gap:4">
            <label for="code" class="-textRight">Código del alumno:</label>
            <p class="-medium -fontSize2:1">HRJKL982</p>
          </div>
          <div class="-flex:align-items:center -justify-content:flexEnd -gap:2">
            <label for="name" class="-textRight">Nombre del alumno:</label>
            <InputUI
              id="name"
              type="text"
              name="name"
              placeholder="Introduce el nombre del alumno"
            />
          </div>
          <div class="-flex:align-items:center -justify-content:flexEnd -gap:2">
            <label for="parent" class="-textRight">Padre/Apoderado:</label>
            <InputUI
              id="parent"
              type="text"
              name="parent"
              placeholder="Introduce el nombre del padre/apoderado"
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
          <div class="-flex:align-items:center -justify-content:flexEnd -gap:2">
            <label for="phone" class="-textRight">Teléfono del padre:</label>
            <InputUI
              id="phone"
              type="text"
              name="phone"
              placeholder="Introduce el número de teléfono"
            />
          </div>
          <div
            class="pwd -pRelative -flex:align-items:center -justify-content:flexEnd -gap:2"
          >
            <label for="password" class="-textRight">Contraseña:</label>
            <InputUI
              id="password"
              type="text"
              name="password"
              placeholder="Introduce tu nueva contraseña"
            />
            <button>Generar automaticamente</button>
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

    <!-- MODAL-IMPORT-STUDENT -->
    <transition name="fade" mode="in-out">
      <ModalImportFile
        v-if="$store.state.isBackdrop && isModalImportStudent"
        title="Importar alumnos"
        @close="isModalImportStudent = $event"
      />
    </transition>
    <!-- END-MODAL-IMPORT-STUDENT -->

    <div
      class="v-header -flex:justify-content:between -align-items:center -flex-wrap:wrap -gap:1"
    >
      <div class="-flex:align-items:center -gap:3">
        <button @click="$router.go(-1)">
          <font-awesome-icon icon="fa-solid fa-arrow-left" color="#9494D8" />
        </button>
        <h1 class="text-color-primary -bold">
          Alumnos - {{ hanldeCapitalize }}
        </h1>
      </div>
      <div class="-flex -gap:1 -flex-wrap:wrap">
        <ButtonUI
          name="Crear alumnos"
          type="button"
          color="secondary"
          @click="handleShowModal('create-student')"
        />
        <ButtonUI
          name="Importar alumnos"
          type="button"
          color="secondary"
          @click="handleShowModal('import-student')"
        />
      </div>
    </div>
    <div class="-mBlock:2">
      <div class="-flex:align-items:center -justify-content-evenly -gap:2">
        <label for="password" class="-textRight">Profesor tutor:</label>
        <SelectUI
          placeholder="Nombre del profesor"
          :suggestion-list="['hola1', 'hola2', 'hola3']"
        />
      </div>
      <Summary
        v-if="false"
        title="No tienes alumnos registrados"
        body="Por favor, crea o importar a los alumnos de está sección haciendo clic en el botón superior."
      />
      <template v-else>
        <transition :name="transitionName" mode="out-in">
          <template v-if="transitionAnimated">
            <TableStudent :suggestion-list="tableStudents" />
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// COMPONENTs
import Modal from '@/components/Modal.vue'
import capitalize from '@/utils/capitalize'
import Summary from '@/components/Summary.vue'
import InputUI from '@/components/UI/InputUI.vue'
import Paginator from '@/components/Paginator.vue'
import ButtonUI from '@/components/UI/ButtonUI.vue'
import SelectUI from '@/components/UI/SelectUI.vue'
import TableStudent from '@/components/table/TableStudent.vue'
import ModalImportFile from '@/components/modals/ModalImportFile.vue'
import LoaderCircle from '~/components/loadings/LoaderCircle.vue'

import studentsJSON from '@/JSON/students.json'

export default Vue.extend({
  name: 'ManageStudentSlugStudentPage',
  components: {
    Modal,
    Summary,
    InputUI,
    SelectUI,
    ButtonUI,
    Paginator,
    TableStudent,
    LoaderCircle,
    ModalImportFile,
  },
  layout: 'ManageUI',
  data: () => ({
    tableStudents: studentsJSON,
    student: {
      code: '',
      id: '',
      name: '',
      email: '',
      parent: '',
      phone: '',
      password: '',
      state: '',
    },

    // MODAL's
    isModal: false,
    isModalRemoveData: false,
    isModalNotRemoveData: false,
    isModalImportStudent: false,

    // PAGINATION's
    currentPage: 1,
    transitionName: 'slide-right',
    transitionAnimated: true,
  }),
  head() {
    return {
      title: `Alumnos nivel ${this.$route.params.student} - admin | Villakid`,
    }
  },
  computed: {
    hanldeCapitalize(): string {
      return capitalize(this.$route.params.student)
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
        case 'create-student':
          this.isModal = true
          break
        case 'import-student':
          this.isModalImportStudent = true
          break
      }
    },
    handleRemoveModal() {
      this.isModal = false
      this.isModalRemoveData = false
      this.isModalNotRemoveData = false
      this.$store.commit('SETBACKDROP', false)
    },
    handleChangeData() {
      this.handleShowModal('save')
    },
    handleRemoveData() {
      this.handleShowModal('remove')
    },
  },
})
</script>

<style lang="scss">
@import '@/assets/sass/lib/mixin';
@import '@/assets/sass/lib/var';

.v-header {
  > div > button > svg {
    font-size: 40px;
  }
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
}

@include mediaQueriesMd() {
  .summary {
    height: 80%;
  }
}
.v-modal__content {
  display: grid;
  padding: 1rem 0;
  justify-self: flex-end;
  .pwd > button {
    position: absolute;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    color: #9494d8;
    right: 1rem;
    background-color: #fff;
    @include mediaQueriesSm() {
      top: 0;
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
