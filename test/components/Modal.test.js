/**
 * Modal component and subcomponent test file
 * Tests the fullscreen modal component for functionality and content
 */

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { ModalRaw as Modal } from '../../client/src/components/modal/Modal.jsx';
import { PhotoReelRaw as PhotoReel } from '../../client/src/components/modal/PhotoReel.jsx';
import {
  Close,
  Next,
  Prev,
  PhotoNav,
} from '../../client/src/components/modal/Buttons.jsx';

import testPhotoData from '../../data/testPhotoData';

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
      expect(wrapper.props()).toHaveProperty('id', 'photo-5');
    });

    test('should have an href pointing to itself', () => {
      const wrapper = shallow(<PhotoNav photo={5} />);
      expect(wrapper.parent.props()).toHaveProperty('href', '#photo-5');
    });
  });
});

describe('photo reel component', () => {
  test('should have specific subcomponents', () => {
    const wrapper = shallow(<PhotoReel photos={[]}/>);
    expect(wrapper.find('FlexRow')).toHaveLength(1);
    expect(wrapper.find('Next')).toHaveLength(1);
    expect(wrapper.find('ScrollBox')).toHaveLength(1);
    expect(wrapper.find('Prev')).toHaveLength(1);
  });

  test('should dynamically render PhotoNav components', () => {
    const target = testPhotoData.length;
    const wrapper = shallow(<PhotoReel photos={testPhotoData}/>);
    expect(wrapper.find('PhotoNav')).toHaveLength(target);
  });
});

describe('modal component', () => {
  test('should have specific subcomponents', () => {
    const wrapper = shallow(<Modal photos={testPhotoData} />);
    expect(wrapper.find('Fullscreen')).toHaveLength(1);
    expect(wrapper.find('FlexColumn')).toHaveLength(1);
    expect(wrapper.find('Close')).toHaveLength(1);
    expect(wrapper.find('PhotoWrapper')).toHaveLength(1);
    expect(wrapper.find('Description')).toHaveLength(1);
  });
});
