import { createLogger, createStore } from 'vuex'
import entitify from '@/utils/entitify'
import Todo from '@/models/Todo'

export interface State {
  todos: Record<string, Todo>
}

export default createStore<State>({
  state: {
    todos: {},
  },
  mutations: {
    setTodos(state, todos: Todo[]) {
      state.todos = entitify(todos)
    },
  },
  actions: {},
  getters: {
    getAllTodos(state) {
      const items = Object.values(state.todos)
      return items.sort((a, b) => a.order - b.order)
    },
  },
  modules: {},
  plugins: [createLogger()],
})
