<template>
  <TheHeader />
  <main :class="$style.containerMain">
    <TodoList :todos="allTodos" />
  </main>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import TheHeader from '@/components/TheHeader.vue'
import TodoList from '@/components/TodoList.vue'

import sampleTodos from './sampleTodos'

export default defineComponent({
  name: 'HomePage',
  components: {
    TheHeader,
    TodoList,
  },
  setup() {
    const store = useStore()
    store.commit('setTodos', sampleTodos)

    return {
      allTodos: computed(() => store.getters.getAllTodos),
    }
  },
})
</script>

<style lang="scss" module>
.container-main {
  composes: container from '@/scss/layout.module.scss';
}
</style>
