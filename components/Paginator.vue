<template>
  <div class="v-paginator">
    <button class="v-paginator-left" @click.stop="decrementPage">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </button>
    <span>{{ countPage }}</span>
    <button
      class="v-paginator-right"
      :disabled="currentPage === null"
      @click.stop="incrementPage(currentPage)"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CPaginator',
  props: {
    currentPage: {type: String, default: '1'}
  },
  data: () => ({
    countPage: 1,
    transitionName: 'slide-right',
    transitionAnimated: false,
  }),
  watch: {
    countPage() {
      this.$emit('currentPage', this.countPage)
      this.$emit('transitionName', this.transitionName)
      this.$emit('transitionAnimated', this.transitionAnimated)
    }
  },
  methods: {
    incrementPage(pageSize: string | undefined) {
      if (pageSize !== null) {
        this.countPage++
        this.transitionName = 'slide-right'
        this.transitionAnimated = false
        return
      }
      return this.countPage
    },
    decrementPage() {
      if (this.countPage > 1) {
        this.countPage--
        this.transitionName = 'slide-left'
        this.transitionAnimated = false
        return
      }
      return this.countPage
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/components/paginator';
</style>