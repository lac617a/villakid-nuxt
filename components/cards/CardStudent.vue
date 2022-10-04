<template>
  <div class="v-card">
    <div class="v-card-body">
      <div class="v-card__field">
        <input v-if="isEdit" v-model="value" type="text" />
        <p v-else>{{ value }}</p>
      </div>
      <div class="v-card__option">
        <NuxtLink v-if="!isEdit" :to="`${nuxtLink}${title}`">
          <ButtonUI
            type="button"
            :name="button"
            :fill="fill"
            class="btn -pInline:3"
            @mouseenter="fill = 'solid'"
            @mouseleave="fill = 'outline'"
          />
        </NuxtLink>
        <ButtonUI
          v-else
          type="button"
          name="Guardar"
          :fill="fill"
          class="btn -pInline:3"
          @click="handleChangeData"
          @mouseenter="fill = 'solid'"
          @mouseleave="fill = 'outline'"
        />
      </div>
      <div class="v-card__menu">
        <button @click.stop="isCollapse = !isCollapse">
          <font-awesome-icon
            color="#333333"
            icon="fa-solid fa-ellipsis-vertical"
          />
        </button>
        <transition name="fade" mode="in-out">
          <div v-if="isCollapse" class="v-card__collapse">
            <button @blur.stop="isCollapse = false" @click="isEdit = true">
              Editar
            </button>
            <button
              @blur.stop="isCollapse = false"
              @click="$emit('handleRemoveData')"
            >
              Eliminar
            </button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonUI from '@/components/UI/ButtonUI.vue'

export default Vue.extend({
  name: 'CardStudent',
  components: { ButtonUI },
  props: {
    nuxtLink: { type: String, default: '/' },
    button: { type: String, default: 'unknown' },
    title: { type: String, default: 'Sin título' },
  },
  data() {
    return {
      isEdit: false,
      fill: 'outline',
      value: this.title,
      isCollapse: false,
    }
  },
  methods: {
    handleChangeData() {
      this.isEdit = false
      this.$emit('handleChangeData')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/lib/var';
@import '@/assets/sass/lib/mixin';

.v-card {
  position: relative;
  border-radius: 10px;
  border-style: solid;
  border-color: #9494d8;
  border-width: 1px 1px 1px 0;
  box-shadow: inset 4px -2px 4px rgba(123, 123, 204, 0.25);
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 17px;
    background: #9494d8;
    border-radius: 10px 0 0 10px;
    box-shadow: inset 4px -2px 4px rgba(0, 0, 0, 0.25);
  }
  &-body {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 2rem 3rem;
    gap: 5rem;
    @include mediaQueriesSm() {
      padding: 1rem 1rem 2rem;
      gap: 1rem;
    }
  }
  &__field {
    flex-grow: 1;
    p,
    input {
      border: none;
      padding: 0 1rem !important;
      background-color: transparent;
      @include mediaQueriesMd() {
        width: 100%;
      }
      width: 250px;
      font-weight: 700;
      font-size: 25px;
      line-height: 34px;
      color: #333333;
      cursor: default;
      @include mediaQueriesSm() {
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        padding: 0 10px !important;
        margin-left: 10px;
      }
    }
    input {
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      outline: none;
      cursor: initial;
    }
  }
  &__option {
    @include mediaQueriesMd() {
      .btn {
        padding: 7px 2rem !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        width: max-content;
      }
    }
  }
  &__menu {
    position: relative;
    svg {
      font-size: 40px;
      @include mediaQueriesSm() {
        font-size: 24px;
      }
    }
  }
  &__collapse {
    position: absolute;
    top: 2.4rem;
    right: -3rem;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
    padding: 0 0.5rem;
    button {
      padding: 0.5rem 3.5rem;
      text-align: center;
      width: -webkit-fill-available;

      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #333333;
      &:nth-child(1) {
        border-bottom: 1px solid #bdbdbd;
      }
    }
  }
}
</style>
