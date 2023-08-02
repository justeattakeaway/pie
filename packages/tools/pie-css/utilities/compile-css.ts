import sass from 'sass';

export function compileCss (scss: string): string {
    console.info('compiling css...');
    const result = sass.compileString(scss, {
        loadPaths: ['scss'],
    });

    return result.css;
}
