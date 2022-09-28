<template>
  <button :class="`btn btn--${type}`" @click.stop="$emit('onClick')">
    <span class="-center">{{ name }}</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

// interface IButtonProp {
//   name: string | undefined
//   type: string | undefined
// }

// const props = defineProps<IButtonProp>()

export default Vue.extend({
  name: 'ButtonUIVue',
  props: {
    type: { type: String, default: undefined },
    name: { type: String, default: undefined },
  }
})
</script>
