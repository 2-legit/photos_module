/**
 * Reducer test script
 * Tests reducers for use with Redux stores
 */

import photoApp from '../../client/src/reducers/index';
import actionCreators from '../../client/src/actionCreators/index';

const {
  addPhotos, checkWidth, focusImage, defocusAll, toggleModal, modalSelect,
} = actionCreators;

function mockState(photos, displayMode, inFocus, modal, photo) {
  const state = {
    mainDisplay: {
      photos: photos !== undefined ? photos.slice(0, 5) : [],
      displayMode: displayMode || 'FULLSIZE',
      inFocus: inFocus || 'NONE',
    },
    modal: {
      photos: photos !== undefined ? photos.slice() : [],
      onScreen: typeof modal === 'boolean' ? modal : false,
      photo: typeof photo === 'number' ? photo : 'NONE',
    },
  };
  return state;
}

describe('default reducer behaviors', () => {
  test('should set state to initial state if state is undefined', () => {
    const newState = photoApp();
    expect(newState).toEqual(mockState());
  });

  test('should return the input state if no actions were taken', () => {
    const workingState = mockState([{}], 'FULLSIZE', 0, false, 'NONE');
    const newState = photoApp(workingState, null);
    expect(newState).toBe(workingState);
  });

  test('should return previous state if reducer was passed an invalid action', () => {
    const workingState = mockState([{}], 'FULLSIZE', 0, false, 'NONE');
    const newState = photoApp(workingState, { type: 'INVALID', payload: 'oops' });
    expect(newState).toBe(workingState);
  });

  test('should not mutate the input state', () => {
    const workingState = mockState([{}], 'FULLSIZE', 0, false, 'NONE');
    const newState = photoApp(workingState, { type: 'DEFOCUS_ALL' });
    expect(newState).not.toBe(workingState);
  });
});

