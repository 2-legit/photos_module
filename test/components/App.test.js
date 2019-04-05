/**
 * Main App test file
 * Tests App container component functionality and prop chaining
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
