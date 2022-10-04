<template>
  <div class="table-teacher">
    <!-- MODAL-EDIT -->
    <transition name="fade" mode="in-out">
      <Modal
        v-if="$store.state.isBackdrop && isModalEdit"
        title="Crear profesor"
        with-header
        @close="isModalEdit = $event"
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
            <textarea
              v-model.trim="teacher.bio"
              rows="5"
              placeholder="Introduce una breve descripción"
            >
            </textarea>
          </div>
          <div class="-flex:align-items:center -justify-content:flexEnd -gap:2">
            <label for="password" class="-textRight">Contraseña:</label>
            <InputUI
              id="password"
              v-model.trim="teacher.password"
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
              v-model.trim="teacher.email"
              type="email"
              name="email"
              placeholder="Introduce el correo electrónico"
            />
          </div>
          <div class="-flex:align-items:center -justify-content-evenly -gap:2">
            <label for="password" class="-textRight">Estado:</label>
            <SelectUI
              :placeholder="teacher.state"
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
    <!-- END-MODAL-EDIT -->

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
              @click="handleRemoveModal"
            />
            <ButtonUI
              name="Eliminar"
              type="button"
              color="secondary"
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
        'Biografía',
        'Estado',
        'Editar',
      ]"
      @editData="handleShowModal('edit-teacher', $event)"
      @removeData="handleShowModal('remove-teacher', $event)"
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
  bio: string
  name: string
  picture: string | undefined
  email: string
  state: string
  password: string
}

export default Vue.extend({
  name: 'TableTeacher',
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
      teacher: {
        code: '',
        picture: '',
        id: '',
        bio: '',
        name: '',
        state: '',
        email: '',
        password: '',
      } as ITableStudentProp,
    }
  },
  methods: {
    handleShowModal(name: string, id?: string) {
      this.$store.commit('SETBACKDROP', true)
      switch (name) {
        case 'edit-teacher':
          this.isModalEdit = true
          this.teacher = this.suggestionList.filter((sug) => sug.id === id)[0]
          break
        case 'save-teacher':
          this.isModalChangedataStudent = true
          break
        case 'remove-teacher':
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
      this.handleShowModal('save-teacher')
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
