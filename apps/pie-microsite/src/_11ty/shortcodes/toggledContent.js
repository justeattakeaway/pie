const markdownLibrary = require('markdown-it');
const md = new markdownLibrary();

module.exports = function (data, id) {
  data = md.render(data);

  return `<div id="${id}">${data}</div>`;
};
