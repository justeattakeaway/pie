class Page {

    get navigation () { return $('[data-test-id="navigation-menu"]') }
    get navigationCategories () { return this.navigation.$$('[data-test-id="navigation-category"') }

    async getNavigationCategories () {
        return this.navigationCategories;
    }

    async getNavigationItemsForCategory(categoryElement) {
        return categoryElement.$$('[data-test-id="navigation-item"]')
    }

}

export default new Page()