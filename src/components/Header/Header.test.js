import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

configure({ adapter: new Adapter() })

test('Renders correctly, expect onpress to be defined, but not called', () => {
  const defaultProps = {
    title: 'Header'
  }
  const wrapper = shallow(<Header
    {...defaultProps}
  />)
  expect(wrapper).toMatchSnapshot()
})
