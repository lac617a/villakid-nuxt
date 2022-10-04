<template>
  <Modal max-width="500px">
    <div class="-flex:flex-direction:column -align-items:center -gap:2 -center">
      <div>
        <h2 class="-bold">{{title}}</h2>
        <p class="-fontSize2:2">{{body}}</p>
      </div>
      <ButtonUI
        name="Aceptar"
        type="button"
        color="secondary"
        class="btn -pInline:2"
        style="max-width: 80%; width: 100%"
        @click="$emit('success')"
      />
    </div>
  </Modal>
</template>

<script lang="ts">
import Vue from 'vue';
import ButtonUI from '../UI/ButtonUI.vue';

export default Vue.extend({
  name: 'ModalSuccess',
  components: {ButtonUI},
  props: {
    title: { type: String, default: 'Cambios guardados' },
    body: { type: String, default: 'Tus cambios fueron guardados con éxito' },
  }
})
</script>