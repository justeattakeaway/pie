import fs from 'fs';
import postcss, { Result } from 'postcss';
import atImport from 'postcss-import';

// css to be processed
const css = fs.readFileSync('css/input.css', 'utf8');

// process css
postcss()
    .use(atImport())
    .process(css, {
        // `from` option is needed here
        from: 'css/input.css',
    })
    .then((result: Result) => {
        const output = result.css;
        console.info('writing index.css file...');

        fs.writeFile('css/index.css', output, (err) => {
            if (err) {
                throw err;
            }

            console.info('index.css file written');
        });
    });
