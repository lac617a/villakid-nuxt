<template>
  <div class="villakid-page">
    <header class="vk-header">
      <button @click="showSidebar = !showSidebar">
        <font-awesome-icon icon="fa-solid fa-bars" color="#7B7BCC" />
      </button>
      <NuxtLink to="/">
        <img :src="logo" alt="logo-villa-kid" />
      </NuxtLink>
      <nav class="vk-header-nav">
        <NuxtLink to="/manage/config">
          <font-awesome-icon icon="fa-solid fa-gear" color="#4F4F4F" />
          <p>Configuración</p>
        </NuxtLink>
        <button @click="handleSoport">
          <font-awesome-icon
            icon="fa-solid fa-circle-question"
            color="#4F4F4F"
          />
          <p>Soporte</p>
        </button>
        <!-- <div class="popUp" :class="{ 'is-active': isSupport }">
          <div class="pop-header">
            <h2 class="title">Soporte</h2>
          </div>
          <div class="pop-content">
            <div class="content">
              <h2 class="content-title">Soporte Aula Virtual</h2>
              <p class="is-flex is-align-content-center">
                <img src="@/assets/img/header/support/email.svg" alt="" />
                <span>Villakid_elmejor@gmail.com</span>
              </p>
              <p class="is-flex is-align-content-center">
                <img src="@/assets/img/header/support/phone.svg" alt="" />
                <span>+51 3492175</span>
              </p>
            </div>
            <hr class="line" />
            <div class="content">
              <h2 class="content-title">Soporte Administrativo</h2>
              <p class="is-flex is-align-content-center">
                <img src="@/assets/img/header/support/email.svg" alt="" />
                <span>Villakid_elmejor@gmail.com</span>
              </p>
              <p class="is-flex is-align-content-center">
                <img src="@/assets/img/header/support/phone.svg" alt="" />
                <span>+51 3492175</span>
              </p>
            </div>
            <hr class="line" />
            <div class="content">
              <h2 class="content-title">Emergencias</h2>
              <p class="is-flex is-align-content-center">
                <img src="@/assets/img/header/support/phone.svg" alt="" />
                <span>+51 3492175</span>
              </p>
            </div>
          </div>
        </div> -->
      </nav>
    </header>
    <GridUIVue>
      <SidebarUI :sidebar="sidebar" :show-sidebar="showSidebar" />
      <nuxt />
    </GridUIVue>
    <Backdrop />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SidebarUI from '@/components/UI/sidebar/SidebarUI.vue'
import GridUIVue from '@/components/UI/GridUI.vue'
import Backdrop from '@/components/Backdrop.vue'
import manageJSON from '@/JSON/sidebar/manage.json'

export default Vue.extend({
  name: 'ManageUI',
  components: { SidebarUI, GridUIVue, Backdrop },
  // middleware: "auth",
  data: () => ({
    isSupport: false,
    showSidebar: false,
    sidebar: manageJSON,
    logo: require('@/assets/img/logos/villakid-logo.svg'),
  }),
  mounted() {
    const logoLarge = require('@/assets/img/logos/villakid-logo.svg')
    const logoSmall = require('@/assets/img/logos/villakid-logo-small.svg');

    const getResize = () => {
      if (window.innerWidth > 480) {
        this.logo = logoLarge
      } else {
        this.logo = logoSmall
      }
    }
    getResize()

    window.addEventListener('resize', () => {
      getResize()
    })
  },
  methods: {
    handleSoport() {
      this.isSupport = true
      this.$store.commit('SETBACKDROP', true)
    },
  },
})
</script>

<style lang="scss" scoped>
.vk-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  height: 80px;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  padding: 0 90px;
  border-bottom: 1px solid #e0e0e0;
  transform: rotate(0.05deg);
  > button {
    display: none;
    svg {
      font-size: 25px;
    }
  }
  &-nav {
    display: flex;
    gap: 3rem;
    > a,
    > button {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      gap: 10px;
      transition: 300ms;
      &:hover svg path,
      &:hover > p {
        fill: #7b7bcc;
        color: #7b7bcc;
      }
      > p {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #4f4f4f;
        transition: 300ms;
      }
      > svg {
        font-size: 24px;
      }
      > svg path {
        transition: 300ms;
      }
    }
  }
  > a > img {
    height: 50px;
    width: max-content;
  }
}

@media only screen and (max-width: 768px) {
  .villakid-page {
    min-height: 100vh;
  }
  .vk-header {
    padding: 0 20px;
    height: 70px;
    > button {
      display: block;
    }
    &-nav {
      display: flex;
      gap: 1rem;
      > a,
      > button {
        > p {
          font-size: 12px;
          line-height: 17px;
        }
        > svg {
          font-size: 16px;
        }
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .vk-header {
    padding: 0 10px;
  }
}
</style>