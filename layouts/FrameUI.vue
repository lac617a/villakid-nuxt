<template>
  <div class="page-frame">
    <div class="page-frame-before"></div>
    <nuxt />
    <div class="page-frame-after"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FrameUI',
})
</script>