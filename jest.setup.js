import { config } from '@vue/test-utils'

// Currently vue-jest doesn't support css modules
// Define proxy handler for $style object to mock the selectors
const get = (target, propName) => propName
const mock$style = new Proxy({}, { get })

config.global.mocks = config.global.mocks || {}
config.global.mocks.$style = mock$style
