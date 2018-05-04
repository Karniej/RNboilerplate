import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomeScreen from '../HomeScreen';

configure({ adapter: new Adapter() });

test('Renders correctly, expect onpress to be defined, but not called', () => {
  const navigation = { navigate: jest.fn() };
  const onPress = jest.fn();
  const wrapper = shallow(<HomeScreen navigation={navigation} onPress={onPress} />);
  expect(onPress).toBeDefined();
  expect(onPress).not.toBeCalled();
  expect(wrapper).toMatchSnapshot();
});
