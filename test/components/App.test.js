/**
 * Client test script
 * Tests client functionality in a window-like environment with Enzyme testing suite
 */

import React from 'react';
import { shallow } from 'enzyme';

test('should have access to document object', () => {
  expect(typeof document).toBe('object');
});

test('should have access to enzyme', () => {
  expect(typeof shallow).toBe('function');
});

test('should be able to mock-render jsx expressions', () => {
  const element = shallow(<h1>Hello world!</h1>);

  expect(element).not.toBe(null);
  expect(element.text()).toBe("Hello world!");
});
