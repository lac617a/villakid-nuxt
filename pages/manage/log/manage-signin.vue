<template>
  <transition name="slide-fade" mode="out-in">
    <Loading v-if="loading" />
    <FrameUI v-else>
      <article class="-row -flex:nowrap -flex:column -flexCenterCenter -vh">
        <section class="-mBgBottom">
          <h1 class="-bold text-color-primary">Administrador</h1>
          <p class="-center">Ingresa a tu backoffice</p>
        </section>
        <section class="-col-12 -vw">
          <form class="-flexCenterCenter -gap-1 -flex:column">
            <InputUIVue
              v-model="user.email"
              type="email"
              name="email"
              label="Correo electrónico" />
            <InputUIVue
              v-model="user.pwd"
              type="password"
              name="password"
              label="Contraseña" />
          </form>
        </section>
        <section class="-col-12 -flex:column -flexCenterCenter">
          <div class="-row -flexCenterCenter">
            <div class="-col-6">
              <InputUIVue
                type="checkbox"
                name="remember-pwd"
                label="Recordar contraseña"
                @click="handleChecked()"
              />
            </div>
            <div class="-col-6 -textRight">
              <NuxtLink class="-underline" to="/">Olvidaste tu contraseña</NuxtLink>
            </div>
          </div>
          <ButtonUIVue name="Acceder" type="primary" @onClick="handleChecked()" />
        </section>
      </article>
    </FrameUI>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

import FrameUI from '@/layouts/FrameUI.vue'
import Loading from '@/components/Loading.vue'
import InputUIVue from '@/components/UI/InputUI.vue'
import ButtonUIVue from '@/components/UI/ButtonUI.vue'
// import {remember, showPassword} from '@/utils/remember';

export default Vue.extend({
  name: 'ManageSigninPage',
  components: {
    Loading,
    FrameUI,
    InputUIVue,
    ButtonUIVue,
  },
  // middleware: "auth",
  data: () => ({
    loading: false,
    user: {
      email: '',
      pwd: '',
    }
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  methods: {
    handleChecked() {
      // eslint-disable-next-line no-console
      console.log(this.user);
    },
  }
})
</script>

<style lang="scss" scoped>
.page-log {
  position: absolute;
  inset: 0 0 0 0;
  height: 100vh;
}

.page-log img {
  max-width: 200px;
  height: 200px;
  align-self: center;
}

article {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  section > h1 {
    font-size: 48px;
    line-height: 65px;
    text-align: center;
  }
}
</style>
