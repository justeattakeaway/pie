import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

// Each entry is a story that exercises a visually distinct state. Appearance
// concerns (padding, spacing, dividers, alignment, typography, wrapping) are
// verified here rather than in the component (JS) tests.
const visualStories: { storyId: string, snapshotName: string }[] = [
    { storyId: 'list--text-only', snapshotName: 'PieList - Text only' },
    { storyId: 'list--leading-and-trailing', snapshotName: 'PieList - Leading and trailing content' },
    { storyId: 'list--leading-and-trailing-only-primary-text', snapshotName: 'PieList - Leading and trailing content (only primary text)' },
    { storyId: 'list--tags', snapshotName: 'PieList - Trailing tags' },
    { storyId: 'list--meta-text', snapshotName: 'PieList - Meta text' },
    { storyId: 'list--meta-text-only-primary-text', snapshotName: 'PieList - Meta text (only primary text)' },
    { storyId: 'list--bold', snapshotName: 'PieList - Bold primary text' },
    { storyId: 'list--compact', snapshotName: 'PieList - Compact' },
    { storyId: 'list--media', snapshotName: 'PieList - Media (has-media block padding)' },
    { storyId: 'list--long-text', snapshotName: 'PieList - Long text wrapping' },
    { storyId: 'list--long-text-meta-text-only-primary-text', snapshotName: 'PieList - Long text, meta text with only primary text' },
    { storyId: 'list--long-text-centre-aligned', snapshotName: 'PieList - Long text, centre aligned' },
    { storyId: 'list--alignment-override', snapshotName: 'PieList - Alignment override' },
    { storyId: 'list--removed-padding', snapshotName: 'PieList - Removed inline padding' },
    { storyId: 'list--borders', snapshotName: 'PieList - Borders between items' },
    { storyId: 'list--switch-selection', snapshotName: 'PieList - Switch selection list' },
];

test.describe('PieList - Visual tests', () => {
    visualStories.forEach(({ storyId, snapshotName }) => {
        test(`should display the ${snapshotName} story correctly`, async ({ page }) => {
            await new BasePage(page, storyId).load();

            await percySnapshot(page, snapshotName);
        });
    });
});
