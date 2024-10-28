import path from 'path';

export function getConfig () {
    const assetsPath = path.join(process.cwd(), '/src/assets');

    return {
        assetsPath,
        folderMapping: [
            { from: '/All', to: `${assetsPath}` },
            { from: '/Flag', to: `${assetsPath}/flag` },
            { from: '/Logo', to: `${assetsPath}/logo` },
            { from: '/Payment/Default', to: `${assetsPath}/payment` },
            { from: '/Social', to: `${assetsPath}/social` },
        ],
        packages: [
            '@justeattakeaway/pie-icons',
            '@justeattakeaway/pie-icons-react',
            '@justeattakeaway/pie-icons-vue',
            '@justeattakeaway/pie-icons-webc',
        ],
    };
}
