/**
 * modal.js
 * Reducer for actions concerned with affecting change to the fullscreen modal
 */

// TODO:
// Write a reducer that accepts the following actions and handles them accordingly:

// TOGGLE_MODAL
// payload: [display (Number)]
// affects: modalDisplay: {|0 - state.photos.length-1|}

// MODAL_SELECT
// payload: [display (Number|String)]
// affects: modalDisplay: {|0 - state.photos.length-1|}
// conditions:
  // (Number) must be between 0 and photos.length - 1
  // (String) must be 'NEXT' or 'PREV'