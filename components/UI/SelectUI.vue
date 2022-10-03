<template>
  <div class="v-select" role="listbox">
    <button class="v-select-placeholder" @click.stop="isActive = !isActive">
      {{ name }}
      <font-awesome-icon
        :class="{ active: isActive }"
        icon="fa-solid fa-chevron-down"
        color="#828282"
      />
    </button>
    <ul class="v-select-list" :class="{ active: isActive }">
      <li
        v-for="item in (suggestionList)"
        :key="(item.name)"
        role="listitem"
        class="v-select__item"
        @click.capture.stop="handleSelect"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'

interface SelectProp {
  name: string;
}

export default Vue.extend({
  name: 'SelectUI',
  props: {
    placeholder: { type: String, default: 'Choices' },
    suggestionList: {
      type: Array as PropType<SelectProp[]>,
      default: () => [],
    },
  },
  data() {
    return {
      isActive: false,
      name: this.placeholder,
    }
  },
  methods: {
    handleSelect(e: Event) {
      this.name = (e.target as HTMLLIElement).textContent as string
      this.isActive = false
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/lib/mixin';
@import '@/assets/sass/lib/var';
.v-select {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  max-width: 300px;
  width: 100%;
  transition: 300ms;

  &-placeholder {
    position: relative;
    z-index: 2;
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: inherit;
    background: #ffffff;
    border: 1px solid #828282;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);

    padding: 6px 12px;
    border-radius: 20px;
    white-space: nowrap;

    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #4f4f4f;

    transition: 300ms;
    &:hover {
      border-color: #9494d8;
    }
    > svg.active {
      transition: 300ms;
      transform: rotate(180deg);
    }
  }
  &-list {
    display: grid;
    gap: 6px;
    position: absolute;
    top: 15px;

    list-style: none;
    padding: 0;
    margin: 0;
    background: #ffffff;

    border: 1px solid #e0e0e0;
    border-radius: 0 0 20px 20px;
    width: 100%;
    overflow: hidden;

    will-change: height;
    height: 0;
    transition: all cubic-bezier(0.175, 0.885, 0.32, 1.575) 500ms;
    &.active {
      height: max-content;
      overflow: visible;
      padding: 2rem 1rem 1rem;
    }
  }
  &__item {
    padding: 10px 0;

    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
    transition: 300ms;
    text-align: center;

    cursor: default;
    &:hover {
      cursor: pointer;
      background: rgba(148, 148, 216, 0.48);
      border-radius: 6px;
      color: #333333;
    }
    &:active {
      background: #9494d8;
    }
  }
}
</style>