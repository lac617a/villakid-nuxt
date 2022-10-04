<template>
  <div class="table-student">
    <!-- MODAL-CREATE -->
    <transition name="fade" mode="in-out">
      <Modal
        v-if="$store.state.isBackdrop && isModalEdit"
        title="Crear alumno"
        with-header
        @close="isModalEdit = $event"
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
              v-model.trim="student.name"
              :value="student.name"
              type="text"
              name="name"
              placeholder="Introduce el nombre del alumno"
            />
          </div>
          <div class="-flex:align-items:center -justify-content:flexEnd -gap:2">
            <label for="parent" class="-textRight">Padre/Apoderado:</label>
            <InputUI
              id="parent"
              v-model.trim="student.parent"
              :value="student.parent"
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
              v-model.trim="student.email"
              :value="student.email"
              type="email"
              name="email"
              placeholder="Introduce el correo electrónico"
            />
          </div>
          <div class="-flex:align-items:center -justify-content:flexEnd -gap:2">
            <label for="phone" class="-textRight">Teléfono del padre:</label>
            <InputUI
              id="phone"
              v-model.trim="student.phone"
              :value="student.phone"
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
              v-model.trim="student.password"
              :value="student.password"
              type="text"
              name="password"
              placeholder="Introduce tu nueva contraseña"
            />
            <button>Generar automaticamente</button>
          </div>
          <div class="-flex:align-items:center -justify-content-evenly -gap:2">
            <label for="password" class="-textRight">Estado:</label>
            <SelectUI
              :placeholder="student.state"
              :suggestion-list="['Active', 'Inactive']"
            />
          </div>
        </div>
        <div class="v-modal__content-footer">
          <ButtonUI
            name="Cancelar"
            type="button"
            fill="outline"
            style="font-size: 16px !important"
            class="btn -pInline:2"
            @click="handleRemoveModal"
          />
          <ButtonUI
            name="Guardar"
            type="button"
            style="font-size: 16px !important"
            class="btn -pInline:3"
            @click="handleChangeDataModal"
          />
        </div>
      </Modal>
    </transition>
    <!-- END-MODAL-CREATE -->

    <!-- MODAL-SAVECHANGED -->
    <transition name="fade" mode="in-out">
      <ModalSuccess
        v-if="$store.state.isBackdrop && isModalChangedataStudent"
        @success="handleRemoveModal"
      />
    </transition>
    <!-- END-MODAL-SAVECHANGED -->

    <!-- MODAL-REMOVE -->
    <transition name="fade" mode="in-out">
      <Modal v-if="$store.state.isBackdrop && isModalRemoveStudent">
        <div
          class="-flex:flex-direction:column -alig-items:center -gap:4 -pInline:3 -center"
        >
          <div>
            <h2 class="-bold -mBottom:1">Eliminar alumno</h2>
            <p class="-fontSize2:2">
              ¿Estás seguro que quieres eliminar la sección de alumno creada?
            </p>
          </div>
          <div class="-flex -gap:1">
            <ButtonUI
              name="Cancelar"
              type="button"
              color="secondary"
              fill="outline"
              style="font-size: 18px"
              @click="handleRemoveModal"
            />
            <ButtonUI
              name="Eliminar"
              type="button"
              color="secondary"
              style="font-size: 18px"
              @click="handleRemoveModal"
            />
          </div>
        </div>
      </Modal>
    </transition>
    <!-- END-MODAL-REMOVE -->

    <Table
      :suggestion-list="suggestionList"
      :heading-list="[
        'Nombre Alumnos',
        'Correo',
        'Padre/apoderado',
        'Teléfono',
        'Estado',
        'Editar',
      ]"
      @editData="handleShowModal('edit-student', $event)"
      @removeData="handleShowModal('remove-student', $event)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

// COMPONENTs
import Modal from '@/components/Modal.vue'
import InputUI from '@/components/UI/InputUI.vue'
import ButtonUI from '@/components/UI/ButtonUI.vue'
import SelectUI from '@/components/UI/SelectUI.vue'
import ModalSuccess from '@/components/modals/ModalSuccess.vue'
import Table from '@/components/table/Table.vue'

interface ITableStudentProp {
  code: string
  id: string
  name: string
  email: string
  parent: string
  phone: string
  password: string
  state: string
}

export default Vue.extend({
  name: 'TableStudent',
  components: {
    Modal,
    Table,
    InputUI,
    ButtonUI,
    SelectUI,
    ModalSuccess,
  },
  props: {
    suggestionList: {
      type: Array as PropType<ITableStudentProp[]>,
      default: () => [],
    },
  },
  data() {
    return {
      isModalEdit: false,
      isModalChangedataStudent: false,
      isModalRemoveStudent: false,
      student: {
        code: '',
        id: '',
        name: '',
        email: '',
        parent: '',
        phone: '',
        password: '',
        state: '',
      } as ITableStudentProp,
    }
  },
  methods: {
    handleShowModal(name: string, id?: string) {
      this.$store.commit('SETBACKDROP', true)
      switch (name) {
        case 'edit-student':
          this.isModalEdit = true
          this.student = this.suggestionList.filter((sug) => sug.id === id)[0]
          break
        case 'save-student':
          this.isModalChangedataStudent = true
          break
        case 'remove-student':
          this.isModalRemoveStudent = true
          break
      }
    },
    handleRemoveModal() {
      this.isModalEdit = false
      this.isModalRemoveStudent = false
      this.isModalChangedataStudent = false
      this.$store.commit('SETBACKDROP', false)
    },
    handleChangeDataModal() {
      this.handleRemoveModal()
      this.handleShowModal('save-student')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/lib/mixin';
@import '@/assets/sass/lib/var';

.v-modal-dialog {
  .v-modal__content {
    > div {
      @include mediaQueriesSm() {
        padding: 0 !important;
      }
      .-flex {
        @include mediaQueriesSm() {
          flex-wrap: wrap-reverse;
        }
      }
    }
  }
}
</style>
