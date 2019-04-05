/**
 * modal.js
 * Reducer for actions concerned with affecting change to the fullscreen modal
 */

// TODO:
// Write a reducer that accepts the following actions and handles them accordingly:

const initialState = {
  photos: [],
  onScreen: false,
  photo: 'NONE',
};

function modal(state = initialState, action) {
  const TYPE = action !== undefined && action !== null ? action.type : 'INVALID';

  let newState;
  let photos;
  let onScreen;
  let photo;

  switch (TYPE) {
    case 'ADD_PHOTOS':
      photos = action.photos.slice();
      newState = Object.assign({}, state, {
        photos,
      });
      return newState;
    case 'TOGGLE_MODAL':
    // payload: [display (Number)]
    // affects: modalDisplay: {|0 - state.photos.length-1|}
      onScreen = !state.onScreen;

      if (onScreen === true) {
        if (action.photo > 0 && action.photo < state.photos.length) {
          ({ photo } = action);
        } else {
          photo = 0;
        }
      } else {
        photo = 'NONE';
      }

      newState = Object.assign({}, state, {
        onScreen,
        photo,
      });
      return newState;
    case 'MODAL_SELECT':
    // payload: [display (Number|String)]
    // affects: modalDisplay: {|0 - state.photos.length-1|}
    // conditions:
    // (Number) must be between 0 and photos.length - 1
    // (String) must be 'NEXT' or 'PREV'
      return state;
    default:
      return state;
  }
}

export default modal;
