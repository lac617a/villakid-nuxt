<template>
  <div class="container -p:2">
    <h1 class="text-color-primary -bold">Anuncios</h1>
    <button class="create-advert">
      <span>Crear Anuncio</span>
      <font-awesome-icon icon="fa-solid fa-circle-plus" color="#4F4F4F" />
    </button>
    <Summary
      title="No cuentas con ningún anuncio creado"
      body="Todos tus anuncios creados aparecerán en esta sección."
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Summary from '@/components/Summary.vue'

export default Vue.extend({
  name: 'ManageAdvertIndexPage',
  components: { Summary },
  layout: 'ManageUI',
  head: () => ({
    title: 'Anuncios - admin | Villakid',
  }),
})
</script>

<style lang="scss" scoped>
.create-advert {
  position: absolute;
  padding: 2rem 0;
  display: flex;
  gap: 2rem;
  align-items: center;
  > span {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #4f4f4f;
  }
  svg {
    width: 24px;
    height: 24px;
  }
}
</style>
