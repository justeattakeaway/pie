/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const pieIcons = require('@justeattakeaway/pie-icons').default;
const { pascalCase } = require('pascal-case');
const fs = require('fs-extra');

const componentTemplate = (name, svg) => `
export default {
    name: '${name}',

    props: {
    },

    functional: true,

    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;

        return ${svg.replace(/<svg([^>]+)>/, '<svg$1 {...ctx.data}>')};
    }
};
`.replace(/^\s+/g, ''); // trim start of string

const handleComponentName = name => name.replace(/\-(\d+)/, '$1'); // eslint-disable-line no-useless-escape

const icons = Object.keys(pieIcons.icons).map(name => ({
    name,
    pascalCasedComponentName: pascalCase(`icon-${handleComponentName(name)}`)
}));

Promise.all(icons.map(icon => {
    const svg = pieIcons.icons[icon.name].toSvg();
    let component = componentTemplate(icon.pascalCasedComponentName, svg);
    component = component.replace(/xlink:href/g, 'xlinkHref'); // replace so it gets parsed by JSX correctly
    const filepath = `./generated/components/${icon.pascalCasedComponentName}.js`;
    return fs.ensureDir(path.dirname(filepath))
        .then(() => fs.writeFile(filepath, component, 'utf8'));
})).then(() => {
    const main = `/* eslint-disable camelcase */
${icons.map(icon => `export { default as ${icon.pascalCasedComponentName} } from '../icons/${icon.pascalCasedComponentName}';\n`)
            .join('')}
`;
    return fs.outputFile('./generated/index.js', main, 'utf8');
});
