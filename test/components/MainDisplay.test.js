/**
 * Main display component and subcomponent test file
 * Tests MainDisplay container component as well as subcomponents
 */

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MainDisplay from '../../client/src/components/mainDisplay/MainDisplay.jsx';
import PhotoWrapper from '../../client/src/components/mainDisplay/PhotoWrapper';
import PhotoWrapperCol from '../../client/src/components/mainDisplay/PhotoWrapperCol';

import testPhotoData from '../../data/testPhotoData';

describe('photo-wrapper component', () => {
  test('should have exactly one img tag as its child', () => {
    const wrapper = shallow(<PhotoWrapper />);

    expect(wrapper.find('img')).toHaveLength(1);
  });

  test('should have an imageurl prop', () => {
    const imageurl = 'https://not.arealweb.site';

    const wrapper = shallow(<PhotoWrapper imageurl={imageurl} />);

    expect(wrapper.find('img').props()).toHaveProperty('src', imageurl);
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

  test('should have styling for the child node', () => {
    const styles = { width: '100%', height: '100%', objectFit: 'cover' };

    const wrapper = shallow(<PhotoWrapper />);

    expect(wrapper.find('img').props()).toHaveProperty('style', styles);
  });

  test('should have a styled component', () => {
    const wrapper = shallow(<PhotoWrapper inFocus={'NONE'} id={4} />);
    expect(wrapper.find('StyledWrapper')).toHaveLength(1);
  });

  test('should adapt styling based on props', () => {
    let wrapper = shallow(<PhotoWrapper inFocus={'NONE'} id={4} />);
    expect(wrapper.props()).toHaveProperty('inFocus', 'NONE');

    wrapper = shallow(<PhotoWrapper inFocus={2} id={4} />);
    expect(wrapper.props()).toHaveProperty('inFocus', 2);
  });
});

describe('photo-wrapper-column component', () => {
  test('should render children when passed in', () => {
    const wrapper = shallow(
      <PhotoWrapperCol>
        <div>Hello</div>
        <div>world!</div>
      </PhotoWrapperCol>,
    );
    expect(wrapper.find('Column').children()).toHaveLength(2);
  });

  test('should collapse from view when matching to order', () => {
    let wrapper = shallow(<PhotoWrapperCol order={2} displayMode={2} />);
    expect(wrapper.props()).toHaveProperty('displayMode', 2);

    wrapper = shallow(<PhotoWrapperCol order={2} displayMode={1} />);
    expect(wrapper.props()).toHaveProperty('displayMode', 1);
  });
});

describe('main display component', () => {
  const images = testPhotoData.map(image => image.imageurl).slice(0, 5);

  test('should render child components', () => {
    const wrapper = shallow(<MainDisplay photos={images}/>);

    expect(wrapper.find('PhotoWrapperCol')).toHaveLength(2);
    expect(wrapper.find('PhotoWrapper')).toHaveLength(5);
  });

  test('should change display mode when resizing window', () => {
    const onResize = sinon.spy();
    const wrapper = shallow(<MainDisplay photos={images} onResize={onResize}/>);

    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    expect(onResize).toHaveProperty('callCount', 1);
  });

  test('should pass down image urls to photowrappers', () => {
    const url = images[0];
    const wrapper = shallow(<MainDisplay photos={images} />);

    const allPhotoWrappers = wrapper.find('PhotoWrapper');
    allPhotoWrappers.forEach((node) => {
      expect(node.props()).toHaveProperty('imageurl', url);
    });
  });
});
