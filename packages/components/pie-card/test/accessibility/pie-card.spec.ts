// import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
// import type { CardProps } from '../../src/index.ts';
// import { tags } from '../../src/defs.ts';
// import { CardDefaultPage } from '../helpers/page-object/pie-card-default.page.ts';

// test.describe('PieCard - Accessibility tests', () => {
//   tags.forEach((tag) => {
//     test(`a11y - should test the PieCard component WCAG compliance if tag is = "${tag}"`, async ({ makeAxeBuilder, page }) => {
//       const props: CardProps = {
//         tag,
//         aria: { label: 'card' },
//       };

//       const cardDefaultPage = new CardDefaultPage(page);
//       await cardDefaultPage.load({ ...props });

//       const results = await makeAxeBuilder().analyze();

//       expect(results.violations).toEqual([]);
//     });
//   });
// });
