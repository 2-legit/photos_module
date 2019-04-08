/**
 * Photo wrapper column component
 * Wrapper that places all elements in a column
 */
 
import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  visibility: ${props => (props.displayMode >= props.order) ? 'visible' : 'collapse' };
`;

Column.displayName = 'Column';

function PhotoWrapperCol(props) {
  return (
    <Column displayMode={props.displayMode} order={props.order}>
      {props.children}
    </Column>
  );
}

export default PhotoWrapperCol;
