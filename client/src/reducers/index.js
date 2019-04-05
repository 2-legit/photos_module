/**
 * Reducers index file
 * Collects all other reducers in directory and exports a root reducer
 */

// TODO (eventually lol): Import other reducers and invoke combineReducers

import { combineReducers } from 'redux';

import mainDisplay from './mainDisplay';
import modal from './modal';

const photoApp = combineReducers({ mainDisplay, modal });

export default photoApp;
