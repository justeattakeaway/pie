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
});
