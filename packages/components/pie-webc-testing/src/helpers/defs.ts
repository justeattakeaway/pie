/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * This test helper type contains the same keys as the component prop interface.
 * The values can be either a single value or an array of values.
 * This is useful for testing components that have multiple props with the same type.
 * @example
 * interface TestComponentProps {
 *     foo: string;
 *     bar: number;
 * }
 * const testComponentProps: PropObject<TestComponentProps> = {
 *     foo: 'foo',
 *     bar: [1, 2, 3],
 * };
 */
export type PropObject<T = Record<string, unknown>> = {
    [K in keyof T]: T[K] | Readonly<T[K][]>;
};

export type WebComponentPropValues = {
    [key: string]: any;
};

export type WebComponentTestInput = {
    propValues: WebComponentPropValues;
    renderedString: string;
};

export type WebComponentRenderFn = (propVals: WebComponentPropValues) => string;
