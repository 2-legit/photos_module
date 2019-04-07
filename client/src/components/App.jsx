/**
 * Main app component
 * Main container-component to be rendered to page
 */

import React from 'react';

import MainDisplay from './mainDisplay/MainDisplay.jsx';

function App() {
  return (
    <MainDisplay photos={[]} />
  );
}

export default App;
