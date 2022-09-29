<template>
  <li
    role="listbox"
    class="v-navbar v-item"
    :class="{ 'item-active': $route.name === nuxtLink }"
  >
    <NuxtLink v-if="nuxtLink" :to="nuxtLink">
      <div class="wrapper-content">
        <img :src="getImage" :alt="nuxtLink" />
        <span class="link_name">{{ name }}</span>
      </div>
    </NuxtLink>
    <button v-else class="wrapper-content" @click.stop="isActive = !isActive">
      <img :src="getImage" :alt="nuxtLink" />
      <span class="link_name">{{ name }}</span>
    </button>
    <ul
      v-show="isActive && state"
      class="child-item"
      :class="{ 'is-active': isActive && state }"
    >
      <li
        v-for="item in childItem"
        :key="item.name"
        class="item"
        :class="{ 'is-active': $route.name === 'StudentGradeInitial' }"
      >
        <NuxtLink :to="item.nuxtLink">{{ item.name }}</NuxtLink>
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
      return require(`@/assets/img/sideBar/${this.logo}`)
    },
  },
})
</script>