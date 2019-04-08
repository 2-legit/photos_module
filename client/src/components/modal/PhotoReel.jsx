/**
 * Photo reel component
 * Contains a scrolling box comprising of Photo nav buttons
 */

import React from 'react';
import styled from 'styled-components';
import { Next, Prev, PhotoNav } from './Buttons.jsx';

import { connect } from 'react-redux';
import { modalSelect } from '../../actionCreators/index.js';

const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-directon: row;
  justify-content: space-between;
`;

FlexRow.displayName = 'FlexRow';

const ScrollBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

ScrollBox.displayName = 'ScrollBox';

function PhotoReel(props) {
  return (
    <FlexRow>
      <Prev onButtonClick={props.onButtonClick} photo={props.photo} />
      <ScrollBox>
        {props.photos.map((photo, index) => (
          <a href={`#nav-${index}`}>
          <PhotoNav
          key={index}
          photo={index}
          current={props.photo}
          imageurl={photo.imageurl}
          onButtonClick={props.onButtonClick}
          />
          </a>
        ))}
      </ScrollBox>
      <Next onButtonClick={props.onButtonClick} photo={props.photo} />
    </FlexRow>
  );
}

const mapStateToProps = ({ modal }) => ({
  photos: modal.photos,
  photo: modal.photo,
});

const mapDispatchToProps = {
  onButtonClick: modalSelect,
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoReel);
export const PhotoReelRaw = PhotoReel;