/**
 * Main display component and subcomponent test file
 * Tests MainDisplay container component as well as subcomponents
 */

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

// import MainDisplay from '../../client/src/components/mainDisplay/MainDisplay.jsx';

import PhotoWrapper from '../../client/src/components/mainDisplay/PhotoWrapper';
// import PhotoWrapperColumn from '../../client/src/components/mainDisplay/PhotoWrapperColumn';

// import photos from '../../data/testPhotoData.js';

describe('photo-wrapper component', () => {
  test('should have exactly one img tag as its child', () => {
    const wrapper = shallow(<PhotoWrapper url={"https://some.website.org"} />);

    expect(wrapper.find('img')).toHaveLength(1);
  });

  test('should have a url prop', () => {
    const url = "https://not.arealweb.site";

    const wrapper = shallow(<PhotoWrapper url={url} />);

    expect(wrapper.find('img').props('url')).toEqual({ "src": url });
  });

  test('should invoke a handler onClick', () => {
    const onPhotoClick = sinon.spy();
    const wrapper = shallow(<PhotoWrapper onPhotoClick={onPhotoClick} />);
    wrapper.find('img').simulate('click');
    expect(onPhotoClick).toHaveProperty('callCount', 1);
  });

  test('should invoke a handler onMouseEnter', () => {
    const onPhotoHover = sinon.spy();
    const wrapper = shallow(<PhotoWrapper onPhotoHover={onPhotoHover} />);
    wrapper.find('img').simulate('mouseenter');
    expect(onPhotoHover).toHaveProperty('callCount', 1);
  });

  test('should invoke a handler onMouseLeave', () => {
    const onPhotoLeave = sinon.spy();
    const wrapper = shallow(<PhotoWrapper onPhotoLeave={onPhotoLeave} />);
    wrapper.find('img').simulate('mouseleave');
    expect(onPhotoLeave).toHaveProperty('callCount', 1);
  });
});

describe('photo-wrapper-column component', () => {
  test('should render children when passed in', () => {});

  test('should collapse from view when matching to key', () => {});
});

describe('main display component', () => {
  test('should render child components', () => {});

  test('should change display mode when resizing window', () => {});

  test('should pass down five photos in sequence', () => {});
});
