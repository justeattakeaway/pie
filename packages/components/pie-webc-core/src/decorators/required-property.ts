/**
 * A decorator for marking a property as required.
 * If the property's value is `undefined`, `null` or empty string, an error is logged.
 * @returns {Function} - The decorator function.
 */
export const requiredProperty = <T>(componentName: string) => function validateRequiredProperty (target: object, propertyKey: string): void {
    const privatePropertyKey = `#${propertyKey}`;

    Object.defineProperty(target, propertyKey, {
        get (): T {
            return this[privatePropertyKey];
        },
        set (value: T): void {
            if (value === undefined || value === null || (typeof value === 'string' && value.trim() === '')) {
                console.error(`<${componentName}> Missing required attribute "${propertyKey}"`);
            }
            this[privatePropertyKey] = value;
        },
        configurable: true,
    });
};
