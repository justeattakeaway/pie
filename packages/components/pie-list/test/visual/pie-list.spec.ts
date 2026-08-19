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
    { storyId: 'list--long-text-compact', snapshotName: 'PieList - Long text, compact (first line alignment)' },
    { storyId: 'list--long-meta-text-compact', snapshotName: 'PieList - Long meta text, compact (wrapped meta text)' },
    { storyId: 'list--alignment-override', snapshotName: 'PieList - Alignment override' },
    { storyId: 'list--removed-padding', snapshotName: 'PieList - Removed inline padding' },
    { storyId: 'list--borders', snapshotName: 'PieList - Borders between items' },
    { storyId: 'list--switch-selection', snapshotName: 'PieList - Switch selection list' },
    { storyId: 'list--link-list', snapshotName: 'PieList - Link list' },
    { storyId: 'list--button-list', snapshotName: 'PieList - Button list' },
    { storyId: 'list--button-list-disabled', snapshotName: 'PieList - Button list (disabled)' },
    { storyId: 'list--coloured-icons-disabled', snapshotName: 'PieList - Coloured slotted icons (enabled and disabled)' },
    { storyId: 'list--item-height-compact', snapshotName: 'PieList - Item height (compact, primary text only)' },
    { storyId: 'list--item-height-primary-and-secondary', snapshotName: 'PieList - Item height (primary and secondary text)' },
    { storyId: 'list--item-height-primary-only', snapshotName: 'PieList - Item height (primary text only)' },
    { storyId: 'list--item-height-compact-no-divider', snapshotName: 'PieList - Item height (compact, primary text only, no divider)' },
    { storyId: 'list--item-height-primary-and-secondary-no-divider', snapshotName: 'PieList - Item height (primary and secondary text, no divider)' },
    { storyId: 'list--item-height-primary-only-no-divider', snapshotName: 'PieList - Item height (primary text only, no divider)' },
    { storyId: 'list--disabled-tag-behaviour', snapshotName: 'PieList - Disabled tag behaviour' },
];

test.describe('PieList - Visual tests', () => {
    visualStories.forEach(({ storyId, snapshotName }) => {
        test(`should display the ${snapshotName} story correctly`, async ({ page }) => {
            await new BasePage(page, storyId).load();

            await percySnapshot(page, snapshotName);
        });
    });
});
