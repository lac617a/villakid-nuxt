<template>
  <div class="container -p:2">
    <div class="-flex:justify-content:between -flex-wrap:wrap -align-items:center">
      <h1 class="text-color-primary -bold">
        Profesores - Nivel {{ hanldeCapitalize() }}
      </h1>
      <div class="-flex -gap:1">
        <ButtonUI name="Importar profesores" type="button" color="secondary" />
        <ButtonUI name="Crear profesor" type="button" color="secondary" />
      </div>
    </div>
    <Summary
      title="No tienes ningún profesor registrado"
      body="Por favor,haga clic en el botón superior para poder importar o crear a los profesores según corresponda."
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Summary from '@/components/Summary.vue'
import capitalize from '@/utils/capitalize'
import ButtonUI from '~/components/UI/ButtonUI.vue'

export default Vue.extend({
  name: 'ManageTeacherSlugPage',
  components: { Summary, ButtonUI },
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
    handleRemoveFile() {
      (this.$refs.inputFile as any).$refs.input.value = ''
    },
    handleChangeFile(e: Event) {
      // eslint-disable-next-line no-console
      console.log(e)
    },
  },
})
</script>