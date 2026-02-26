import path from 'path';

/**
 * @returns Internal config for the update-icons script
 */
export function getConfig () {
    const assetsPath = path.join(process.cwd(), '/src/assets');

    return {
        assetsPath,
        folderMapping: [
            { from: '/Payment/Default', to: `${assetsPath}/payment`, category: 'Payment' },
            { from: '/Flag', to: `${assetsPath}/flag`, category: 'Flags' },
            { from: '/Logo', to: `${assetsPath}/logo`, category: 'Logo' },
            { from: '/Social', to: `${assetsPath}/social`, category: 'Social' },
            { from: '/All', to: `${assetsPath}`, category: 'All' },
        ],
        categoryNamesMap: {
            // from `pie-iconography/All` to `pie-icons`
            'Age Limit': 'Age limit',
            AV: 'Audiovisual (AV)',
            Misc: 'Miscellaneous',
        },
        singleSizeCategories: [
            'flags',
            'payment',
        ],
        packages: [
            '@justeattakeaway/pie-icons',
            '@justeattakeaway/pie-icons-webc',
        ],
    };
}
