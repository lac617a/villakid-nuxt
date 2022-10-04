<template>
  <Modal :title="title" with-header @close="$emit('close', $event)">
    <div class="-mBlock:2">
      <div class="-flex:align-items:center -justify-content:flexEnd -gap:2">
        <label for="upload">Subir:</label>
        <InputUI
          id="upload"
          ref="inputFile"
          type="file"
          name="Selecciona un archivo excel"
          placeholder="Selecciona un archivo excel"
          @change="handleChangeFile"
        />
      </div>
      <div class="-flex:justify-content:flexEnd -mBlock:1">
        <button class="-flex -flexAlignCenter -gap:1" @click="handleRemoveFile">
          <span class="text-color-primary">Eliminar archivo Excel</span>
          <font-awesome-icon icon="fa-solid fa-trash-can" color="#9494D8" />
        </button>
      </div>
    </div>
    <div class="-flex:align-items:center -justify-self:flexEnd -gap:1 -flex-wrap:wrap">
      <ButtonUI name="Cancelar" type="button" fill="outline" @click="handleClose" />
      <ButtonUI name="Importar" type="button" />
    </div>
  </Modal>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonUI from '../UI/ButtonUI.vue'
import InputUI from '../UI/InputUI.vue'

export default Vue.extend({
  name: 'ModalImportFile',
  components: { ButtonUI, InputUI },
  props: {
    title: { type: String, default: 'Importar' },
  },
  methods: {
    handleRemoveFile() {
      ;(this.$refs.inputFile as any).$refs.input.value = ''
    },
    handleChangeFile(e: Event) {
      // eslint-disable-next-line no-console
      console.log(e)
    },
    handleClose() {
      this.$emit('close', false)
      this.$store.commit('SETBACKDROP', false)
    }
  },
})
</script>