import postcss from 'postcss';

const plugin = () => {
    const processed = Symbol('processed');

    return {
        postcssPlugin: 'UsingTokens',
        Declaration: (decl) => {
            if (decl[processed]) return;

            if (decl.prop.includes('--main-bg-color')) {
                decl.prop = decl.prop.replace('--main-bg-color', '--main-new-bg-color');
            }

            if (decl.value.includes('--main-bg-color')) {
                decl.value = decl.value.replace('--main-bg-color', '--main-new-bg-color');
            }

            decl[processed] = true;
        },
    };
};

export default function transformer (file) {
    return postcss([plugin()]).process(file.source).css;
}
