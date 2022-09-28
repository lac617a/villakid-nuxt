<template>
  <div class="page-frame">
    <div class="page-frame-before"></div>
    <slot></slot>
    <div class="page-frame-after"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FramePage',
})
</script>

<!-- <style lang="scss" scoped>
@import '../assets/sass/layout/site';
</style> -->