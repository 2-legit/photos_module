/**
 * Reducer test script
 * Tests reducers for use with Redux stores
 */

import photoApp from '../../client/src/reducers/index';
import actionCreators from '../../client/src/actionCreators/index';
import initialState from '../../client/src/reducers/initialState';

const { checkWidth, focusImage, defocusAll, toggleModal, modalSelect } = actionCreators;

function mockState(photos, displayMode, inFocus, modal, modalDisplay) {
  const state = {
    mainDisplay: {
      photos: photos || [],
      displayMode: displayMode || 'COMPACT',
      inFocus: inFocus || 'NONE',
    },
    modal: {  
      modal: typeof modal === Boolean ? modal : false,
      modalDisplay: modalDisplay || 'NONE',
    },
  }
  return state;
}

// Describe: default reducer behaviors
describe('default reducer behaviors', () => {
  test('should set state to initial state if state is undefined', () => {
    const newState = photoApp();
    expect(newState).toEqual(initialState);
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
      let newState = photoApp(undefined, FOCUS_IMAGE);
      expect(newState.mainDisplay.inFocus).toEqual(index);
    });

    
    test('should only work for integers between 0 and 4 for displayMode \'FULLSIZE\'', () => {
      window.innerWidth = 1600;
      let CHECK_WIDTH = checkWidth();
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
      let CHECK_WIDTH = checkWidth();
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
      const index = 2;
      const FOCUS_IMAGE = focusImage(index);
      let newState = photoApp(undefined, CHECK_WIDTH);
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

// Describe: modal

  // Describe: TOGGLE_MODAL
    // test: should save to state an index if passed a number
      // create an action object TOGGLE_MODAL with index (number)
      // pass into photoApp a state object and the action object
      // assert that the new state's property is equal to index

    // test: should default to 0 if the payload is invalid
      // create an action object TOGGLE_MODAL with null
      // pass into photoApp a state object and the action object
      // assert that the new state's property is equal to 0

    // test: should toggle state boolean property
      // create an action object TOGGLE_MODAL with null
      // save a declared varable equal to the state's target property
      // pass into photoApp a state object and the action object
      // assert that the state's target property is a boolean
      // assert that the state's target property is not equal to the declared variable
      // save the target property's value to the declared variable
      // pass into photoApp the new state object and the same action object
      // assert that the state's target property is not equal to the declared variable


  // Describe: MODAL_SELECT
    // test: should set modalDisplay to the specified index when given a number
      // create an action object MODAL_SELECT with index (number)
      // pass into photoApp a state object and the action object
      // assert that the state's target property is equal to the index

    // test: should only work for numbers between 0 and photos.length - 1
      // create an action object MODAL_SELECT with an index greater than photos.length - 1
      // pass into photoApp a state object and the action object
      // assert that the state's target property is equal to 0

    // test: should increment modalDisplay when given 'NEXT'
      // create an action object MODAL_SELECT with a string 'NEXT'
      // pass into photoApp a state object and the action object
      // assert that the state's target property is greater than the previous state's property by 1

    // test: should decrement modalDisplay when given 'PREV'
      // create an action object MODAL_SELECT with a string 'NEXT'
      // pass into photoApp a state object and the action object
      // assert that the state's target property is less than the previous state's property by 1

    // test: should not increment outside numbers 0 and the index of the last photo
      // create an action object MODAL_SELECT with a string 'PREV'
      // pass into photoApp a state object with the index set to 0 and the action object
      // assert that the state's target property is 0

      // create an action object MODAL_SELECT with a string 'NEXT'
      // pass into photoApp a state object with the index set to photos.length-1 and the action object
      // assert that the state's target property is photos.length-1
