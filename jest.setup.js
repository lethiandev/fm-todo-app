import { config } from '@vue/test-utils'

// Currently vue-jest doesn't support css modules
// Define proxy handler for $style object to mock the selectors
const get = (target, propName) => propName

config.global.mocks = config.global.mocks || {}
config.global.mocks.$style = new Proxy({}, { get })
