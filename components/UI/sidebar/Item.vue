<template>
  <li
    role="listitem"
    :aria-label="name"
    :aria-labelledby="name"
    class="v-navbar v-item"
    :class="{ 'item-active': $route.name === nuxtLinkName }"
  >
    <NuxtLink v-if="nuxtLink" :to="nuxtLink">
      <div class="wrapper-content">
        <img :src="getImage" :alt="nuxtLink" />
        <span class="link_name">{{ name }}</span>
      </div>
    </NuxtLink>
    <button v-else class="wrapper-content" @click.stop="isActive = !isActive">
      <img :src="getImage" :alt="name" />
      <span class="link_name">{{ name }}</span>
      <div class="wrapper-content__icon">
        <font-awesome-icon
          :class="{ 'is-active': isActive && state }"
          icon="fa-solid fa-chevron-right"
          color="#FFFFFF"
        />
      </div>
    </button>
    <ul
      v-show="isActive && state"
      class="child-item"
      :class="{ 'is-active': isActive && state }"
    >
      <li v-for="item in childItem" :key="item.name" class="item">
        <NuxtLink active-class="is-active" :to="item.nuxtLink">{{
          item.name
        }}</NuxtLink>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface ISidebarItemProps {
  name: string
  nuxtLink: string
}

export default Vue.extend({
  name: 'SidebarItem',
  props: {
    state: { type: Boolean, default: true },
    name: { type: String, default: undefined },
    logo: { type: String, default: undefined },
    nuxtLink: { type: String, default: undefined },
    nuxtLinkName: { type: String, default: undefined },
    childItem: {
      type: Array as PropType<ISidebarItemProps[]>,
      default: () => [],
      required: false,
    },
  },
  data: () => ({
    isActive: false,
  }),
  computed: {
    getImage(): string {
      return require(`@/assets/img/icon/${this.logo}`)
    },
  },
})
</script>
