<template>
  <div class="container -p:2">
    <h1 class="text-color-primary -bold">
      Profesores - Nivel {{ hanldeCapitalize() }}
    </h1>
    <CSummary
      title="No tienes ningún profesor registrado"
      body="Por favor,haga clic en el botón superior para poder importar o crear a los profesores según corresponda."
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CSummary from '@/components/CSummary.vue'
import capitalize from '@/utils/capitalize'

export default Vue.extend({
  name: 'ManageTeacherSlugPage',
  components: { CSummary },
  layout: 'ManageUI',
  head() {
    return {
      title: `Profesores - nivel ${this.$route.params.slug} - admin | Villakid`,
    }
  },
  methods: {
    hanldeCapitalize(): string {
      return capitalize(this.$route.params.slug)
    },
  },
})
</script>