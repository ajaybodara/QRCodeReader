/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

it('renders correctly with defaults', () => {
  const button = renderer
    .create(<App/>)
    .toJSON();
  expect(button).toMatchSnapshot();
});