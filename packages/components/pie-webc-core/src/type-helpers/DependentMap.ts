/**
 * A type alias that represents a specialized version of the built-in Map type, but with a custom get method that enforces stricter type checking
 */
export type DependentMap<T> = Omit<Map<keyof T, T[keyof T]>, 'get'> & {
    get<K extends keyof T>(key: K): T[K] | undefined;
}
