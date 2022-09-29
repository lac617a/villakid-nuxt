<template>
  <div class="villakid-page">
    <header class="vk-header">
      <NuxtLink to="/">
        <img src="@/assets/img/logos/villakid-logo.svg" alt="logo-villa-kid" />
      </NuxtLink>
      <nav class="vk-header-nav">
        <NuxtLink to="/manage/config">
          <font-awesome-icon icon="fa-solid fa-gear" color="#4F4F4F" />
          <p>Configuración</p>
        </NuxtLink>
        <button @click="handleSoport">
          <font-awesome-icon icon="fa-solid fa-circle-question" color="#4F4F4F" />
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
      <SidebarUI :sidebar="sidebar" />
      <nuxt />
    </GridUIVue>
    <CBackdrop />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SidebarUI from '@/components/UI/sidebar/SidebarUI.vue'
import GridUIVue from '@/components/UI/GridUI.vue';
import CBackdrop from '@/components/CBackdrop.vue';

export default Vue.extend({
  name: 'ManageUI',
  components: { SidebarUI, GridUIVue, CBackdrop },
  // middleware: "auth",
  data: () => ({
    isSupport: false,
    sidebar: [
      {
        name: 'Resumen',
        nuxtLink: '/manage',
        nuxtLinkName: 'manage',
        logo: 'grid-primary.svg',
      },
      {
        name: 'Alumnos',
        logo: 'peoples-primary.svg',
        nuxtLinkName: 'manage-student',
        child: [
          {
            name: 'Inicial',
            nuxtLink: '/manage/student/inicial',
          },
          {
            name: 'Primaria',
            nuxtLink: '/manage/student/primaria',
          },
        ],
      },
      {
        name: 'Cursos',
        logo: 'book-primary.svg',
        nuxtLinkName: 'manage-course ',
        child: [
          {
            name: 'Inicial',
            nuxtLink: '/manage/course/inicial',
          },
          {
            name: 'Primaria',
            nuxtLink: '/manage/course/primaria',
          },
        ],
      },
      {
        name: 'Profesores',
        logo: 'people-primary.svg',
        nuxtLinkName: 'manage-teacher',
        child: [
          {
            name: 'Inicial',
            nuxtLink: '/manage/teacher/inicial',
          }, 
          {
            name: 'Primaria',
            nuxtLink: '/manage/teacher/primaria',
          },
        ],
      },
      {
        name: 'Reporte',
        nuxtLink: '/manage/report',
        nuxtLinkName: 'manage-report',
        logo: 'signal-primary.svg',
      },
      {
        name: 'Anuncios',
        nuxtLink: '/manage/advert',
        nuxtLinkName: 'manage-advert',
        logo: 'campaign-primary.svg',
      },
    ],
  }),
  methods: {
    handleSoport() {
      this.isSupport = true
      this.$store.commit('SETBACKDROP', true)
    }
  }
})
</script>

<style lang="scss" scoped>
.vk-header {
  position: relative;
  z-index: 1;
  display: flex;
  height: 80px;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  padding: 0 90px;
  border-bottom: 1px solid #e0e0e0;
  transform: rotate(0.05deg);
  &-nav {
    display: flex;
    gap: 3rem;
    > a, > button {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      gap: 10px;
      transition: 300ms;
      &:hover svg path, &:hover > p {
        fill: #7B7BCC;
        color: #7B7BCC;
      }
      > p {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #4F4F4F;
        transition: 300ms;
      }
      > svg, > svg path {
        width: 24px;
        height: 24px;
        transition: 300ms;
      }
    }
  }
  > a > img {
    height: 50px;
    width: 191px;
  }
}
</style>