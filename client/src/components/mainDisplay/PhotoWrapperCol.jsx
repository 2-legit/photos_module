/**
 * Photo wrapper column component
 * Wrapper that places all elements in a column
 */

/**
 * TODO:
 * 
 * Write a component that has the following style properties:
 *   flex display column,
 *   flex grow 1
 *   10% width
 *   
 *   <PROP CONDITION> compare key to displayMode:
 *   visibility collapse
 */
 
import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  visibility: ${props => (props.displayMode >= props.order) ? 'visible' : 'collapse' };
`;

Column.displayName = 'Column';

function PhotoWrapperCol(props) {
  return (
    <Column displayMode={props.displayMode} order={props.key}>
      {props.children}
    </Column>
  );
}

export default PhotoWrapperCol;