import { html, type TemplateResult } from 'lit';
import DOMPurify from 'dompurify';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { type StoryOptions } from '../types/StoryOptions';

export type TemplateFunction<T> = (props: T) => TemplateResult;

/**
 * Creates a function used to make stories for a Lit web component.
 *
 * @template T The type representing the properties of the Lit web component.
 *
 * @param {TemplateFunction<T>} templateFunc - The function responsible for rendering the Lit web component. Takes an object of type T and returns a TemplateResult.
 * @param {T} defaultArgs - A set of default property values to be used for each story. Overrides can be passed into the function that is returned by this function.
 *
 * @returns {Function} Returns a function that takes optional property overrides and story options. The returned function itself returns an object with:
 *    - `render`: A function taking an object of type T for rendering the component.
 *    - `args`: The effective properties to be passed to the `render` function.
 *    - `parameters`: Additional settings for the story, such as background color.
 *
 * @example
 * const defaultArgs : ComponentProps = { size: 'medium', variant: 'primary' };
 * const template = ({ size, variant }) => html`
 *     <pie-component
 *         size=${props.size}
 *         variant=${props.variant}>
 *     </pie-component>`;
 *
 * // Usage in Storybook
 * const createComponentStory = createStory(template, defaultArgs);
 * export const Primary = createComponentStory();
 * export const Secondary = createComponentStory({ variant: 'secondary' });
 */
export const createStory = <T>(templateFunc: TemplateFunction<T>, defaultArgs: T) => (
    propOverrides?: Partial<T>,
    storyOpts?: StoryOptions,
) => ({
    render: (args: T) => templateFunc(args),
    args: {
        ...defaultArgs,
        ...propOverrides,
    },
    parameters: {
        backgrounds: {
            ...(storyOpts?.bgColor ? { default: storyOpts.bgColor } : {}),
        },
        controls: { ...(storyOpts?.controls ? storyOpts.controls : {}) },
        ...(storyOpts?.layout ? { layout: storyOpts?.layout || 'centered' } : {}),
    },
    ...(storyOpts?.argTypes ? { argTypes: storyOpts?.argTypes } : {}),
});

/**
 * Sanitizes the given HTML string and returns a Lit directive that renders the sanitized HTML content.
 *
 * This function uses DOMPurify to sanitize the input HTML, then returns a Lit `unsafeHTML` directive
 * which renders the sanitized HTML into a Lit template.
 *
 * @param {string} slot - The HTML string content to be sanitized and rendered.
 * @returns {import('lit/directives/unsafe-html.js').UnsafeHTMLDirective} A Lit directive that can be used in a Lit template to render the sanitized content.
 */
export const sanitizeAndRenderHTML = (slot: string) => unsafeHTML(DOMPurify.sanitize(slot));

/**
 * Creates a story that renders all combinations of given prop options for a Lit web component.
 *
 * @template T The type representing the properties of the Lit web component.
 *
 * @param {TemplateFunction<T>} template - The function responsible for rendering the Lit web component.
 * @param {T} defaultArgs - A set of default property values to be used for each story.
 * @param {Record<keyof T, any[]>} propOptions - An object defining the possible values for each prop.
 * @param {string} slotContent - The content to be placed within the component's slot.
 *
 * @returns {Function} Returns a function that renders all combinations of the given prop options.
 */
export const createVariantStory = <T>(
    template: TemplateFunction<T>,
    propOptions: Record<keyof T, unknown[]>,
    storyOpts?: StoryOptions,
) => ({
        render: () => {
            const generateCombinations = (options: Record<keyof T, unknown[]>): T[] => {
                const keys = Object.keys(options) as (keyof T)[];
                const combinations: T[] = [];

                const buildCombination = (index: number, currentCombination: Partial<T>) => {
                    if (index === keys.length) {
                        combinations.push(currentCombination as T);
                        return;
                    }

                    const key = keys[index];
                    const values = options[key];

                    values.forEach((value) => {
                        buildCombination(index + 1, { ...currentCombination, [key]: value });
                    });
                };

                buildCombination(0, {});
                return combinations;
            };

            const propCombinations = generateCombinations(propOptions);

            return html`
          <div style="display: block; width: 100%;">
              ${propCombinations.map((props) => html`
                      <div style="border: 1px solid black; padding: 16px; margin-bottom: 16px; width: 100%; box-sizing: border-box;">
                          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; font-family: monospace; background-color: #f9f9f9; padding: 8px; border-radius: 4px;">
                              ${Object.entries(props as Record<string, unknown>).map(([key, value]) => html`
                                      <div><strong>${key}:</strong> ${JSON.stringify(value)}</div>
                                  `)}
                          </div>
                          <div style="margin-top: 16px; border: 2px dashed #aaa; padding: 8px; border-radius: 4px;">
                              ${template({ ...props })}
                          </div>
                      </div>
                  `)}
          </div>
        `;
        },
        parameters: {
            backgrounds: {
                ...(storyOpts?.bgColor ? { default: storyOpts.bgColor } : {}),
            },
            controls: { ...(storyOpts?.controls ? storyOpts.controls : {}) },
            ...(storyOpts?.layout ? { layout: storyOpts?.layout || 'centered' } : {}),
        },
        ...(storyOpts?.argTypes ? { argTypes: storyOpts?.argTypes } : {}),
    });
