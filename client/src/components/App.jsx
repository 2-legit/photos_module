/**
 * Main app component
 * Main container-component to be rendered to page
 */

import React from 'react';

import MainDisplay from './mainDisplay/MainDisplay';

import photos from '../../../data/testPhotoData';

const imageurls = photos.map(image => image.imageurl);

import photos from '../../../data/testPhotoData.js';

const imageurls = photos.map(image => image.imageurl);

function App() {
  return (
    <MainDisplay photos={imageurls} displayMode={2} />
  );
}

export default App;
