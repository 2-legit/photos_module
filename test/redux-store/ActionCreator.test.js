/**
 * Action Creator test script
 * Tests action creators for use with Redux stores
 */

import actionCreators from '../../client/src/actionCreators/index';

const { addPhotos, checkWidth, focusImage, defocusAll, toggleModal, modalSelect } = actionCreators;

describe('addPhotos', () => {
  
  test('should be a function', () => {
    expect(typeof addPhotos).toBe('function');
  });

  test('should return an action object', () => {
    const action = addPhotos([]);

    expect(typeof action).toBe('object');
    expect(action.type).toBe('ADD_PHOTOS');
  });

  test('should send an array of photo objects as the payload', () => {
    const action = addPhotos([]);

    expect(action.photos.constructor).toBe(Array);
  });

});

describe('checkWidth', () => {

  test('should be a function', () => {
    expect(typeof checkWidth).toBe('function');
  });

  test('should return an action object', () => {
    const action = checkWidth();

    expect(typeof action).toBe('object');
    expect(action.type).toBe('CHECK_WIDTH');
  });

  test('should send the window object\'s innerHeight property as the payload', () => {
    const action = checkWidth();

    expect(action.width).toEqual(window.innerWidth);
  });

});

describe('focusImage', () => {

  test('should be a function', () => {
    expect(typeof focusImage).toBe('function');
  });

  test('should return an action object', () => {
    const action = focusImage(0);

    expect(typeof action).toBe('object');
    expect(action.type).toBe('FOCUS_IMAGE');
  });

  test('should send the input index as the payload', () => {
    const action = focusImage(3);

    expect(action.viewpane).toEqual(3);
  });

});

describe('defocusAll', () => {

  test('should be a function', () => {
    expect(typeof defocusAll).toBe('function');
  });

  test('should return an action object', () => {
    const action = defocusAll();

    expect(typeof action).toBe('object');
    expect(action.type).toBe('DEFOCUS_ALL');
  });

});

describe('toggleModal', () => {

  test('should be a function', () => {
    expect(typeof toggleModal).toBe('function');
  });

  test('should return an action object', () => {
    const action = toggleModal(0);

    expect(typeof action).toBe('object');
    expect(action.type).toBe('TOGGLE_MODAL');
  });

  test('should send the photo index as the payload', () => {
    const action = toggleModal(3);

    expect(action.photo).toEqual(3);
  });

  test('should set 0 as the default value for its parameter', () => {
    const action = toggleModal();

    expect(action.photo).toEqual(0);
  });

});

describe('modalSelect', () => {

  test('should be a function', () => {
    expect(typeof modalSelect).toBe('function');
  });

  test('should return an action object', () => {
    const action = modalSelect(0);

    expect(typeof action).toBe('object');
    expect(action.type).toBe('MODAL_SELECT');
  });

  test('should take a photo index and send it as the payload', () => {
    const action = modalSelect(9);

    expect(action.photo).toEqual(9);
  });

  test('should send 0 by default if no index was passed', () => {
    const action = modalSelect();

    expect(action.photo).toEqual(0);
  });

  test('should be able to take a string and send it as the payload', () => {
    let action = modalSelect('NEXT');

    expect(action.photo).toEqual('NEXT');

    action = modalSelect('PREV');

    expect(action.photo).toEqual('PREV');
  });

});