describe('mainDisplay', () => {
  describe('ADD_PHOTOS', () => {
    test('should save to state an array of photo objects', () => {
      const inputArray = [{}, {}, {}, {}, {}];
      const ADD_PHOTOS = addPhotos(inputArray);
      const newState = photoApp(undefined, ADD_PHOTOS);
      expect(newState.mainDisplay.photos.constructor).toBe(Array);
      expect(typeof newState.mainDisplay.photos[0]).toBe('object');
    });

    test('should not store an array of length greater than 5', () => {
      const ADD_PHOTOS = addPhotos(new Array(99));
      const newState = photoApp(undefined, ADD_PHOTOS);
      expect(newState.mainDisplay.photos.length).toBe(5);
    });

    test('should not store a reference to the input array', () => {
      const inputPhotos = new Array(99);
      const ADD_PHOTOS = addPhotos(inputPhotos);
      const newState = photoApp(undefined, ADD_PHOTOS);
      expect(newState.mainDisplay.photos).not.toBe(inputPhotos);
    });
  });

  describe('CHECK_WIDTH', () => {
    test('should save to state \'FULLSIZE\' for widths greater than 1200px', () => {
      window.innerWidth = 1300;
      const CHECK_WIDTH = checkWidth();
      const newState = photoApp(undefined, CHECK_WIDTH);
      expect(newState.mainDisplay.displayMode).toEqual('FULLSIZE');
    });

    test('should save to state \'MIDSIZE\' for widths between 1200px and 750px', () => {
      window.innerWidth = 1000;
      const CHECK_WIDTH = checkWidth();
      const newState = photoApp(undefined, CHECK_WIDTH);
      expect(newState.mainDisplay.displayMode).toEqual('MIDSIZE');
    });

    test('should save to state \'COMPACT\' for widths less than 750px', () => {
      window.innerWidth = 700;
      const CHECK_WIDTH = checkWidth();
      const newState = photoApp(undefined, CHECK_WIDTH);
      expect(newState.mainDisplay.displayMode).toEqual('COMPACT');
    });
  });


  describe('FOCUS_IMAGE', () => {
    test('should save the given number to the inFocus property', () => {
      const index = 3;
      const FOCUS_IMAGE = focusImage(index);
      const newState = photoApp(undefined, FOCUS_IMAGE);
      expect(newState.mainDisplay.inFocus).toEqual(index);
    });

    test('should only work for integers between 0 and 4 for displayMode \'FULLSIZE\'', () => {
      window.innerWidth = 1600;
      const CHECK_WIDTH = checkWidth();
      let newState = photoApp(undefined, CHECK_WIDTH);

      let index = 4;
      let FOCUS_IMAGE = focusImage(index);
      newState = photoApp(newState, FOCUS_IMAGE);
      expect(newState.mainDisplay.inFocus).toEqual(index);

      index = 9;
      FOCUS_IMAGE = focusImage(index);
      newState = photoApp(undefined, FOCUS_IMAGE);
      expect(newState.mainDisplay.inFocus).toEqual('NONE');
    });

    test('should only work for integers between 0 and 2 for displayMode \'MIDSIZE\'', () => {
      window.innerWidth = 1000;
      const CHECK_WIDTH = checkWidth();
      let newState = photoApp(undefined, CHECK_WIDTH);

      let index = 2;
      let FOCUS_IMAGE = focusImage(index);
      newState = photoApp(newState, FOCUS_IMAGE);
      expect(newState.mainDisplay.inFocus).toEqual(index);

      index = 4;
      FOCUS_IMAGE = focusImage(index);
      newState = photoApp(newState, FOCUS_IMAGE);
      expect(newState.mainDisplay.inFocus).toEqual('NONE');
    });

    test('should not work for displayMode \'COMPACT\'', () => {
      window.innerWidth = 700;
      const CHECK_WIDTH = checkWidth();
      let newState = photoApp(undefined, CHECK_WIDTH);

      const index = 2;
      const FOCUS_IMAGE = focusImage(index);
      newState = photoApp(newState, FOCUS_IMAGE);
      expect(newState.mainDisplay.inFocus).toEqual('NONE');
    });
  });

  describe('DEFOCUS_ALL', () => {
    test('should save to inFocus property \'NONE\'', () => {
      const DEFOCUS_ALL = defocusAll();
      const workingState = mockState([{}], 'FULLSIZE', 3, false, 'NONE');
      const newState = photoApp(workingState, DEFOCUS_ALL);
      expect(newState.mainDisplay.inFocus).toEqual('NONE');
    });
  });
});

