import type { Meta } from '@storybook/web-components';
/**
 * Type `StoryMeta` enhances Storybook's `Meta` type with additional type safety.
 *
 * @template T - Represents the props of the component in the story. This should be an interface or type that matches the props of the component.
 *
 * @property {object} argTypes - Represents the types of the args of the component. Each key is a prop from the component, and the value should be an object that defines controls for the Storybook UI.
 *
 * @property {T} args - Represents the initial values of the component's props. These values are what Storybook will use as the initial props for your component when a story is shown.
 *
 * @example
 * // StoryMeta for a component with `name` and `age` props
 * interface ComponentProps = { name: string, age: number };
 * const componentMeta: StoryMeta<ComponentProps> = {
 *     argTypes: {
 *         name: { control: 'text' },
 *         age: { control: 'number' }
 *     },
 *     args: {
 *         name: 'John',
 *         age: 30
 *     }
 * };
 */
export type StoryMeta<T> = Meta & {
    argTypes: {
        [K in keyof T]: object;
    };
    args: T;
};
