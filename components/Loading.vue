<template>
  <div class="page-frame page-loading -row -justifyContentCenter">
    <div class="page-frame-before"></div>
    <transition name="slide-fade" mode="in-out">
      <img
        v-if="showLogo"
        alt="loading"
        src="../assets/img/logos/loading.svg" />
    </transition>
    <div class="page-frame-after"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LoadingScreen",
  transition: {
    name: 'slide-fade',
    mode: 'in-out'
  },
  data: () => ({
    showLogo: false,
  }),
  beforeMount() {
    setTimeout(() => {
      this.showLogo = true;
    }, 500);
  },
});
</script>

<style lang="scss" scoped>
.page-loading {
  position: absolute;
  z-index: -1;
  inset: 0 0 0 0;
  height: 100vh;
  overflow: hidden;
  background-image: url("../assets/img/background/loading-screens.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  img {
    max-width: 200px;
    height: 200px;
    align-self: center;
  }
}
</style>
