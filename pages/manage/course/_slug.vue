<template>
  <div class="container -p:2">
    <div class="-flex:justify-content:between -align-items:center">
      <h1 class="text-color-primary -bold">
        Cursos - Nivel {{ hanldeCapitalize() }} 
      </h1>
      <div class="-flex">
        <ButtonUI name="Crear nuevo curso" type="button" color="secondary" />
      </div>
    </div>

    <Summary
      title="No tienes ningún curso registrado"
      body="Por favor, haga clic en el botón superior para poder crear los cursos según corresponda."
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Summary from '@/components/Summary.vue'
import capitalize from '@/utils/capitalize'
import ButtonUI from '@/components/UI/ButtonUI.vue'

export default Vue.extend({
  name: 'ManageCourseSlugPage',
  components: { Summary, ButtonUI },
  layout: 'ManageUI',
  head() {
    return {
      title: `Cursos - nivel ${this.$route.params.slug} - admin | Villakid`,
    }
  },
  methods: {
    hanldeCapitalize(): string {
      return capitalize(this.$route.params.slug)
    },
  },
})
</script>