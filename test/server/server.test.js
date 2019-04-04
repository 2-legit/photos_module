/**
 * @jest-environment node
 */

/**
 * Server test script
 * Tests server functionality in node-based environment
 */

test('should not have access to document object', () => {
  expect(typeof document).toBe('undefined');
});