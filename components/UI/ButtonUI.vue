<template>
  <button :type="type.type" :class="`btn btn--${color}`" @click.stop="$emit('click')">
    <span class="-center">{{ name }}</span>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface IButtonProp {
  type?: 'submit' | 'reset' | 'button'
}

export default Vue.extend({
  name: 'ButtonUIVue',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    type: { type: Number as PropType<IButtonProp> },
    color: { type: String, default: undefined },
    name: { type: String, default: undefined },
  },
})
</script>
