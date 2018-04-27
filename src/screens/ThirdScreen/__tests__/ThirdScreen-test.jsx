import renderer from 'react-test-renderer';
import React from 'react';
import ThirdScreen from '../ThirdScreen';

test('renders correctly', () => {
  const navigation = { navigate: jest.fn() };
  const onPress = jest.fn();
  expect(onPress).toBeDefined();
  expect(onPress).not.toBeCalled();
  const tree = renderer.create(<ThirdScreen navigation={navigation} onPress={onPress} />).toJSON();
  expect(tree).toMatchSnapshot();
});
