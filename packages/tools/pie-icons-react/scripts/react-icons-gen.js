import { transform } from '@svgr/core'
import pieIcons from '@justeattakeaway/pie-icons';
import { pascalCase } from "pascal-case";
import { join } from 'path';
import fs from 'fs-extra';

const { icons } = pieIcons.default;

const ICONS_DIR = `${process.cwd()}/icons`;
const filePath = join(ICONS_DIR, '/index.tsx');

async function checkDirExists (directoryPath) {
    try {
        await fs.ensureDir(directoryPath);
        console.info(`Directory "${directoryPath}" exists.`);
    } catch (err) {
        console.error(err);
    }
}

const handleComponentName = (name) => name.replace(/\-(\d+)/, '$1'); // eslint-disable-line no-useless-escape

// open a write stream to index.tsx
const indexFile = fs.createWriteStream(
    filePath,
    (err) => {
        console.error(err);
    },
);

function getTemplate(buildTimeClasses) {
    return (variables, { tpl }) => {
        const { imports, interfaces, componentName, jsx, exports } = variables;
        const isLargeIcon = variables.componentName.endsWith('Large');
        const componentPropsInterface = isLargeIcon ? 'LargeIconProps': 'RegularIconProps'
        const propsImportStatement = `import { ${componentPropsInterface} } from "../types"`

        return tpl`
        ${imports};
        ${interfaces};
        ${propsImportStatement};
        // @ts-ignore
        import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';

        const ${componentName} = (props: ${componentPropsInterface}) => {
            const { className, iconSize, width, height, ...remainingProps } = props;

            const moreProps = getSvgProps("${buildTimeClasses}", className, iconSize, "${componentName}");

            const allProps = { ...remainingProps, ...moreProps };

            return (${jsx});
        }

        ${exports};
        `;
    }
}

async function build() {
    // check that the /icons directory exists, if not create it
    await checkDirExists(ICONS_DIR);

    // loop through the icons in pie-icons, generate each component and add it to the index.tsx
    Object.keys(icons).forEach((iconKey) => {
        const { pathPrefix } = icons[iconKey];
        const capitalisedPathPrefix = (pathPrefix !== undefined ? (pathPrefix).substring(1, 2).toUpperCase() + (pathPrefix).substring(2) : '');
        const componentName = `Icon${capitalisedPathPrefix + pascalCase(handleComponentName(iconKey))}`;
        const iconClasses = `pie-icon pie-icon--${iconKey.toLowerCase()}`;

        let Comp = transform.sync(
            icons[iconKey].toSvg(),
            {
                icon: true,
                typescript: true,
                template: getTemplate(iconClasses),
            },
            { componentName },
        );

        // Remove redundant import
        Comp = Comp.replace(/import .+SVGProps.+?;\n/, '');
        // Remove unnecessary props
        Comp = Comp.replace(/className=".+?"/, '');
        Comp = Comp.replace(/width=".+?"/, '');
        Comp = Comp.replace(/height=".+?"/, '');
        // Replace props
        Comp = Comp.replace('{...props}', '{...allProps}');

        fs.writeFileSync(`${ICONS_DIR}/${componentName}.tsx`, Comp);

        indexFile.write(`export { default as ${componentName} } from './${componentName}';\n`);
    });
}

build();
