<template>
  <GridUI>
    <SidebarUI :sidebar="sidebar" />
    <nuxt />
  </GridUI>
</template>

<script lang="ts">
import Vue from 'vue'
import SidebarUI from '@/components/UI/sidebar/SidebarUI.vue'
import GridUI from '@/layouts/GridUI.vue'

export default Vue.extend({
  name: 'ManageSidebar',
  components: { SidebarUI, GridUI },
  // middleware: "auth",
  data: () => ({
    sidebar: [
      {
        name: 'Resumen',
        nuxtLink: 'manage',
        logo: 'grid.svg',
      },
      {
        name: 'Alumnos',
        logo: 'peoples.svg',
        child: [
          {
            name: 'Inicial',
            nuxtLink: 'manage/student/initial',
          },
          {
            name: 'Primaria',
            nuxtLink: 'manage/student/primary',
          },
        ],
      },
      {
        name: 'Reporte',
        nuxtLink: 'report',
        logo: 'signal.svg',
      },
      {
        name: 'Anuncios',
        nuxtLink: 'advert',
        logo: 'campaign.svg',
      },
    ],
  }),
  head: () => ({
    title: 'Home - admin | Villakid',
  }),
})
</script>
