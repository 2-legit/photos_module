/**
 * Photo reel component
 * Contains a scrolling box comprising of Photo nav buttons
 */

import React from 'react';
import styled from 'styled-components';
import { Next, Prev, PhotoNav } from './Buttons.jsx';

const FlexRow = styled.div`
  display: flex;
  flex-directon: row;
  justify-content: space-between;
`;

FlexRow.displayName = 'FlexRow';

const ScrollBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

ScrollBox.displayName = 'ScrollBox';

function PhotoReel(props) {
  return (
    <FlexRow>
      <Next onButtonClick={props.onButtonClick} />
      <ScrollBox>
        {props.photos.map((photo, index) => (
          <PhotoNav
          key={index}
          photo={index}
          imageurl={photo.imageurl}
          onButtonClick={props.onButtonClick}
          />
        ))}
      </ScrollBox>
      <Prev onButtonClick={props.onButtonClick} />
    </FlexRow>
  );
}

export default PhotoReel;