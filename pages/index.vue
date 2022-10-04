<template>
  <div class="-container -mBlock:3">
    <h1 class="text-color-primary -bold -center">Rutas disponibles</h1>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/manage">Manage</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/manage/log/signin">Manage signin</NuxtLink>
        </li>
      </ul>
    </nav>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
