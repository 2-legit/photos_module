/**
 * Modal component and subcomponent test file
 * Tests the fullscreen modal component for functionality and content
 */

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

// import Modal from '../../client/src/components/modal/Modal.jsx';
// import PhotoReel from '../../client/src/components/modal/PhotoReel.jsx';
import { Close, Next, Prev, PhotoNav } from '../../client/src/components/modal/Buttons.jsx';

// import photos from '../../data/testPhotoData.js';

describe('buttons', () => {
  describe('close button', () => {
    test('should invoke a handler on click', () => {
      const onButtonClick = sinon.spy();
      const wrapper = shallow(<Close onButtonClick={onButtonClick} />);
      wrapper.simulate('click');
      expect(onButtonClick).toHaveProperty('callCount', 1);
    });
  });

  describe('next button', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Next photo={5} onButtonClick={onButtonClick} />);
    wrapper.simulate('click');

    test('should invoke a handler on click', () => {
      expect(onButtonClick).toHaveProperty('callCount', 1);
    });

    test('should point to the next photo', () => {
      expect(onButtonClick.calledWith('NEXT')).toBe(true);
    });
  });

  describe('prev button', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Prev photo={5} onButtonClick={onButtonClick} />);
    wrapper.simulate('click');

    test('should invoke a handler on click', () => {
      expect(onButtonClick).toHaveProperty('callCount', 1);
    });

    test('should point to the previous photo', () => {
      expect(onButtonClick.calledWith('PREV')).toBe(true);
    });
  });

  describe('photo nav button', () => {
    test('should invoke a handler on click', () => {
      const onButtonClick = sinon.spy();
      const wrapper = shallow(<PhotoNav onButtonClick={onButtonClick} />);
      wrapper.simulate('click');
      expect(onButtonClick).toHaveProperty('callCount', 1);
    });

    test('should have an img tag', () => {
      const wrapper = shallow(<PhotoNav />);
      expect(wrapper.find('img')).toHaveLength(1);
    });

    test('should have an id set to the `photo` prop', () => {
      const wrapper = shallow(<PhotoNav photo={5} />);
      expect(wrapper.props()).toHaveProperty('id', 'nav-5')
    });

    test('should have an href pointing to itself', () => {
      const wrapper = shallow(<PhotoNav photo={5} />);
      expect(wrapper.props()).toHaveProperty('href', '#nav-5');
    });
  });
});

xdescribe('photo reel component', () => {});

xdescribe('modal component', () => {});