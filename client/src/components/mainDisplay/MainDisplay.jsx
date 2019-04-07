/**
 * Main Display component
 * Renders photo gallery using smaller subcomponents
 */

/**
 * TODO:
 * 
 * Create a React component with the following style properties:
 * 
 *  full width, 30% height
 *  bg color: very dark gray
 * 
 * Invoke:
 *  PhotoWrapper
 *  PhotoWrapperCol
 */

/**
 * TODO:
 * 
 * Write a component that has the following style properties:
 *   flex display, row
 *   full width and height
 *   1px top and bottom padding
 */

/**
 * ASIDE: 
 * 
 * use window.addEventListener with the event "resize" to wire
 * the dispatcher for checking width
 */

import React from 'react';
import styled from 'styled-components';

import PhotoWrapperCol from './PhotoWrapperCol.jsx';
import PhotoWrapper from './PhotoWrapper.jsx';

const Background = styled.div`
  width: 100%;
  height: 30%;
  background-color: #303030;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1px;
  padding-bottom: 1px;
`;

FlexRow.displayName = 'FlexRow';

class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('resize', this.props.onResize);
  }

  render() {
    return (
      <Background>
        <FlexRow>
          <PhotoWrapper id={0} imageurl={this.props.photos[0]} />
          <PhotoWrapperCol order={1}>
            <PhotoWrapper id={1} imageurl={this.props.photos[1]} />
            <PhotoWrapper id={2} imageurl={this.props.photos[2]} />
          </PhotoWrapperCol>
          <PhotoWrapperCol order={2}>
            <PhotoWrapper id={3} imageurl={this.props.photos[3]} />
            <PhotoWrapper id={4} imageurl={this.props.photos[4]} />
          </PhotoWrapperCol>
        </FlexRow>
      </Background>
    );
  }
}

export default MainDisplay;