import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LoginScreen from '../LoginScreen'

configure({ adapter: new Adapter() })

test('Renders correctly, expect onpress to be defined, but not called', () => {
  const defaultProps = {
    navigation: { navigate: jest.fn() }
  }
  const wrapper = shallow(<LoginScreen
    {...defaultProps}
  />)
  expect(wrapper).toMatchSnapshot()
})
