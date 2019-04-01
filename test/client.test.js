/**
 * @jest-environment enzyme
 */

/**
 * Client test script
 * Tests client functionality in a window-like environment with Enzyme testing suite
 */

test('should have access to document object', () => {
  expect(typeof document).toBe('object');
});
