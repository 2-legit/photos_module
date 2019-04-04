/**
 * Reducer test script
 * Tests reducers for use with Redux stores
 */

import photoApp from '../../client/src/reducers/index';
import actionCreators from '../../client/src/actionCreators/index';
import initialState from '../../client/src/reducers/initialState';

// Destructure action creator functions from actionCreators
const { checkWidth, focusImage, defocusAll, toggleModal, modalSelect } = actionCreators;

// Create a function to produce a state object with properties mapped to arguments
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
  // test: should set state to initial state if state is undefined
  test('should set state to initial state if state is undefined', () => {
    // pass into photoApp null
    const newState = photoApp();
    // assert that the return value and the initialState are deeply equal
    expect(newState).toEqual(initialState);
  });

  // test: should return the input state if no actions were taken
  test('should return the input state if no actions were taken', () => {
    // create a working state object
    const workingState = mockState([{}], 'FULLSIZE', 0, false, 'NONE');
    // pass into photoApp a working state and null
    const newState = photoApp(workingState, null);
    // assert that the return value and declared state object are the same object
    expect(newState).toBe(workingState);
  });

  // test: should return previous state if reducer was passed an invalid action
  test('should return previous state if reducer was passed an invalid action', () => {
    // create a working state object
    const workingState = mockState([{}], 'FULLSIZE', 0, false, 'NONE');
    // pass into photoApp a working state and an invalid action object
    const newState = photoApp(workingState, { type: 'INVALID', payload: 'oops' });
    // assert that the return value and declared state object are the same object
    expect(newState).toBe(workingState);
  });

  // test: should not mutate the input state
  test('should not mutate the input state', () => {
    // create a working state object
    const workingState = mockState([{}], 'FULLSIZE', 0, false, 'NONE');
    // pass into photoApp a working state and a valid action object
    const newState = photoApp(workingState, { type: 'DEFOCUS_ALL' });
    // assert that the return value and the declared state object are not the same object
    expect(newState).not.toBe(workingState);
  });

});

// Describe: mainDisplay

  // Describe: CHECK_WIDTH
    // test: should save to state 'FULLSIZE' for widths greater than 1200px
      // change window.innerWidth to a resolution greater than 1200px
      // invoke action creator for CHECK_WIDTH
      // pass into photoApp the initial state and action
      // assert that the new state's property is equal to 'FULLSIZE'

    // test: should save to state 'MIDSIZE' for widths between 1200px and 750px
      // change window.innerWidth to a resolution between 1200px and 750px
      // invoke action creator for CHECK_WIDTH
      // pass into photoApp the initial state and action
      // assert that the new state's property is equal to 'MIDSIZE'

    // test: should save to state 'COMPACT' for widths less than 750px
      // change window.innerWidth to a resolution less than 750px
      // invoke action creator for CHECK_WIDTH
      // pass into photoApp the initial state and action
      // assert that the new state's property is equal to 'COMPACT'

  // Describe: FOCUS_IMAGE
    // test: should save to state (index) when given payload (index)
      // create a variable to hold the desired index
      // invoke action creator for FOCUS_IMAGE with the created variable
      // pass into photoApp a valid state and the created action
      // assert that the new state's property is equal to the index passed

    // test: should only work for integers between 0 and 4 for displayMode 'FULLSIZE'
      // create a variable to hold an index between 0 and 4
      // create an action object of FOCUS_IMAGE with index 4
      // pass into photoApp a state object and the action object
      // assert that the new state's property is equal to 4

      // create a variable to hold an index of 9
      // create an action object of FOCUS_IMAGE
      // pass into photoApp a state object and the action object
      // assert that the new state's property is equal to 'NONE'

    // test: should only work for integers between 0 and 2 for displayMode 'MIDSIZE'
      // create a variable to hold an index of 2
      // create an action object of FOCUS_IMAGE with index 2
      // pass into photoApp a state object and the action object
      // assert that the new state's property is equal to 2

      // create a variable to hold an index of 4
      // create an action object of FOCUS_IMAGE
      // pass into photoApp a state object and the action object
      // assert that the new state's property is equal to 'NONE'

    // test: should not work for displayMode 'COMPACT'
      // create a variable to hold an index of 2
      // create an action object of FOCUS_IMAGE with index 2
      // pass into photoApp a state object and the action object
      // assert that the new state's property is equal to 'NONE'

  // Describe: DEFOCUS_ALL
    // test: should save to state 'NONE' when given DEFOCUS_ALL action
      // create an action object of DEFOCUS_ALL
      // pass into photoApp a state object and the action object
      // assert that the new state's property is equal to 'NONE'

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
