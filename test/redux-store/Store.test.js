/**
 * Store test script
 * Tests basic state functionality, without component integration
 */

import { createStore } from 'redux';

test('has access to redux', () => {
  expect(typeof createStore).toBe('function');
});