/**
 * Main app component
 * Main container-component to be rendered to page
 */

/**
 * TODO:
 * 
 * Invoke MainDisplay component container and Modal component container
 * 
 * Write into the app component the following style properties:
 *   very dark gray background color
 *   no margin
 *   100% width, 25% height
 */

import React from 'react';

import MainDisplay from './mainDisplay/MainDisplay.jsx';

function App() {
  return (
    <MainDisplay photos={[]} />
  );
}

export default App;