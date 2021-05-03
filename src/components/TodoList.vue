<template>
  <div :class="$style.todoList">
    <TodoListItem v-for="todo of todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TodoListItem from './TodoListItem.vue'
import Todo from '@/models/Todo'

export default defineComponent({
  components: { TodoListItem },
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" module>
.todo-list {
  display: flex;
  flex-direction: column;
}
</style>
