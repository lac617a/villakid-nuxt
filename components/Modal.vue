<template>
  <div class="v-modal">
    <div class="v-modal-body">
      <div v-if="withHeader" class="v-modal__header">
        <h2 class="-bold">{{title}}</h2>
        <button type="button" @click.stop="handleClose">
          <font-awesome-icon icon="fa-solid fa-circle-xmark" color="#9494D8" />
        </button>
      </div>
      <div class="v-modal__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CModal',
  props: {
    title: { type: String, default: undefined },
    withHeader: { type: Boolean, default: false }
  },
  methods: {
    handleClose() {
      this.$store.commit('SETBACKDROP', false)
      this.$emit('close', false)
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/sass/lib/var';
@import '@/assets/sass/lib/mixin';

label {
  display: block;
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
}
input {
  padding: 8px 18px !important;
}
.v-modal {
  position: fixed;
  z-index: 110;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background: #ffffff;
  border-radius: 30px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  transition: 300ms;
  @include mediaQueriesLg() {
    margin: 0 1rem;
    right: 0;
    left: 0;
    top: 30%;
    transform: none;
    width: auto;
  }
  @include mediaQueriesMd() {
    padding: 20px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    button {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
  &__content {
    display: grid;
    padding: 1rem 0;
    justify-self: flex-end;
    &-footer {
      justify-self: flex-end;
    }
  }
}
</style>