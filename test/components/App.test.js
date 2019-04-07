/**
 * Main App test file
 * Tests App container component functionality and prop chaining
 */

import React from 'react';
import { shallow } from 'enzyme';

import App from '../../client/src/components/App';

describe('App component', () => {
  test('should contain a MainDisplay component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('MainDisplay')).toHaveLength(1);
  });

  xtest('should contain a Modal component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Modal')).toHaveLength(1);
  });
});
