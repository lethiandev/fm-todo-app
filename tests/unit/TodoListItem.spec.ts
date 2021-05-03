import { shallowMount } from '@vue/test-utils'
import TodoListItem from '@/components/TodoListItem.vue'
import Todo from '@/models/Todo'

const todo: Todo = {
  id: 'test-todo',
  label: 'Foo todo task',
  completed: false,
  order: 0,
}

function factorTodoListItem() {
  return shallowMount(TodoListItem, {
    props: { todo },
  })
}

describe('TodoListItem.vue', () => {
  it('should instance', () => {
    const wrapper = factorTodoListItem()
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should display task details', () => {
    const wrapper = factorTodoListItem()
    expect(wrapper.text()).toEqual(todo.label)
  })
})
