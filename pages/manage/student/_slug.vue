<template>
  <div class="container -p:2">
    <div class="-flex -justifyContentSpace">
      <h1 class="text-color-primary -bold">Nivel {{ hanldeCapitalize() }}</h1>
      <div class="-flex">
        <ButtonUI name="Crear Grado" type="button" color="secondary" />
      </div>
    </div>

    <CSummary
      title="No tienes ningún grado registrado"
      body="Por favor,haga clic en el botón superior para poder empezar a crear grados según corresponda."
    />

    <!-- MODAL-FIXED -->
    <!-- <CModal title="Importar profesores">
      <div class="-mBlock:2">
        <div class="-flex -flexAlignCenter -justifyContentEnd -gap:2">
          <label for="upload">Subir:</label>
          <InputUI id="upload" name="Selecciona un archivo excel" type="file" />
        </div>
        <div class="-flex -justifyContentEnd -mBlock:1">
          <button class="-flex -flexAlignCenter -gap:1">
            <span class="text-color-primary">Eliminar archivo Excel</span>
            <font-awesome-icon icon="fa-solid fa-trash-can" color="#9494D8" />
          </button>
        </div>
      </div>
      <div class="v-modal__content-footer">
        <ButtonUI name="Cancelar" type="button" fill="outline" />
        <ButtonUI name="Importar" type="button" />
      </div>
    </CModal> -->
    <!-- END-MODAL-FIXED -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CSummary from '@/components/CSummary.vue'
// import CModal from '@/components/CModal.vue'
import capitalize from '@/utils/capitalize'
import ButtonUI from '@/components/UI/ButtonUI.vue'

export default Vue.extend({
  name: 'ManageStudentSlugPage',
  components: { CSummary, ButtonUI },
  layout: 'ManageUI',
  head() {
    return {
      title: `Alumnos nivel ${this.$route.params.slug} - admin | Villakid`,
    }
  },
  methods: {
    hanldeCapitalize(): string {
      return capitalize(this.$route.params.slug)
    },
  },
})
</script>