describe('modal', () => {
  describe('ADD_PHOTOS', () => {
    test('should save to state an array of photos', () => {
      const inputArray = [{}, {}, {}, {}, {}, {}];
      const ADD_PHOTOS = addPhotos(inputArray);
      const newState = photoApp(undefined, ADD_PHOTOS);
      expect(newState.modal.photos.constructor).toBe(Array);
      expect(typeof newState.modal.photos[0]).toEqual('object');
    });

    test('should not store a reference to the input array', () => {
      const inputArray = new Array(99);
      const ADD_PHOTOS = addPhotos(inputArray);
      const newState = photoApp(undefined, ADD_PHOTOS);
      expect(newState.modal.photos).not.toBe(inputArray);
    });

    test('should have the same length as the input array', () => {
      const length = 99;
      const inputArray = new Array(length);
      const ADD_PHOTOS = addPhotos(inputArray);
      const newState = photoApp(undefined, ADD_PHOTOS);
      expect(newState.modal.photos.length).toEqual(length);
    });

    test('should be different from the photos array under mainDisplay', () => {
      const inputArray = new Array(20);
      const ADD_PHOTOS = addPhotos(inputArray);
      const newState = photoApp(undefined, ADD_PHOTOS);
      expect(newState.mainDisplay.photos.length).not.toBe(null);
      expect(newState.modal.photos.length).not.toBe(null);
      expect(newState.modal.photos).not.toBe(newState.mainDisplay.photos);
    });
  });

  describe('TOGGLE_MODAL', () => {
    test('should save to state an index if passed a number', () => {
      const workingState = mockState(new Array(10), 'FULLSIZE', 'NONE', false, 'NONE');
      const index = 1;
      const TOGGLE_MODAL = toggleModal(index);
      const newState = photoApp(workingState, TOGGLE_MODAL);
      expect(newState.modal.photo).toBe(index);
    });

    test('should default to 0 if no index was passed', () => {
      const TOGGLE_MODAL = toggleModal();
      const newState = photoApp(undefined, TOGGLE_MODAL);
      expect(newState.modal.photo).toBe(0);
    });

    test('should default to 0 if the index is not in the range of the photos property array', () => {
      const workingState = mockState(new Array(5), 'FULLSIZE', 'NONE', false, 'NONE');

      let TOGGLE_MODAL = toggleModal(1000);
      let newState = photoApp(workingState, TOGGLE_MODAL);
      expect(newState.modal.photo).toBe(0);

      TOGGLE_MODAL = toggleModal(-1000);
      newState = photoApp(workingState, TOGGLE_MODAL);
      expect(newState.modal.photo).toBe(0);
    });

    test('should set the photos property to \'NONE\' if toggling the modal off', () => {
      const workingState = mockState(new Array(5), 'FULLSIZE', 'NONE', true, 3);
      const TOGGLE_MODAL = toggleModal(3);
      const newState = photoApp(workingState, TOGGLE_MODAL);
      expect(newState.modal.photo).toBe('NONE');
    });

    test('should toggle state boolean property', () => {
      const TOGGLE_MODAL = toggleModal();

      let newState = photoApp(undefined, TOGGLE_MODAL);
      expect(newState.modal.onScreen).toBe(true);

      newState = photoApp(newState, TOGGLE_MODAL);
      expect(newState.modal.onScreen).toBe(false);
    });
  });

  describe('MODAL_SELECT', () => {
    test('should set photo property to the specified index when given a number', () => {
      const workingState = mockState(new Array(10), 'FULLSIZE', 'NONE', true, 0);
      const index = 5;
      const MODAL_SELECT = modalSelect(index);
      const newState = photoApp(workingState, MODAL_SELECT);
      expect(newState.modal.photo).toEqual(index);
    });

    test('should default to 0 when number is outside the range of photos property array', () => {
      const workingState = mockState(new Array(10), 'FULLSIZE', 'NONE', true, 0);

      let index = 1000;
      let MODAL_SELECT = modalSelect(index);
      let newState = photoApp(workingState, MODAL_SELECT);
      expect(newState.modal.photo).toEqual(0);

      index = -1000;
      MODAL_SELECT = modalSelect(index);
      newState = photoApp(workingState, MODAL_SELECT);
      expect(newState.modal.photo).toEqual(0);
    });

    test('should increment the photo property when given \'NEXT\'', () => {
      const workingState = mockState(new Array(10), 'FULLSIZE', 'NONE', true, 0);
      const MODAL_SELECT = modalSelect('NEXT');
      const newState = photoApp(workingState, MODAL_SELECT);
      expect(newState.modal.photo).toEqual(workingState.modal.photo + 1);
    });

    test('should decrement the photo property when given \'PREV\'', () => {
      const workingState = mockState(new Array(10), 'FULLSIZE', 'NONE', true, 9);
      const MODAL_SELECT = modalSelect('PREV');
      const newState = photoApp(workingState, MODAL_SELECT);
      expect(newState.modal.photo).toEqual(workingState.modal.photo - 1);
    });

    test('should not increment or decrement the photo property outside the photos array range', () => {
      let workingState = mockState(new Array(10), 'FULLSIZE', 'NONE', true, 9);
      let MODAL_SELECT = modalSelect('NEXT');
      let newState = photoApp(workingState, MODAL_SELECT);
      expect(newState.modal.photo).toEqual(workingState.modal.photos.length - 1);

      workingState = mockState(new Array(10), 'FULLSIZE', 'NONE', true, 0);
      MODAL_SELECT = modalSelect('PREV');
      newState = photoApp(workingState, MODAL_SELECT);
      expect(newState.modal.photo).toEqual(0);
    });
  });
});
