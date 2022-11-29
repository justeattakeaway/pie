class Page {

    navigationSelector = '[data-test-id="navigation-menu"]';

    get navigationCategories () { return this.navigationSelector.$$('[data-test-id="nav-category"]') }

    async getNavigationCategorySelector (category) {
        return `${this.navigationSelector} [data-test-id='${category}']`;
    }

    async getSubPageSelector(categorySelector, pageName) {

        return `${categorySelector} [data-test-id="${pageName}"]`;
    }

    async waitForPageLoad() {
        await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
              timeoutMsg: 'Message on failure'
            }
        );
    }

}

export default new Page()