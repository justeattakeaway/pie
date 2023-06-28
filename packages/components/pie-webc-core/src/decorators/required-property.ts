/**
 * @param componentName - The name of your component. This is included in any error logs.
 * @returns - A function that returns the decorator function.
 */
export const requiredPropertyDecoratorFactory = (componentName: string) => {
    /**
     * A decorator for marking a property as required.
     * If the property's value is `undefined`, `null` or empty string, an error is logged.
     * @returns {Function} - The decorator function.
     */
    const requiredProperty = <T>() => function validateRequiredProperty (target: object, propertyKey: string): void {
        const privatePropertyKey = `#${propertyKey}`;

        Object.defineProperty(target, propertyKey, {
            get (): T {
                return this[privatePropertyKey];
            },
            set (value: T): void {
                const oldValue = this[privatePropertyKey];

                if (value === undefined || value === null || (typeof value === 'string' && value.trim() === '')) {
                    console.error(`<${componentName}> Missing required attribute "${propertyKey}"`);
                }
                this[privatePropertyKey] = value;

                this.requestUpdate(propertyKey, oldValue);
            },
        });
    };

    return requiredProperty;
};
