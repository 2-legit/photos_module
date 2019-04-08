/**
 * Button component file
 * Exports styled buttons for use in the modal component
 */

import React from 'react';
import styled from 'styled-components';

const CloseButton = styled.button`
  position: fixed;
  width: 70px;
  height: 70px;
  top: 20px;
  right: 20px;
  background-color: red;
  border: 0px solid;
`;

export function Close(props) {
  return (
    <CloseButton
    // img={}
    onClick={props.onButtonClick}
    />
  );
}

const ArrowButton = styled.button`
  width: 70px;
  height: 70px;
  background-color: red;
  border: 0px solid;
`;

export function Next(props) {
  return (
    <a href={`#nav-${props.photo + 1}`}>
    <ArrowButton
    // img={}
    onClick={() => props.onButtonClick('NEXT')}
    />
    </a>
  );
}

export function Prev(props) {
  return (
    <a href={`#nav-${props.photo - 1}`}>
    <ArrowButton
    // img={}
    onClick={() => props.onButtonClick('PREV')}
    />
    </a>
  );
}

const PhotoWrapper = styled.div`
  width: 100px;
  height: 70px;
  overflow: hidden;
  opacity: ${props => props.current === props.photo ? 1 : 0.5}
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
      style={{objectFit: 'contain'}}
      src={props.imageurl}
      />
    </PhotoWrapper>
  );
}