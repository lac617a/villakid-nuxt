<template>
  <aside class="v-sidebar" :class="{ 'is-active': sideBar, 'show-sidebar': showSidebar }">
    <ul class="v-navbar">
      <Item
        v-for="item in sidebar"
        :key="item.name"
        :logo="item.logo"
        :name="item.name"
        :state="sideBar"
        :child-item="item.child"
        :nuxt-link="item.nuxtLink"
        :nuxt-link-name="item.nuxtLinkName"
      />
    </ul>
    <div class="wrapper-logout">
      <button @click.stop="sideBar = !sideBar">
        <img
          src="@/assets/img/icon/arrow-left.svg"
          alt="arrow-left-large"
          :style="{transform: `rotate(${sideBar ? '0deg' : '180deg'})`}"
        />
      </button>
      <span class="link_name logout" @click.once="logout()">Cerrar Sesión</span>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Item from './Item.vue'

interface ISidebarProps {
  name: string;
  logo: string;
  nuxtLink?: string;
  nuxtLinkName?: string;
  child: {
    name: string;
    nuxtLink: string;
  }[]
}

export default Vue.extend({
  name: 'SideBarUI',
  components: { Item },
  props: {
    sidebar: {
      type: Array as PropType<ISidebarProps[]>,
      default: () => []
    },
    showSidebar: { type: Boolean, default: false }
  },
  data: () => ({
    sideBar: true,
  }),
  methods: {
    logout() {
      this.$store.dispatch('account/logout')
    },
  },
})
</script>

<style lang="scss">
@import '@/assets/sass/components/sidebar';
</style>