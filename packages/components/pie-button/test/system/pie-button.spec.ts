// Button.test.ts
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '../../src/index';

test.describe('PIE Button - @system', () => {
test('render props', async ({ mount }) => {
  const component = await mount(PieButton);
  await expect(component).toContainText("I'm a PIE button");
});
});