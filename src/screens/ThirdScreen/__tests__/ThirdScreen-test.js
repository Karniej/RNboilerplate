import 'react-native';
import React from 'react';
import ThirdScreen from '../ThirdScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const navigation = { navigate: jest.fn() };
  const onPress = jest.fn();
  expect(onPress).toBeDefined();
  expect(onPress).not.toBeCalled();
  const tree = renderer.create(<ThirdScreen navigation={navigation} onPress={onPress} />).toJSON();
  expect(tree).toMatchSnapshot();
});
