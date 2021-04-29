<template>
  <TheHeader />
  <main :class="$style.containerMain">
    <h1>Hello from HomePage.vue!</h1>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import TheHeader from '@/components/TheHeader.vue'

import sampleTodos from './sampleTodos'

export default defineComponent({
  name: 'HomePage',
  components: {
    TheHeader,
  },
  setup() {
    const store = useStore()
    store.commit('setTodos', sampleTodos)

    return {}
  },
})
</script>

<style lang="scss" module>
.container-main {
  composes: container from '@/scss/layout.module.scss';
}
</style>
