<template>
  <div class="container -p:2">
    <div class="-flex -justifyContentSpace">
      <h1 class="text-color-primary -bold">
        Profesores - Nivel {{ hanldeCapitalize() }}
      </h1>
      <div class="-flex">
        <ButtonUI name="Importar profesores" type="button" color="secondary" />
        <ButtonUI name="Crear profesor" type="button" color="secondary" />
      </div>
    </div>
    <CSummary
      title="No tienes ningún profesor registrado"
      body="Por favor,haga clic en el botón superior para poder importar o crear a los profesores según corresponda."
    />

    <!-- MODAL-FIXED -->
    <!-- <CModal title="Importar profesores">
      <div class="-mBlock:2">
        <div class="-flex -flexAlignCenter -justifyContentEnd -gap:2">
          <label for="upload">Subir:</label>
          <InputUI
            id="upload"
            ref="inputFile"
            name="Selecciona un archivo excel"
            type="file"
            @change="handleChangeFile"
          />
        </div>
        <div class="-flex -justifyContentEnd -mBlock:1">
          <button class="-flex -flexAlignCenter -gap:1" @click="handleRemoveFile">
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
import capitalize from '@/utils/capitalize'
// import CModal from '@/components/CModal.vue'
// import InputUI from '@/components/UI/InputUI.vue'
import ButtonUI from '~/components/UI/ButtonUI.vue'

export default Vue.extend({
  name: 'ManageTeacherSlugPage',
  components: { CSummary, ButtonUI },
  layout: 'ManageUI',
  head() {
    return {
      title: `Profesores - nivel ${this.$route.params.slug} - admin | Villakid`,
    }
  },
  methods: {
    hanldeCapitalize(): string {
      return capitalize(this.$route.params.slug)
    },
    handleRemoveFile() {
      (this.$refs.inputFile as any).$refs.input.value = ''
    },
    handleChangeFile(e: Event) {
      // eslint-disable-next-line no-console
      console.log(e)
    },
  },
})
</script>