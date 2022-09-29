<template>
  <div class="container -p:2">
    <h1 class="text-color-primary -bold">Resumen</h1>
    <CSummary />
    <!-- <div class="-flex -pTop:2">
      <CardSummary
        v-for="element in summary"
        :key="element.title"
        :title="element.title"
        :show-list="element.showList"
      />
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CSummary from '~/components/CSummary.vue'
// import CardSummary from '@/components/cards/CardSummary.vue'
export default Vue.extend({
  name: 'ManageIndexPage',
  components: { CSummary },
  // components: { CardSummary },
  layout: 'ManageUI',
  data: () => ({
    summary: [
      {
        title: 'Inicial',
        showList: [
          {
            title: 'Profesores registrados',
            result: 20,
            svg: 'people-secondary.svg',
          },
          {
            title: 'Alumnos registrados',
            result: 20,
            svg: 'peoples-secondary.svg',
          },
          {
            title: 'Cursos',
            result: 20,
            svg: 'book-secondary.svg',
          },
        ],
      },
      {
        title: 'Primaria',
        showList: [
          {
            title: 'Profesores registrados',
            result: 20,
            svg: 'people-secondary.svg',
          },
          {
            title: 'Alumnos registrados',
            result: 20,
            svg: 'peoples-secondary.svg',
          },
          {
            title: 'Cursos',
            result: 20,
            svg: 'book-secondary.svg',
          },
        ],
      },
    ],
  }),
  head: () => ({
    title: 'Home - admin | Villakid',
  }),
})
</script>

<style>
.summary p:nth-child(2) {
  font-size: 18px;
}
</style>