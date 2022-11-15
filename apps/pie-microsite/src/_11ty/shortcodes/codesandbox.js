/**
 * Returns an HTML snippet that allows embedding Codesandbox components on the page
 * @param {string} url - a url to a Codesandbox embed
 * @returns {string} HTML to embed a Codesandbox component
 */
// eslint-disable-next-line func-names
module.exports = function (url) {
    return `<iframe src="${url}"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="React"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>`;
};
