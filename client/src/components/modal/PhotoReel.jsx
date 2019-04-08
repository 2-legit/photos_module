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

const ScrollBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

function PhotoReel(props) {
  return (
    <FlexRow>
      <Next onButtonClick={onButtonClick} />
      <ScrollBox>
        {props.photos.map(photo, index => (
          <PhotoNav
          photo={index}
          imageurl={photo.imageurl}
          onButtonClick={onButtonClick}
          />
        ))}
      </ScrollBox>
      <Prev onButtonClick={onButtonClick} />
    </FlexRow>
  );
}