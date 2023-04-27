const j = require('jscodeshift');

module.exports = function (fileInfo, api) {
  const source = j(fileInfo.source);

  source
    .findJSXElements('PieBtn')
    .forEach((path) => {
      const testIdAttribute = path.node.openingElement.attributes.find(
        (attr) => attr.name && attr.name.name === 'testId'
      );

      if (!testIdAttribute) {
        const testIdProp = j.jsxAttribute(
          j.jsxIdentifier('testId'),
          j.stringLiteral('foo')
        );
        path.node.openingElement.attributes.push(testIdProp);
      }
    });

  return source.toSource();
};
