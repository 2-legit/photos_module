/**
 * Client test script
 * Tests client functionality in a window-like environment with Enzyme testing suite
 */

import React from 'react';
import { shallow } from 'enzyme';

import App from '../../client/src/components/App';

describe('App component', () => {
  test('should contain text', () => {
    const element = shallow(<App />);

    expect(element).not.toBe(null);
    expect(element.text()).toBe('Hello world!');
  });
});
