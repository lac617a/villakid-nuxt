<template>
  <div class="v-modal" role="dialog" @click.capture="handleIsBackdrop">
    <div class="v-modal-dialog" role="document" :style="{ maxWidth }">
      <div class="v-modal-content">
        <div v-if="withHeader" class="v-modal__header">
          <h2 class="-bold">{{ title }}</h2>
          <button type="button" @click.stop="handleClose">
            <font-awesome-icon
              icon="fa-solid fa-circle-xmark"
              color="#9494D8"
            />
          </button>
        </div>
        <div class="v-modal__content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContainerModal',
  props: {
    title: { type: String, default: undefined },
    withHeader: { type: Boolean, default: false },
    maxWidth: { type: String, default: '800px' },
  },
  methods: {
    handleClose() {
      this.$store.commit('SETBACKDROP', false)
      this.$emit('close', false)
    },
    handleIsBackdrop(e: Event) {
      if ((e.target as HTMLDivElement).getAttribute('role') === 'dialog') {
        this.handleClose()
      }
    },
  },
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

.v-modal {
  position: fixed;
  z-index: 110;
  inset: 0 0 0 0;
  transition: 300ms;
  overflow-x: hidden;
  overflow-y: auto;
  @include mediaQueriesSm() {
    &::-webkit-scrollbar {
      width: 8px;
    }
  }
  .v-field:hover {
    border-color: #9494d8;
  }
  .v-wrap-input {
    @include mediaQueriesMd() {
      max-width: 100% !important;
    }
  }
  input {
    padding: 8px 18px !important;
  }
  &-dialog {
    padding: 40px;
    background: #ffffff;
    border-radius: 30px;

    max-width: 800px;
    width: 100%;
    margin: 10% auto 1rem;
    transition: 300ms;
    @include mediaQueriesLg() {
      width: 90%;
    }
    @include mediaQueriesMd() {
      padding: 20px;
    }
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
