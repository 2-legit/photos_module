/**
 * Main app component
 * Main container-component to be rendered to page
 */

import React from 'react';

import MainDisplay from './mainDisplay/MainDisplay.jsx';
import Modal from './modal/Modal.jsx';

import testPhotoData from '../../../data/testPhotoData.js';

function App() {
  return (
    <div>
      <MainDisplay />
      <Modal />
    </div>
  );
}

export default App;
