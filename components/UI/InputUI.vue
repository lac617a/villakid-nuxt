<template>
  <div class="v-wrap-input">
    <label v-if="type !== 'checkbox'" :class="`v-label -bold text-color-${labelColor}`" :for="name">{{
      label
    }}</label>
    <div class="v-field" :class="{ checkbox: type === 'checkbox', error: isError }">
      <input
        :id="name"
        ref="input"
        class="v-input"
        :value="value"
        :placeholder="placeholder"
        :checked="checked"
        :type="changeType"
        @input.stop="onInput"
        @change.stop="onChange"
      />
      <button v-if="type === 'password'" type="button" @click.stop="showEye = !showEye">
        <FontAwesomeIcon :icon="['fas', showEye ? 'eye' : 'eye-slash']" />
      </button>
      <label
        v-if="type === 'checkbox'"
        :for="name"
        class="v-label -bold"
        type="button"
        >{{ label }}</label
      >
    </div>
    <p v-if="isError">{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InputUIVue',
  props: {
    error: { type: Boolean, default: false },
    msg: { type: String, default: undefined },
    checked: { type: Boolean, default: false },
    type: { type: String, default: undefined },
    name: { type: String, default: undefined },
    value: { type: String, default: undefined },
    label: { type: String, default: undefined },
    placeholder: { type: String, default: undefined },
    labelColor: { type: String, default: 'grey-dark' },
  },
  data: () => ({
    showEye: false
  }),
  computed: {
    changeType: {
      get() {
        return this.type
      },
      set(newValue: string) {
        (this.$refs.input as HTMLInputElement).type = newValue
      }
    },
    isError() {
      return this.error
    }
  },
  watch: {
    showEye(current: boolean) {
      let type: string = this.type
      current
        ? type = 'text'
        : type = 'password'
      this.changeType = type
    }
  },
  methods: {
    onInput(event: Event) {
      this.$emit('input', (event.target as HTMLInputElement).value);
    },
    onChange(event: Event) {
      this.$emit('change', (event.target as HTMLInputElement).value);
    },
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/components/inputs';
</style>
