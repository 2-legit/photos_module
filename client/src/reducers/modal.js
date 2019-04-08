/**
 * modal.js
 * Reducer for actions concerned with affecting change to the fullscreen modal
 */

const initialState = {
  photos: [],
  onScreen: false,
  photo: 0,
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
        photo = 0;
      }
      newState = Object.assign({}, state, {
        onScreen,
        photo,
      });
      return newState;
    case 'MODAL_SELECT':
      if (action.photo === 'NEXT') {
        ({ photo } = state);
        if (state.photo < state.photos.length - 1) {
          photo += 1;
        }
      } else if (action.photo === 'PREV') {
        ({ photo } = state);
        if (state.photo > 0) {
          photo -= 1;
        }
      } else if (action.photo < state.photos.length && action.photo > 0) {
        ({ photo } = action);
      } else {
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
