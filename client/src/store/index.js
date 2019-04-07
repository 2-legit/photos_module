/**
 * Redux store creation
 * Exports a redux store
 */

import { createStore } from 'redux';
import photoApp from '../reducers/index';

export default createStore(photoApp);
