<template>
  <button :type="type" :class="`btn btn--${color}`" @click.stop="$emit('click')">
    <span class="-center">{{ name }}</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ButtonUIVue',
  props: {
    type: { type: String, default: 'button' },
    color: { type: String, default: undefined },
    name: { type: String, default: undefined },
  },
})
</script>
