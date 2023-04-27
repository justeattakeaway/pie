import { html, TemplateResult } from 'lit';

interface StorybookContext {
  globals: {
    writingDirection: string;
  };
}

type TemplateFn<T> = (args: T, storybookContext: StorybookContext) => TemplateResult;

/**
 * A higher-order function that wraps the provided template function to automatically
 * set the 'dir' attribute based on the 'writingDirection' global in the Storybook context.
 *
 * @export
 * @param {TemplateFn<T>} templateFn - The Storybook Template function to wrap. It should have the
 *                                signature (args: T, storybookContext: StorybookContext) => TemplateResult.
 * @returns {TemplateFn<T>} - A new template function with the same signature as the input
 *                       template function, but with the 'dir' attribute automatically set.
 */
export default function withStorybookDirection<T>(templateFn: TemplateFn<T>): TemplateFn<T> {
    // Storybook will automatically provide the storybookContext parameter when this returned function is called
    return (args: T, storybookContext: StorybookContext): TemplateResult => {
        const writingDirections = {
            ltr: 'ltr',
            rtl: 'rtl',
        };

        const writingDirection = storybookContext.globals.writingDirection;

        const dir = writingDirections[writingDirection] ?? 'auto';
        const element = templateFn(args, storybookContext);

        return html`<div dir="${dir}">${element}</div>`;
    };
}
