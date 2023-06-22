/**
 * A decorator for marking a property as required.
 * If the property's value is `undefined`, `null` or empty string, an error is logged.
 * @returns {Function} - The decorator function.
 */
export const requiredProperty = (componentName: string) =>
    function (target: any, propertyKey: string): void {
        const privatePropertyKey = `#${propertyKey}`;

        Object.defineProperty(target, propertyKey, {
            get(): any {
                return this[privatePropertyKey];
            },
            set(value: any): void {
                const oldValue = this[privatePropertyKey];

                if (value === undefined || value === null || value === '') {
                    console.error(`<${componentName}> Missing required attribute "${propertyKey}"`);
                }
                this[privatePropertyKey] = value;

                this.requestUpdate(propertyKey, oldValue);
            },
        });
    };
