import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'
import TodoListItem from '@/components/TodoListItem.vue'
import Todo from '@/models/Todo'

const todos: Todo[] = [
  {
    id: 'todo-foo',
    label: 'Foo Todo',
    completed: false,
    order: 0,
  },
  {
    id: 'todo-bar',
    label: 'Bar Todo',
    completed: false,
    order: 1,
  },
  {
    id: 'todo-baz',
    label: 'Baz Todo',
    completed: false,
    order: 2,
  },
]

describe('TodoList.vue', () => {
  it('should instance', () => {
    const wrapper = shallowMount(TodoList)

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.findAllComponents(TodoListItem).length).toEqual(0)
  })

  it('should display todo tasks', () => {
    const wrapper = shallowMount(TodoList, {
      props: { todos },
    })

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.findAllComponents(TodoListItem).length).toEqual(3)
  })
})
