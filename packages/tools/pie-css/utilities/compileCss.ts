import sass from 'sass';

/**
 * Compiles a given SCSS string into CSS using load paths that point to the `scss` directory at the project root.
 *
 * @example
 * const scss = ".className { color: red; }";
 * const css = compileCss(scss);
 * console.log(css); // Outputs the compiled CSS string
 *
 * @param {string} scss - The SCSS code to compile.
 * @returns {string} - The compiled CSS code.
 *
 * @throws {Error} If the SCSS compilation fails.
 */
export function compileCss (scss: string): string {
    console.info('compiling css...');
    const result = sass.compileString(scss, {
        loadPaths: ['scss'],
    });

    return result.css;
}

