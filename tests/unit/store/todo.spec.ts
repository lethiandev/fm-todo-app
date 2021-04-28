import { actions, getters, mutations, state, State } from '@/store/todo'
import entitify from '@/utils/entitify'
import Todo from '@/models/Todo'

const todos: Todo[] = [
  { id: 'todo-3', label: 't3', completed: true, order: 0 },
  { id: 'todo-1', label: 't1', completed: false, order: 1 },
  { id: 'todo-2', label: 't2', completed: false, order: 2 },
]

const finalState: State = {
  todos: {
    'todo-1': { id: 'todo-1', label: 't1', completed: false, order: 1 },
    'todo-2': { id: 'todo-2', label: 't2', completed: false, order: 2 },
    'todo-3': { id: 'todo-3', label: 't3', completed: true, order: 0 },
  },
}

function createMockedTodo(id?: string): Todo {
  const index = Math.floor(Math.random() * 1e6)

  return {
    id: id || `todo-${index}`,
    label: `test task #${index}`,
    completed: !!(index % 2),
    order: index,
  }
}

describe('store/todo.ts', () => {
  it('should have clean initial state', () => {
    const cleanState: State = { todos: {} }
    expect(state()).toEqual(cleanState)
  })
})

describe('store/todo.ts mutations', () => {
  const { setTodos, setTodo, removeTodo } = mutations

  it('setTodos should replace all todo items', () => {
    const mutableState = state()
    setTodos(mutableState, todos)
    expect(mutableState).toEqual(finalState)
  })

  it('setTodo should add or replace single todo item', () => {
    const mutableState = state()
    const todoFoo = createMockedTodo('todo-foo')
    const todoBarA = createMockedTodo('todo-bar')
    const todoBarB = createMockedTodo('todo-bar')

    setTodo(mutableState, todoFoo)
    expect(mutableState).toEqual({
      todos: entitify([todoFoo]),
    })

    setTodo(mutableState, todoBarA)
    expect(mutableState).toEqual({
      todos: entitify([todoFoo, todoBarA]),
    })

    setTodo(mutableState, todoBarB)
    expect(mutableState).toEqual({
      todos: entitify([todoFoo, todoBarB]),
    })
  })

  it('removeTodo should remove single todo item', () => {
    const mutableState = state()
    const todoFoo = createMockedTodo('todo-foo')
    const todoBar = createMockedTodo('todo-bar')
    const todoBaz = createMockedTodo('todo-baz')

    setTodos(mutableState, [todoFoo, todoBar, todoBaz])
    expect(mutableState).toEqual({
      todos: entitify([todoFoo, todoBar, todoBaz]),
    })

    removeTodo(mutableState, todoBar)
    expect(mutableState).toEqual({
      todos: entitify([todoFoo, todoBaz]),
    })
  })
})

describe('store/todo.ts actions', () => {
  const { createTodo, deleteTodo } = actions as any

  it('createTodo should commit new todo item', () => {
    const commit = jest.fn()
    const todoFoo = createMockedTodo('todo-foo')

    createTodo({ state: state(), commit }, todoFoo)

    expect(commit).toBeCalled()
    expect(commit.mock.calls[0][0]).toEqual('setTodo')
    expect(commit.mock.calls[0][1]).toBeTruthy()
  })

  it('deleteTodo should commit todo item remove', () => {
    const commit = jest.fn()
    const todoFoo = createMockedTodo('todo-foo')

    deleteTodo({ state: state(), commit }, todoFoo)

    expect(commit).toBeCalled()
    expect(commit).toBeCalledWith('removeTodo', todoFoo)
  })
})

describe('store/todo.ts getters', () => {
  const { getAllTodos } = getters as any

  it('getAllTodos should return sorted array of todos', () => {
    const emptyTodos = getAllTodos(state())
    expect(emptyTodos).toEqual([])

    const allTodos = getAllTodos(finalState)
    expect(allTodos).toEqual(todos)
  })
})
