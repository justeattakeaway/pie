import fs from 'fs';
import postcss, { Result } from 'postcss';
import atImport from 'postcss-import';

const cssInputFilePath = 'css/input.css';
const cssOutputFilePath = 'css/index.css';

const css = fs.readFileSync(cssInputFilePath, 'utf8');

// process css
postcss()
    .use(atImport())
    .process(css, {
        from: cssInputFilePath,
    })
    .then((result: Result) => {
        const output = result.css;
        console.info(`writing "${cssOutputFilePath}" file...`);

        fs.writeFile(cssInputFilePath, output, (err) => {
            if (err) {
                throw err;
            }

            console.info(`"${cssOutputFilePath}" file written`);
        });
    });
