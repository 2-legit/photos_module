/**
 * Reducer test script
 * Tests reducers for use with Redux stores
 */

// import photoApp from '../../client/reducers/index';
// import actionCreators from '../../client/actionCreators/index';

// Create an initialState object to be the initial state

// Describe: default reducer behaviors
  // test: should set state to initial state if state is undefined
    // pass into photoApp null and an action
    // assert that the return value and the initialState have the same shape
    // assert that the return value and the initialState hold the same values

  // test: should return previous state if reducer was passed an invalid action
    // pass into photoApp a working state and an invalid action object
    // assert that the return value and declared state object are the same object
    // assert that the return value and declared state object have the same values

  // test: must not mutate the input state
    // pass into photoApp a working state and a valid object
    // assert that the return value and the declared state object are not the same object

  // test: returns the input state only if no actions were taken
    // pass into photoApp a working state and null
    // assert that the return value and declared state object are the same object

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
    // test: should save to state (display)

    // test: should toggle state boolean property


  // Describe: MODAL_SELECT
    // test: should save to state (display)

    // test: should set modalDisplay to the specified number when given a number

    // test: should only work for numbers between 0 and photos.length - 1

    // test: should increment modalDisplay when given 'NEXT'

    // test: should decrement modalDisplay when given 'PREV'

    // test: should not increment outside numbers 0 and the index of the last photo
