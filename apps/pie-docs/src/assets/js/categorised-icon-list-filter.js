document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('category-filter');
    const iconListContainer = document.getElementById('categorised-icon-list-container');
    let selectedCategory = '';
    let searchTerm = '';
    selectElement.addEventListener('change', (event) => {
        selectedCategory = event.detail.sourceEvent.target.value;
        iconListContainer.innerHTML = window.categorisedIconListHelpers.generateCategorisedIconList(
            window.iconData.categories,
            window.pieIcons,
            selectedCategory,
            searchTerm,
        );
    });
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (event) => {
        searchTerm = event.target.value;
        iconListContainer.innerHTML = window.categorisedIconListHelpers.generateCategorisedIconList(
            window.iconData.categories,
            window.pieIcons,
            selectedCategory,
            searchTerm,
        );
    });
});
