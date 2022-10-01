<template>
  <div
    class="backdrop"
    :class="{ show: $store.state.isBackdrop }"
    @click.capture="handleRemoveBackdrop"
  ></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CBackdrop',
  beforeUpdate() {
    const isBackdrop = this.$store.state.isBackdrop
    isBackdrop
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'visible')
  },
  methods: {
    handleRemoveBackdrop() {
      this.$store.commit('SETBACKDROP', false)
    },
  },
})
</script>

<style lang="scss" scoped>
.backdrop {
  transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1);
  &.show {
    position: absolute;
    inset: 0 0 0 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 25%);
  }

}
</style>