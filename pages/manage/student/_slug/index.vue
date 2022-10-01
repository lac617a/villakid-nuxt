<template>
  <div class="container -p:2">
    <!-- MODAL-CREATE -->
    <transition name="fade" mode="in-out">
      <Modal
        v-if="$store.state.isBackdrop && isModal"
        title="Crear grado"
        with-header
        @close="isModal = $event"
      >
        <div class="-mBlock:2">
          <div class="-flex -flexAlignCenter -justifyContentEnd -gap:2">
            <label for="name">Nombre del grado:</label>
            <InputUI
              id="name"
              name="nameGrade"
              placeholder="Introduce el nombre del grado"
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
      <Modal
        v-if="$store.state.isBackdrop && isModalChangeData"
        style="max-width: 500px"
      >
        <div class="-flex -flex:column -flexAlignCenter -gap:2 -center">
          <div>
            <h2 class="-bold">Cambios guardados</h2>
            <p class="-fontSize2:2">Tus cambios fueron guardados con éxito</p>
          </div>
          <ButtonUI
            name="Aceptar"
            type="button"
            color="secondary"
            style="font-size: 18px; max-width: 80%; width: 100%"
            class="btn -pInline:2"
            @click="handleRemoveModal"
          />
        </div>
      </Modal>
    </transition>
    <!-- END-MODAL-SAVECHANGED -->

    <!-- MODAL-REMOVE -->
    <transition name="fade" mode="in-out">
      <Modal v-if="$store.state.isBackdrop && isModalRemoveData">
        <div
          class="-flex -flex:column -flexAlignCenter -gap:4 -pInline:3 -center"
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
    <!-- END-MODAL-REMOVE -->

    <div class="v-header -flex -justifyContentSpace">
      <h1 class="text-color-primary -bold">Nivel {{ hanldeCapitalize }}</h1>
      <div class="-flex">
        <ButtonUI
          name="Crear Grado"
          type="button"
          color="secondary"
          @click="handleShowModal('create')"
        />
      </div>
    </div>

    <Summary
      v-if="false"
      title="No tienes ningún grado registrado"
      body="Por favor,haga clic en el botón superior para poder empezar a crear grados según corresponda."
    />
    <div v-else class="-mBlock:2">
      <CardStudent
        button="Seccion"
        @handleChangeData="handleChangeData"
        @handleRemoveData="handleRemoveData"
      />

      <Paginator current-page="1" />
    </div>
  </div>
</template>

<script lang="ts">
// @currentPage="count = $event"
// @transitionName="transitionName = $event"
// @transitionAnimated="transitionAnimated = $event"

import Vue from 'vue'
import Summary from '@/components/Summary.vue'
import Modal from '@/components/Modal.vue'
import capitalize from '@/utils/capitalize'
import ButtonUI from '@/components/UI/ButtonUI.vue'
import InputUI from '@/components/UI/InputUI.vue'
import Paginator from '@/components/Paginator.vue'
import CardStudent from '@/components/cards/CardStudent.vue'

export default Vue.extend({
  name: 'ManageStudentSlugPage',
  components: { Summary, ButtonUI, Modal, InputUI, Paginator, CardStudent },
  layout: 'ManageUI',
  data: () => ({
    isModal: false,
    isModalChangeData: false,
    isModalRemoveData: false,
  }),
  head() {
    return {
      title: `Alumnos nivel ${this.$route.params.slug} - admin | Villakid`,
    }
  },
  computed: {
    hanldeCapitalize(): string {
      return capitalize(this.$route.params.slug)
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
      }
    },
    handleRemoveModal() {
      this.isModal = false
      this.isModalChangeData = false
      this.isModalRemoveData = false
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