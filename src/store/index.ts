import { createLogger, createStore, Plugin } from 'vuex'
import * as todo from './todo'

export type State = todo.State

export const plugins: Plugin<State>[] =
  process.env.NODE_ENV === 'production' ? [] : [createLogger()]

export default createStore<State>({
  ...todo,
  plugins,
})
