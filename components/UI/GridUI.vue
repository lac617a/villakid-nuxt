<template>
  <div class="-row -flex:nowrap">
    <slot />
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'GridUI'
})
</script>