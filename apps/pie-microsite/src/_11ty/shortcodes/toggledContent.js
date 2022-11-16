// eslint-disable-next-line func-names
module.exports = function (data, id, hidden, urlPath) {
    return `<div id="${id}" ${
      hidden ? 'style="display: none;"' : ''
    } ${
      urlPath ? `data-slug=${urlPath}` : ''
    }>${data}</div>`;
};
