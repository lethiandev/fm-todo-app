import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

test('App should instance', () => {
  const wrapper = shallowMount(App)
  expect(wrapper.exists()).toBeTruthy()
})
