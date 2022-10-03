<template>
  <div class="container -p:2">
    <!-- MODAL-CREATE -->
    <transition name="fade" mode="in-out">
      <Modal
        v-if="$store.state.isBackdrop && isModal"
        title="Crear Sección"
        with-header
        @close="isModal = $event"
      >
        <div class="-mBlock:2">
          <div class="-flex:align-items:center -justify-content:flexEnd -gap:2">
            <label for="name">Nombre de la sección:</label>
            <InputUI
              id="name"
              name="nameGrade"
              placeholder="Introduce el nombre de la sección"
              type="text"
            />
          </div>
        </div>
        <div class="v-modal__content-footer">
          <ButtonUI
            name="Cancelar"
            type="button"
            fill="outline"
            style="font-size: 18px"
            class="btn -pInline:2"
            @click="handleRemoveModal"
          />
          <ButtonUI
            name="Crear"
            type="button"
            style="font-size: 18px"
            class="btn -pInline:3"
          />
        </div>
      </Modal>
    </transition>
    <!-- END-MODAL-CREATE -->

    <!-- MODAL-SAVECHANGED -->
    <transition name="fade" mode="in-out">
      <ModalSuccess
        v-if="$store.state.isBackdrop && isModalChangeData"
        @success="handleRemoveModal"
      />
    </transition>
    <!-- END-MODAL-SAVECHANGED -->

    <!-- MODAL-REMOVE -->
    <transition name="fade" mode="in-out">
      <Modal v-if="$store.state.isBackdrop && isModalRemoveData">
        <div
          class="
            -flex:flex-direction:column
            -alig-items:center
            -gap:4
            -pInline:3
            -center
          "
        >
          <div>
            <h2 class="-bold -mBottom:1">Eliminar sección</h2>
            <p class="-fontSize2:2">
              ¿Estás seguro que quieres eliminar la sección?
            </p>
          </div>
          <div class="-flex -gap:1">
            <ButtonUI
              name="cancelar"
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

    <!-- MODAL-NOT-REMOVE -->
    <transition name="fade" mode="in-out">
      <Modal v-if="$store.state.isBackdrop && isModalNotRemoveData">
        <div
          class="
            -flex:flex-direction:column
            -align-items:center
            -gap:4
            -pInline:3
            -center
          "
        >
          <div>
            <h2 class="-bold -mBottom:1">Eliminar grado</h2>
            <p class="-fontSize2:2">
              Los sentimos, no es posible eliminar esta apartado. Esta sujeta a
              información con respectos a las secciones y sus alumnos.
            </p>
          </div>
          <ButtonUI
            name="Aceptar"
            type="button"
            color="secondary"
            class="btn -pInline:2"
            style="font-size: 18px; max-width: 50%; width: 100%"
            @click="handleRemoveModal"
          />
        </div>
      </Modal>
    </transition>
    <!-- END-MODAL-NOT-REMOVE -->

    <div class="v-header -flex:justify-content:between -align-items:center">
      <h1 class="text-color-primary -bold">
        Secciones - {{ hanldeCapitalize }}
      </h1>
      <div class="-flex">
        <ButtonUI
          name="Agregar Sección"
          type="button"
          color="secondary"
          @click="handleShowModal('create')"
        />
      </div>
    </div>
    <div class="-mBlock:2">
      <CardStudent
        title="3 Años Sección A"
        button="Ver alumnos"
        :nuxt-link="`/manage/student/${$route.params.slug}/${$route.params.section}/`"
        @handleChangeData="handleChangeData"
        @handleRemoveData="handleRemoveData"
      />

      <Paginator current-page="1" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Modal from '@/components/Modal.vue'
import capitalize from '@/utils/capitalize'
import InputUI from '@/components/UI/InputUI.vue'
import Paginator from '@/components/Paginator.vue'
import ButtonUI from '@/components/UI/ButtonUI.vue'
import CardStudent from '@/components/cards/CardStudent.vue'
import ModalSuccess from '@/components/modals/ModalSuccess.vue'

export default Vue.extend({
  name: 'ManageStudentSlugSectionPage',
  components: {
    Modal,
    InputUI,
    ButtonUI,
    Paginator,
    CardStudent,
    ModalSuccess,
  },
  layout: 'ManageUI',
  data: () => ({
    isModal: false,
    isModalChangeData: false,
    isModalRemoveData: false,
    isModalNotRemoveData: false,
  }),
  head() {
    return {
      title: `Alumnos nivel ${this.$route.params.section} - admin | Villakid`,
    }
  },
  computed: {
    hanldeCapitalize(): string {
      return capitalize(this.$route.params.section)
    },
  },
  methods: {
    handleShowModal(name: string) {
      this.$store.commit('SETBACKDROP', true)
      switch (name) {
        case 'create':
          this.isModal = true
          break
        case 'save':
          this.isModalChangeData = true
          break
        case 'remove':
          this.isModalRemoveData = true
          break
        case 'not-remove':
          this.isModalNotRemoveData = true
          break
      }
    },
    handleRemoveModal() {
      this.isModal = false
      this.isModalChangeData = false
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

<style lang="scss" scoped>
@import '@/assets/sass/lib/mixin';
@import '@/assets/sass/lib/var';
.v-header {
  @include mediaQueriesSm() {
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    > div {
      width: 100%;
      max-width: 90%;
    }
  }
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
  &-footer {
    display: flex;
    gap: 1rem;
    justify-self: flex-end;
  }
}
</style>