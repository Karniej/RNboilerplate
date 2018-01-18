import 'react-native';
import React from 'react';
import HomeScreen from '../HomeScreen';

import renderer from 'react-test-renderer';

test('Renders correctly, expect onpress to be defined, but not called', () => {
  const navigation = { navigate: jest.fn() };
  const onPress = jest.fn();
  expect(onPress).toBeDefined();
  expect(onPress).not.toBeCalled();
  expect(renderer.create(<HomeScreen navigation={navigation} onPress={onPress} />).toJSON()).toMatchSnapshot();
});
