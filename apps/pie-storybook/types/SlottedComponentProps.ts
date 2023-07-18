/**
 * Type `SlottedComponentProps` enhances a component's prop type to include slot information, specifically for use in Storybook stories.
 *
 * @template T - Represents the original props of the component. This should be an interface or type that matches the props of the component.
 *
 * @property {string} slot - Represents the `slot` attribute for the web component. It is a DOM string attribute where the named slot is to be used as the container for all child nodes.
 *
 * The resulting type will have the same properties as `T`, plus a `slot` property.
 *
 * @example
 * // SlottedComponentProps for a component with `name` and `age` props
 * type ComponentProps = { name: string, age: number };
 * type SlottedProps = SlottedComponentProps<ComponentProps>;
 * // SlottedProps is now { name: string, age: number, slot: string }
 * // This enriched type can now be used to safely define Storybook args for a slotted component
 *
 */
export type SlottedComponentProps<T> = T & {
    slot: string;
};
