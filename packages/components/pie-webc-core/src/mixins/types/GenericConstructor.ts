/**
 * A type representing a constructor of any class.
 * @typedef {new (...args: any[]) => T} Constructor
 * @template T
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericConstructor<T> = new (...args: any[]) => T;
