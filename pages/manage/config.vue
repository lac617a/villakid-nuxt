<template>
  <div class="container -p:2">
    <h1 class="text-color-primary -bold -center">
      Configuración de calificaciónes y clases
    </h1>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ManageConfigPage',
  layout: 'ManageUI',
  head: () => ({
    title: 'Configuración - admin | Villakid',
  }),
})
</script>
