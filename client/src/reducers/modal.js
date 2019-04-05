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

      // if action.photo is 'NEXT' && state.photo > 0...
      if (action.photo === 'NEXT') {
        // save the value of the state property to variable `photo`
        ({ photo } = state);
        // state.photo is less than state.photos.length - 1, increment photo by one
        if (state.photo < state.photos.length - 1) {
          photo += 1;
        }
      // else if action.photo is 'PREV' && state.photo < state.photos.length...
      } else if (action.photo === 'PREV') {
        // save the vavlue of the state property to variable `photo`
        ({ photo } = state);
        // decrement photo by one
        if (state.photo > 0) {
          photo -= 1;
        }
      // else if action.photo < state.photos.length && action.photo > 0...
      } else if (action.photo < state.photos.length && action.photo > 0) {
        // destructure the photo property of the action object
        ({ photo } = action);
      // else
      } else {
        // save 0 to photo
        photo = 0;
      }

      newState = Object.assign({}, state, {
        photo,
      });
      return newState;
    default:
      return state;
  }
}

export default modal;
