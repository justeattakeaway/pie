import sharedConfig from '@justeattakeaway/pie-components-config/vite.config';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default sharedConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'locales/*',
                    dest: 'locales'
                }
            ]
        })
    ]
});
