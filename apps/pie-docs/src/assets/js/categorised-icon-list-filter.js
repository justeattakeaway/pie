document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('categoryFilter');
    const iconListContainer = document.getElementById('categorisedIconListContainer');
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
    const searchBar = document.getElementById('searchBar');
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
