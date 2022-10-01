<template>
  <button
    :type="type.type"
    :class="`btn btn--${color} btn:${fill}`"
    @click.stop="$emit('click')"
    @mouseenter.stop="$emit('mouseenter')"
    @mouseleave.stop="$emit('mouseleave')"
  >
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
    type: { type: String as PropType<IButtonProp> },
    color: { type: String, default: 'primary' },
    name: { type: String, default: undefined },
    fill: { type: String, default: 'solid' },
  },
})
</script>
