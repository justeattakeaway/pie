// eslint-disable-next-line func-names
module.exports = function (data, id, hidden) {
    return `<div id="${id}" ${
      hidden ? 'style="display: none;"' : ''
    }>${data}</div>`;
};
