/**
 * mainDisplay.js
 * Reducer for actions concerned with affecting change to the main display
 */

const initialState = {
  photos: [],
  displayMode: 'FULLSIZE',
  inFocus: 'NONE',
};

function mainDisplay(state = initialState, action) {
  const TYPE = action !== undefined && action !== null ? action.type : 'INVALID';

  let newState;
  let displayMode;
  let inFocus;

  switch (TYPE) {
    case 'CHECK_WIDTH':
      if (action.width >= 1200) {
        displayMode = 'FULLSIZE';
      } else if (action.width < 1200 && action.width >= 750) {
        displayMode = 'MIDSIZE';
      } else {
        displayMode = 'COMPACT';
      }
      newState = Object.assign({}, state, {
        displayMode,
      });
      return newState;
    case 'FOCUS_IMAGE':
      if (state.displayMode === 'FULLSIZE' && action.viewpane <= 4) {
        inFocus = action.viewpane;
      } else if (state.displayMode === 'MIDSIZE' && action.viewpane <= 2) {
        inFocus = action.viewpane;
      } else {
        inFocus = 'NONE';
      }
      newState = Object.assign({}, state, {
        inFocus,
      });
      return newState;
    case 'DEFOCUS_ALL':
      inFocus = 'NONE';
      newState = Object.assign({}, state, {
        inFocus,
      });
      return newState;
    default:
      return state;
  }
}

export default mainDisplay;
