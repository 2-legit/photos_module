/**
 * Button component file
 * Exports styled buttons for use in the modal component
 */

import React from 'react';
import styled from 'styled-components';

import CLOSE_BUTTON from '../../../img/closeButton.png';
import NEXT_BUTTON from '../../../img/nextButton.png';
import PREV_BUTTON from '../../../img/prevButton.png';

const CloseButton = styled.button`
  position: fixed;
  width: 70px;
  height: 70px;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: 0px solid;
`;

export function Close(props) {
  return (
    <CloseButton onClick={props.onButtonClick}>
      <img
      style={{objectFit: 'contain', width: '100%', height: '100%'}}
      src={CLOSE_BUTTON}
      />
    </CloseButton>
  );
}

const ArrowButton = styled.button`
  width: 70px;
  height: 70px;
  background-color: transparent;
  border: 0px solid;
`;

export function Next(props) {
  return (
    <a href={`#nav-${props.photo + 1}`}>
      <ArrowButton onClick={() => props.onButtonClick('NEXT')}>
        <img
        style={{objectFit: 'contain', width: '100%', height: '100%'}}
        src={NEXT_BUTTON}
        />
      </ArrowButton>
    </a>
  );
}

export function Prev(props) {
  return (
    <a href={`#nav-${props.photo - 1}`}>
      <ArrowButton onClick={() => props.onButtonClick('PREV')}>
        <img
        style={{objectFit: 'contain', width: '100%', height: '100%'}}
        src={PREV_BUTTON}
        />
      </ArrowButton>
    </a>
  );
}

const PhotoWrapper = styled.div`
  width: 100px;
  height: 70px;
  overflow: hidden;
  opacity: ${props => props.current === props.photo ? 1 : 0.5};
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 10px;
  margin-right: 10px;
`;

export function PhotoNav(props) {
  return (
    <PhotoWrapper
    current={props.current}
    photo={props.photo}
    id={`nav-${props.photo}`}
    onClick={() => props.onButtonClick(props.photo)}
    >
      <img
      style={{objectFit: 'cover', width: '100%', height: '100%'}}
      src={props.imageurl}
      />
    </PhotoWrapper>
  );
}