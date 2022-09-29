<template>
  <div class="container -p:2">
    <h1 class="text-color-primary -bold">Reporte</h1>
    <CSummary
      title="No cuentas con ningún reporte creado"
      body="Todos tus reporte creados aparecerán en esta sección."
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CSummary from '@/components/CSummary.vue'

export default Vue.extend({
  name: 'ManageReportIndexPage',
  components: { CSummary },
  layout: 'ManageUI',
  head: () => ({
    title: 'Reporte - admin | Villakid',
  }),
})
</script>