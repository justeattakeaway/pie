import { TemplateResult } from 'lit';
import { StoryOptions } from '../types/StoryOptions';

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
    },
});
