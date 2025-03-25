import { readFileSync } from 'fs';
import path from 'path';
import viteConfig from '@justeattakeaway/pie-components-config/vite.config';

const pkg = JSON.parse(readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'));

export default viteConfig({
    version: pkg.version,
});
