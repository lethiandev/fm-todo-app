<template>
  <VDraggable
    item-key="id"
    :class="$style.todoList"
    :modelValue="todos"
    :animation="250"
  >
    <template #item="{ element: todo }">
      <TodoListItem :todo="todo" />
    </template>
  </VDraggable>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import VDraggable from 'vuedraggable'
import TodoListItem from './TodoListItem.vue'
import Todo from '@/models/Todo'

export default defineComponent({
  components: {
    VDraggable,
    TodoListItem,
  },
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
