<template>
  <div class="summary -flexCenterCenter -flex-direction:column -mAuto -gap:1">
    <p class="-semiBold">{{ title }}</p>
    <p class="-center">{{ body }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CSummary',
  props: {
    title: { type: String, default: 'No cuentas con un resumen' },
    body: {
      type: String,
      default:
        'El resumen de la actividad de tu colegio aparecerá en esta sección.',
    },
  },
})
</script>

<style>
.summary {
  height: 90%;
  width: 100%;
  max-width: 400px;
}
</style>