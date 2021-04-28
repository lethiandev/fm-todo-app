import { ActionTree, GetterTree, MutationTree } from 'vuex'
import entitify from '@/utils/entitify'
import Todo from '@/models/Todo'

export interface State {
  todos: Record<string, Todo>
}

export type StateFactory = () => State

export const state: StateFactory = () => ({
  todos: {},
})

export const mutations: MutationTree<State> = {
  setTodos(state, todos: Todo[]) {
    state.todos = entitify(todos)
  },
  setTodo(state, todo: Todo) {
    state.todos = { ...state.todos, [todo.id]: todo }
  },
  removeTodo(state, todo: Todo) {
    const { [todo.id]: removed, ...rest } = state.todos
    state.todos = rest
  },
}

export const actions: ActionTree<State, State> = {
  createTodo({ state, commit }, todo: Todo) {
    // Simulate data coming from the server
    const id = `my-todo-${Math.floor(Math.random() * 1e6)}`
    const order = Object.values(state.todos).length
    commit('setTodo', { ...todo, id, order })
  },
  deleteTodo({ state, commit }, todo: Todo) {
    commit('removeTodo', todo)
  },
}

export const getters: GetterTree<State, State> = {
  getAllTodos(state) {
    const items = Object.values(state.todos)
    return items.sort((a, b) => a.order - b.order)
  },
}
