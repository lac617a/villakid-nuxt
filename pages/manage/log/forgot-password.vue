<template>
  <transition name="slide-fade" mode="out-in">
    <Loading v-if="loading" />
    <FrameUI v-else>
      <article class="-row -flex:nowrap -flex:column -flexCenterCenter -vh">
        <section class="-mBgBottom">
          <h1 class="-bold text-color-primary">¿Olvidaste tu contraseña?</h1>
          <p class="-center -semiBold text-color-grey-dark">
            Por favor introduce tu correo electrónico para poder enviarte la recuperación de tu contraseña.
          </p>
        </section>
        <section class="-col-12 -mBottom:1">
          <FormUIVue>
            <InputUIVue
              ref="email"
              v-model="user.email"
              :error="user.errorEmail"
              type="email"
              name="email"
              label="Correo electrónico"
              label-color="primary"
              msg="Tu correo electrónico no se encuentra registrado, por favor vuelva a intentar." />
          </FormUIVue>
        </section>
        <section class="-col-12 -flex:column -flexCenterCenter">
          <ButtonUIVue name="Enviar" type="submit" color="primary" @click="handleData()" />
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
import FormUIVue from '~/components/UI/FormUI.vue'
// import {remember, showPassword} from '@/utils/remember';

export default Vue.extend({
  name: 'ManageSigninPage',
  components: {
    Loading,
    FrameUI,
    FormUIVue,
    InputUIVue,
    ButtonUIVue,
  },
  data: () => ({
    loading: false,
    user: {
      email: '',
      errorEmail: false,
    }
  }),
  // middleware: "auth",
  head: () => ({
    title: "Recuperación de contraseña - admin | Villakid",
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  methods: {
    handleData() {
      if (this.user.email === "") this.user.errorEmail = true
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
    font-size: 25px;
    line-height: 34px;
    margin-bottom: 2rem;
    text-align: center;
  }
}
</style>
