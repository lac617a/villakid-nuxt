<template>
  <h1>List Students</h1>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ManageStudentListStudentPage',
  layout: 'ManageUI',
  head() {
    return {
      title: `Alumnos nivel ${this.$route.params.slug} - admin | Villakid`,
    }
  },
})
</script>