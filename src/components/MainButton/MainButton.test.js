import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MainButton from './MainButton'

configure({ adapter: new Adapter() })

test('Renders correctly, expect onpress to be defined, but not called', () => {
  const defaultProps = {
    navigation: { navigate: jest.fn() },
    onPress: jest.fn(),
    resetStack: false,
    routeName: 'HomeScreen',
    title: 'Open HomeScreen'
  }
  const wrapper = shallow(<MainButton
    {...defaultProps}
  />)
  expect(wrapper).toMatchSnapshot()
})
