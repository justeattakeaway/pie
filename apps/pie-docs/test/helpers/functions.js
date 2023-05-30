const isElementVisibleInViewport = async (element) => element.evaluate((el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
});

export {
    isElementVisibleInViewport,
};
