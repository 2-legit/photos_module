/**
 * Photo wrapper component
 * Wrapper that holds a single image tag and prevents overflow
 */

import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { focusImage, defocusAll, toggleModal } from '../../actionCreators/index.js';

const StyledWrapper = styled.div`
  flex-grow: 1;
  overflow: hidden;
  margin: 1px;
  opacity: ${props => (props.inFocus === 'NONE' || props.inFocus === props.id) ? '1' : '0.5'};
  transition: opacity 0.15s;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(${props => (props.inFocus === props.id) ? '1.1' : '1'});
  transition: all ease-in-out 0.15s;
`;

StyledWrapper.displayName = 'StyledWrapper';

function PhotoWrapper(props) {
  return (
    <StyledWrapper inFocus={props.inFocus} id={props.id}>
      <StyledImg
      inFocus={props.inFocus}
      id={props.id}
      src={props.imageurl}
      onClick={() => props.onPhotoClick(props.id)}
      onMouseEnter={() => props.onPhotoHover(props.id)}
      onMouseLeave={props.onPhotoLeave}
      />
    </StyledWrapper>
  );
}

const mapStateToProps = ({ mainDisplay }) => ({
  inFocus: mainDisplay.inFocus,
});

const mapDispatchToProps = {
  onPhotoClick: toggleModal,
  onPhotoHover: focusImage,
  onPhotoLeave: defocusAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoWrapper);
export const PhotoWrapperRaw = PhotoWrapper;
