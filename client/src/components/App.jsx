/**
 * Main app component
 * Main container-component to be rendered to page
 */

import React from 'react';

import MainDisplay from './mainDisplay/MainDisplay';
import Modal from './modal/Modal';

function App() {
  return (
    <div>
      <MainDisplay />
      <Modal />
    </div>
  );
}

export default App;
