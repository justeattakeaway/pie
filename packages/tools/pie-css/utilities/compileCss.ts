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
    const result = sass.compileString(scss, {
        loadPaths: ['scss'],
    });

    return result.css;
}

/**
 * Strips all whitespace characters from the given CSS string.
 *
 * This function removes all whitespace characters, including spaces, tabs,
 * newlines, etc., from the input CSS string. It's useful for basic compression
 * or when you need to compare CSS strings without considering whitespace.
 *
 * @example
 * const css = `
 *      :root {
 *        --font-size: 12;
 *      }`;
 * const strippedCss = stripCSSWhitespace(css);
 * // Output: ":root{--font-size:12;}"
 *
 * @param {string} cssStr - The input CSS string containing the styles.
 * @returns {string} The CSS string with all whitespace characters removed.
 */
export function stripCSSWhitespace (cssStr: string) {
    return cssStr.replace(/\s/g, '');
}
