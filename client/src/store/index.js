/**
 * Redux store creation
 * Exports a redux store
 */

import { createStore } from 'redux';
import photoApp from '../reducers/index,js';

export default createStore(photoApp);
