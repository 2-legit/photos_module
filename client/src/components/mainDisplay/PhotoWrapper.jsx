/**
 * Photo wrapper component
 * Wrapper that holds a single image tag and prevents overflow
 */

  import React from 'react';
  import styled from 'styled-components';

  const StyledWrapper = styled.div`
    flex-grow: 1;
    overflow: hidden;
    margin: 1px;
    opacity: ${props => (props.inFocus === 'NONE' || props.inFocus === props.id) ? '1' : '0.5'};
  `;

  StyledWrapper.displayName = 'StyledWrapper';

  function PhotoWrapper(props) {
    return (
      <StyledWrapper inFocus={props.inFocus} id={props.id}>
        <img
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
        src={props.imageurl}
        onClick={props.onPhotoClick}
        onMouseEnter={props.onPhotoHover}
        onMouseLeave={props.onPhotoLeave}
        />
      </StyledWrapper>
    );
  }

  export default PhotoWrapper;
