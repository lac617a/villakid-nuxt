<template>
  <div class="card-summary">
    <h2 class="card-summary__title">{{ title }}</h2>
    <ul class="card-summary__nav">
      <li v-for="item in showList" :key="item.title" class="card-summary__item">
        <img :src="require(`@/assets/img/icon/${item.svg}`)" :alt="item.title" />
        <div class="card-summary__content">
          <p>{{ item.title }}:</p>
          <p class="count -bold">{{ item.result }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface IShowListProps {
  svg: string
  title: string
  result: string | number
}

export default Vue.extend({
  name: 'CardSummary',
  props: {
    title: { type: String, default: undefined },
    showList: { type: Array as PropType<IShowListProps[]>, default: () => [] },
  },
})
</script>

<style lang="scss" scoped>
$villa-kid-color-black-1: #000000;
$villa-kid-color-grey-1: #333333;
.card-summary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 40px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 0 30px;
  &__title {
    color: $villa-kid-color-black-1;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
  }
  &__nav {
    display: grid;
    gap: 1rem;
    width: 100%;
  }
  &__item {
    display: flex;
    background: #ffffff;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    padding: 40px;
    width: 100%;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: $villa-kid-color-grey-1;
    img {
      max-width: 45px;
    }
  }
  &__content {
    width: 100%;
    color: $villa-kid-color-grey-1;
    p {
      font-weight: 400;
      font-size: 18px;
      text-align: left;
      line-height: 25px;
    }
  }
}
</style>