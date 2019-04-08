/**
 * Modal container-component
 * Renders modal to screen
 */

import React from 'react';
import styled from 'styled-components';

import { Close } from './Buttons.jsx';
import PhotoReel from './PhotoReel.jsx';

import { connect } from 'react-redux';
import { toggleModal } from '../../actionCreators/index.js';

const Fullscreen = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #202020;
  color: white;
  position: fixed;
  top: 0px;
  left: 0px;
  visibility: ${props => props.onScreen ? 'visible' : 'collapse'};
`;

Fullscreen.displayName = 'Fullscreen';

const FlexColumn = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100%;
`;

FlexColumn.displayName = 'FlexColumn';

const PhotoWrapper = styled.div`
  width: 100%;
  height: 60%;
`;

PhotoWrapper.displayName = 'PhotoWrapper';

const Description = styled.div`
  width: 100%;
  height: 12px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

Description.displayName = 'Description';

function Modal(props) {
  return (
    <Fullscreen onScreen={props.onScreen}>
      <Close onButtonClick={props.onButtonClick} />
      <FlexColumn>
        <PhotoWrapper>
          <img style={{objectFit: 'contain', width: '100%', height: '100%'}} src={props.imageurl} />
        </PhotoWrapper>
        <Description>
        {(props.photo + 1) + '/' + props.photos.length} - {props.description}
        </Description>
        <PhotoReel />
      </FlexColumn>
    </Fullscreen>
  );
}

const mapStateToProps = ({ modal }) => ({
  onScreen: modal.onScreen,
  photos: modal.photos,
  photo: modal.photo,
  imageurl: modal.photos[modal.photo] ? modal.photos[modal.photo].imageurl : 'blank',
  description: modal.photos[modal.photo] ? modal.photos[modal.photo].imagedesc : 'blank',
});

const mapDispatchToProps = {
  onButtonClick: toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
export const ModalRaw = Modal;