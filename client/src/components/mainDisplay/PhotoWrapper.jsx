/**
 * Photo wrapper component
 * Wrapper that holds a single image tag and prevents overflow
 */

 /**
  * TODO:
  * 
  * Create a div that has the following style properties:
  *   flex grow 1
  *   hide overflow
  *   1px margin
  * 
  *   <PROP CONDITION> if index === ownId && css
  *     opacity 0.77
  * 
  * Within that div, have a single image tag that has the following style properties:
  *   100% width and height
  *   object-fit cover
  */

  import React from 'react';

  function PhotoWrapper(props) {
    return (
      <div>
        <img
        src={props.url}
        onClick={props.onPhotoClick}
        onMouseEnter={props.onPhotoHover}
        onMouseLeave={props.onPhotoLeave}
        />
      </div>
    );
  }

  export default PhotoWrapper;