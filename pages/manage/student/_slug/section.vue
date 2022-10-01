<template>
  <h1>Section</h1>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ManageStudentSectionPage',
  layout: 'ManageUI',
  head() {
    return {
      title: `Alumnos nivel ${this.$route.params.slug} - admin | Villakid`,
    }
  },
})
</script>