<template>
  <div class="v-wrap-input">
    <label v-if="type !== 'checkbox'" class="v-label -bold" :for="name">{{
      label
    }}</label>
    <div class="v-field" :class="{ checkbox: type === 'checkbox' }">
      <input
        :id="name"
        :value="value"
        class="v-input"
        :checked="checked"
        :type="type"
        @input.stop="onInput"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InputUIVue',
  props: {
    label: { type: String, default: undefined },
    type: { type: String, default: undefined },
    name: { type: String, default: undefined },
    value: { type: String, default: undefined },
    checked: { type: Boolean, default: false },
  },
  data: () => ({
    showEye: false
  }),
  mounted() {
    document.title = "Iniciar Sesión - admin | Villakid";
  },
  methods: {
    onInput(event: Event) {
      this.$emit('input', (event.target as HTMLInputElement).value);
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/components/inputs';
</style>
