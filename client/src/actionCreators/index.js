/**
 * Action creator functions
 * To be used in conjunction with dispatchers to inform the store to update
 */

function addPhotos(photos) {
  const action = {
    type: 'ADD_PHOTOS',
    photos,
  };
  return action;
}

function checkWidth() {
  const action = {
    type: 'CHECK_WIDTH',
    width: window.innerWidth,
  };
  return action;
}

function focusImage(index) {
  const action = {
    type: 'FOCUS_IMAGE',
    viewpane: index,
  };
  return action;
}

function defocusAll() {
  const action = { type: 'DEFOCUS_ALL' };
  return action;
}

function toggleModal(index = 0) {
  const action = {
    type: 'TOGGLE_MODAL',
    photo: index,
  };
  return action;
}

function modalSelect(display = 0) {
  const action = {
    type: 'MODAL_SELECT',
    photo: display,
  };
  return action;
}

export {
  addPhotos,
  checkWidth,
  focusImage,
  defocusAll,
  toggleModal,
  modalSelect,
};
