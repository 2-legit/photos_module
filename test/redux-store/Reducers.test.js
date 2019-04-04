/**
 * Reducer test script
 * Tests reducers for use with Redux stores
 */

// Describe mainDisplay
  // Describe CHECK_WIDTH
    // test: should save to state 'FULLSIZE' for widths greater than 1200px
    // test: should save to state 'MIDSIZE' for widths between 1200px and 750px
    // test: should save to state 'COMPACT' for widths less than 750px

  // Describe FOCUS_IMAGE
    // test: should save to state (index) when given payload (index)

  // Describe DEFOCUS_ALL
    // test: should save to state 'NONE' when given DEFOCUS_ALL action

// Describe modal
  // Describe TOGGLE_MODAL
    // test: should save to state (display)
    // test: should toggle state boolean property

  // Describe MODAL_SELECT
    // test: should save to state (display)
    // test: should set modalDisplay to the specified number when given a number
    // test: should increment modalDisplay when given 'NEXT'
    // test: should decrement modalDisplay when given 'PREV'
    // test: should only work for numbers between 0 and photos.length - 1