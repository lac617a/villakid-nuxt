<template>
  <div class="container -p:2">
    <h1 class="text-color-primary -bold">Reporte</h1>
    <Summary
      title="No cuentas con ningún reporte creado"
      body="Todos tus reporte creados aparecerán en esta sección."
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Summary from '@/components/Summary.vue'

export default Vue.extend({
  name: 'ManageReportIndexPage',
  components: { Summary },
  layout: 'ManageUI',
  head: () => ({
    title: 'Reporte - admin | Villakid',
  }),
})
</script>