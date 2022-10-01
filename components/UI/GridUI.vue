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

<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
  .-row {
    height: calc(100vh - 70px);
  }
}
</style>