import { shallowMount } from '@vue/test-utils'
import VCard from '@/components/VCard.vue'

describe('VCard.vue', () => {
  it('should instance', () => {
    const wrapper = shallowMount(VCard)
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.classes()).toEqual(['card'])
  })

  it('should render given content', () => {
    const textNode = 'Hello, world from test!'
    const wrapper = shallowMount(VCard, {
      slots: { default: textNode },
    })

    expect(wrapper.text()).toEqual(textNode)
  })
})
