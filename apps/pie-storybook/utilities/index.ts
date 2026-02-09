import { html, type TemplateResult } from 'lit';
import DOMPurify from 'dompurify';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { StoryOptions, BackgroundValue } from '../types/StoryOptions';
import CUSTOM_BACKGROUNDS from '../.storybook/backgrounds';

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
 * @param {DOMPurify.Config} [config={}] - Optional DOMPurify configuration object to customize sanitization.
 * @returns {import('lit/directives/unsafe-html.js').UnsafeHTMLDirective} A Lit directive that can be used in a Lit template to render the sanitized content.
 */
export const sanitizeAndRenderHTML = (slot: string, config: DOMPurify.Config = {}) => unsafeHTML(DOMPurify.sanitize(slot, config) as string);

export type PropDisplayOptions<T> = {
    hiddenProps?: (keyof T)[];
    propLabels?: {
        [K in keyof T]?: {
            [value: string]: string;
        };
    };
};

/**
 * Creates a story that renders all combinations of given prop options for a Lit web component.
 *
 * @template T The type representing the properties of the Lit web component.
 *
 * @param {TemplateFunction<T>} template - The function responsible for rendering the Lit web component.
 * @param {Record<keyof T, unknown[]>} propOptions - An object defining the possible values for each prop.
 * @param {StoryOptions & PropDisplayOptions & { multiColumn?: boolean }} [storyOpts] - Optional story configuration including background color, controls, layout and whether to
 * display in multiple columns.
 *
 * @returns {Object} Returns an object containing a render function that displays all combinations of the given prop options.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createVariantStory = <T extends Record<string, any>>(
    template: TemplateFunction<T>,
    propOptions: Partial<Record<keyof T, unknown[]>>,
    storyOpts?: StoryOptions & PropDisplayOptions<T> & { multiColumn?: boolean },
) => ({
        render: () => {
            const generateCombinations = (options: Partial<Record<keyof T, unknown[]>>): T[] => {
                const keys = Object.keys(options) as (keyof T)[];
                const combinations: T[] = [];

                const buildCombination = (index: number, currentCombination: Partial<T>) => {
                    if (index === keys.length) {
                        combinations.push(currentCombination as T);
                        return;
                    }

                    const key = keys[index];
                    const values = options[key] || [];

                    values.forEach((value) => {
                        buildCombination(index + 1, { ...currentCombination, [key]: value });
                    });
                };

                buildCombination(0, {});
                return combinations;
            };

            const propCombinations = generateCombinations(propOptions);
            const backgroundValue = CUSTOM_BACKGROUNDS.values.find((bg: BackgroundValue) => bg.name === storyOpts?.bgColor)?.value || '#ffffff';

            const gridStyle = storyOpts?.multiColumn ? `
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
                width: 100%;
            ` : `
                display: flex;
                flex-direction: column;
                gap: 16px;
                width: 100%;
            `;

            return html`
            <style>
                .grid {
                    ${gridStyle}
                }

                @media (max-width: 768px) {
                    .grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 375px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }
                }

                .grid-item {
                    border: 1px solid black;
                    padding: 16px;
                    box-sizing: border-box;
                }

                .props-display {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 8px;
                    font-family: monospace;
                    background-color: var(--dt-color-background-default);
                    padding: 8px;
                    border-radius: 4px;
                }

                .template-container {
                    margin-top: 16px;
                    border: 2px dashed #aaa;
                    padding: 8px;
                    border-radius: 4px;
                    background-color: var(--background-color, #ffffff);
                }
            </style>
            <div class="grid">
                ${propCombinations.map((props) => {
                const typedProps = props as T;

                return html`
                        <div class="grid-item">
                            <div class="props-display">
                                ${Object.entries(typedProps)
                                    .filter(([key]) => !storyOpts?.hiddenProps?.includes(key as keyof T))
                                    .map(([key, value]) => {
                                        const displayValue = storyOpts?.propLabels?.[key as keyof T]?.[String(value)] || value;
                                        return html`
                                        <div><strong>${key}:</strong> ${JSON.stringify(displayValue)}</div>
                                    `;
                                    })}
                            </div>
                            <div class="template-container" style="--background-color: ${backgroundValue};">
                                ${template({ ...typedProps })}
                            </div>
                        </div>
                    `;
            })}
            </div>
        `;
        },
        parameters: {
            controls: {
                disable: true,
            },
            design: {
                disable: true,
            },
            actions: {
                disable: true,
            },
            a11y: {
                disable: true,
            },
        },
        ...(storyOpts?.argTypes ? { argTypes: storyOpts.argTypes } : {}),
    });
