import { createLogger, createStore, Plugin } from 'vuex'
import * as todo from './todo'

export const plugins: Plugin<todo.State>[] =
  process.env.NODE_ENV === 'production' ? [] : [createLogger()]

export default createStore<todo.State>({
  ...todo,
  plugins,
})
