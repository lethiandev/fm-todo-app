<template>
  <div :class="$style.todoListItem">
    {{ todo.label }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Todo from '@/models/Todo'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
@use '@/scss/variables' as vars;

.todo-list-item {
  padding: vars.$card-padding;
  background: var(--card-background);
  border-bottom: solid 1px var(--card-separation);
  display: flex;

  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
}
</style>
