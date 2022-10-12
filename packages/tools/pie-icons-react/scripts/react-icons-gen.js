const svgr = require("@svgr/core");
const fs = require("fs");
const pieIcons = require("@justeattakeaway/pie-icons").default;
const { pascalCase } = require("pascal-case");
const path = require("path");

const icons = pieIcons.icons;

const ICONS_DIR = process.cwd() + "/src/icons";

const indexFile = fs.createWriteStream(
  path.join(ICONS_DIR, "/index.tsx"),
  (err) => {
    console.error(err);
  }
);

Object.keys(icons).map((iconKey) => {
  const componentName = pascalCase(iconKey);
  const Comp = svgr.transform.sync(
    icons[iconKey].toSvg(),
    { icon: true, typescript: true },
    { componentName }
  );
  fs.writeFile(`${ICONS_DIR}/${componentName}.tsx`, Comp, (err) => {
    if (err) console.error(err);
  });

  indexFile.write(
    `export { default as ${componentName} } from '../icons/${componentName}';\n`
  );
});
