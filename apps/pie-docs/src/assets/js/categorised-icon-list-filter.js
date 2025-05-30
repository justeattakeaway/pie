document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('categoryFilter');
    const iconListContainer = document.getElementById('categorisedIconListContainer');

    selectElement.addEventListener('change', (event) => {
        const selectedCategory = event.detail.sourceEvent.target.value;
        iconListContainer.innerHTML = window.categorisedIconListHelpers.generateCategorisedIconList(
            window.iconData.categories,
            window.pieIcons,
            selectedCategory,
        );
    });
    const searchBar = document.getElementById('searchBar');
    const innerInput = searchBar.shadowRoot?.querySelector('input');
    innerInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value;
        console.log('typing detected', searchTerm);
        const selectedCategory = selectElement.value || null;

        iconListContainer.innerHTML = window.categorisedIconListHelpers.generateCategorisedIconList(
            window.iconData.categories,
            window.pieIcons,
            selectedCategory,
            searchTerm,
        );
    });
});
