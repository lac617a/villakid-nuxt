<template>
  <transition name="slide-fade" mode="in-out">
    <Loading v-if="loading" />
    <article
      v-else
      class="-row -flex:nowrap -flex:column -flexCenterCenter -vh"
    >
      <section class="-mBgBottom">
        <h1 class="-bold text-color-primary">Administrador</h1>
        <p class="-center -semiBold text-color-grey-dark">
          Ingresa a tu backoffice
        </p>
      </section>
      <section class="-col-12 -vw">
        <FormUIVue>
          <InputUIVue
            ref="email"
            v-model="user.email"
            :error="user.errorEmail"
            type="email"
            name="email"
            label="Correo electrónico"
            msg="Tu usuario no se encuentra registrado, por favor vuelva a ingresar su código."
          />
          <InputUIVue
            ref="password"
            v-model="user.pwd"
            :error="user.errorPwd"
            type="password"
            name="password"
            label="Contraseña"
            msg="Contraseña incorrecta. Vuelva a introducir su contraseña e inténtelo de nuevo."
          />
        </FormUIVue>
      </section>
      <section class="-col-12 -flex:column -flexCenterCenter">
        <div class="-row -flexCenterCenter">
          <div class="-col-6">
            <InputUIVue
              type="checkbox"
              name="remember-pwd"
              label="Recordar contraseña"
            />
          </div>
          <div class="-col-6 -textRight">
            <NuxtLink class="-underline" to="/manage/log/forgot-password"
              >Olvidaste tu contraseña</NuxtLink
            >
          </div>
        </div>
        <ButtonUIVue
          name="Acceder"
          type="submit"
          color="primary"
          style="max-width: 300px; width: 100%"
          @click="handleChecked()"
        />
      </section>
    </article>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

import Loading from '@/components/Loading.vue'
import InputUIVue from '@/components/UI/InputUI.vue'
import ButtonUIVue from '@/components/UI/ButtonUI.vue'
import FormUIVue from '~/components/UI/FormUI.vue'
// import {remember, showPassword} from '@/utils/remember';

export default Vue.extend({
  name: 'ManageSigninPage',
  components: {
    Loading,
    FormUIVue,
    InputUIVue,
    ButtonUIVue,
  },
  layout: 'FrameUI',
  transition: {
    name: 'slide-fade',
    mode: 'in-out'
  },
  data: () => ({
    loading: true,
    user: {
      email: '',
      pwd: '',
      errorEmail: false,
      errorPwd: false,
    },
  }),
  // middleware: "auth",
  head: () => ({
    title: 'Iniciar Sesión - admin | Villakid',
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000 * 3)
  },
  methods: {
    handleChecked() {
      if (this.user.email === '') this.user.errorEmail = true
      if (this.user.pwd === '') this.user.errorPwd = true
    },
  },
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
