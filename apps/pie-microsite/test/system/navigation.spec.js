import Page from "../pageobjects/page";
import { getContent } from "../helpers/routes";
let content;

describe("foo", async () => {
  before(async () => {
    content = await getContent();

    console.log('fooo', content);

  });

  it("foo", async () => {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    const path = `${browser.options.baseUrl}/content/pages`;

    console.log("pathhh", path);
    const expectedUrls = [];
    const requestedUrls = [];

    for (const [pieCategory, piePages] of Object.entries(content)) {
      const categorySelector = await Page.getNavigationCategorySelector(pieCategory);

      await page.click(categorySelector);
      await page.waitForSelector(`${categorySelector} [open]`);

      for (const piePage of piePages) {
        expectedUrls.push(`${path}/${pieCategory}/${piePage}/`);
        const pageSelector = await Page.getSubPageSelector(categorySelector, piePage);

        await page.on("request", async (request) => {
          if (request.url().includes(`${path}/${pieCategory}/${piePage}`)) {
            await page.waitForNetworkIdle();

            if (request.response()?.status() === 200) {
              requestedUrls.push(request.url());
            }
          }
        });

        await page.click(pageSelector);
        await page.waitForNetworkIdle();
      }
    }

    console.log('expected', expectedUrls);
    expect(requestedUrls).toEqual(expectedUrls);
  });
});
