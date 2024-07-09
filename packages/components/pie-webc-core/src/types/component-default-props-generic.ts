/**
 * This type should be used when defining the default props for a component.
 * It is a generic type that takes two type parameters:
 * - `T` is the type of the props object that the default props are being defined for.
 * - `K` is the type of the keys in `T` that should be required in the default props.
 * By default, `K` is set to be all the keys in `T`. This means that all the keys in `T` will be required in the default props.
 * You can override this by specifying a subset of the keys in `T` that should be required in the default props.
 *
 * @example ```tsx
 * interface MyComponentProps {
 *   a: string;
 *   b?: number;
 *   c: boolean;
 * }
 * const allProps: ComponentDefaultProps<MyComponentProps> = {
 *   a: 'default value',
 *   b: 42,
 *   c: true,
 * };
 *
 * const pickProps: ComponentDefaultProps<MyComponentProps, 'a'> = {
 *   a: 'default value',
 * };
 *
 * const omitProps: ComponentDefaultProps<MyComponentProps, keyof Omit<MyComponentProps, 'a'>> = {
 *   b: 42,
 *   c: true,
 * };
 * ```
 */
export type ComponentDefaultProps<T, K extends keyof T = keyof T> = Readonly<Required<Pick<T, K>>>;
