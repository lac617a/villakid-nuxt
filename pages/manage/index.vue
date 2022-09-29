<template>
  <div class="container -p:2">
    <h1 class="text-color-primary -bold">Resumen</h1>
    <div
      class="summary -flexCenterCenter -flex:column -mAuto -gap:2"
      style="height: 90%; width: 100%; max-width: 400px;">
      <p class="-semiBold">No cuentas con un resumen</p>
      <p class="-center">El resumen de la actividad de tu colegio aparecerá en esta sección.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ManageIndexPage',
  layout: 'sidebar/manage'
})
</script>

<style>
.summary p:nth-child(2) {
  font-size: 18px;
}
</style>