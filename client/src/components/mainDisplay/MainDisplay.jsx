/**
 * Main Display component
 * Renders photo gallery using smaller subcomponents
 */

import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { checkWidth } from '../../actionCreators/index.js';

import PhotoWrapperCol from './PhotoWrapperCol';
import PhotoWrapper from './PhotoWrapper';

const Background = styled.div`
  width: 100%;
  height: 600px;
  background-color: #303030;
  padding-top: 1px;
  padding-bottom: 1px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
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
          <PhotoWrapperCol order={1} displayMode={this.props.displayMode}>
            <PhotoWrapper id={1} imageurl={this.props.photos[1]} />
            <PhotoWrapper id={2} imageurl={this.props.photos[2]} />
          </PhotoWrapperCol>
          <PhotoWrapperCol order={2} displayMode={this.props.displayMode}>
            <PhotoWrapper id={3} imageurl={this.props.photos[3]} />
            <PhotoWrapper id={4} imageurl={this.props.photos[4]} />
          </PhotoWrapperCol>
        </FlexRow>
      </Background>
    );
  }
}

const mapStateToProps = ({ mainDisplay }) => ({
  displayMode: (() => {
    if (mainDisplay.displayMode === 'FULLSIZE') {
      return 2;
    } else if (mainDisplay.displayMode === 'MIDSIZE') {
      return 1;
    } else {
      return 0;
    }
  })(),
});

const mapDispatchToProps = {
  onResize: checkWidth,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
export const MainDisplayRaw = MainDisplay;