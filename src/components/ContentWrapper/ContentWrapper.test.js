import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ContentWrapper from './ContentWrapper'

configure({ adapter: new Adapter() })

test('Renders correctly, expect onpress to be defined, but not called', () => {
  const defaultProps = {
    children: {}
  }
  const wrapper = shallow(<ContentWrapper
    {...defaultProps}
  />)
  expect(wrapper).toMatchSnapshot()
})
