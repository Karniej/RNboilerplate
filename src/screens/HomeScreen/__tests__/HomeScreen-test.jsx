import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../HomeScreen';

test('Renders correctly, expect onpress to be defined, but not called', () => {
  const navigation = { navigate: jest.fn() };
  const onPress = jest.fn();
  expect(onPress).toBeDefined();
  expect(onPress).not.toBeCalled();
  expect(onPress).not.toBeCalled();
  expect(onPress).not.toBeCalled();
  expect(renderer.create(<HomeScreen navigation={navigation} onPress={onPress} />).toJSON()).toMatchSnapshot();
});
