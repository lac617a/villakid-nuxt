<template>
  <form
    class="-flexCenterCenter -gap-1 -flex:column"
    @submit.prevent="handleData"
  >
    <slot></slot>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FormUI',
  methods: {
    handleData() {
      this.$emit('submit')
    },
  },
})
</script>
