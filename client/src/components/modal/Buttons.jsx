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
    <ArrowButton
    // img={}
    onClick={() => props.onButtonClick('NEXT')}
    href={`#nav-${props.photo + 1}`}
    />
  );
}

export function Prev(props) {
  return (
    <ArrowButton
    // img={}
    onClick={() => props.onButtonClick('PREV')}
    href={`#nav-${props.photo - 1}`}
    />
  );
}

const PhotoWrapper = styled.div`
  width: 100px;
  height: 70px;
  overflow: hidden;
`;

export function PhotoNav(props) {
  return (
    <PhotoWrapper
    href={`#nav-${props.photo}`}
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