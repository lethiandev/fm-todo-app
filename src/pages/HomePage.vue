<template>
  <main :class="$style.container">
    <h1>Hello from HomePage.vue!</h1>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import sampleTodos from './sampleTodos'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const store = useStore()
    store.commit('setTodos', sampleTodos)

    return {}
  },
})
</script>

<style lang="scss" module>
.container {
  margin: 0 auto;
  padding: 0 24px;
  max-width: 540px;
}
</style>
