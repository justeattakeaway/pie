/**
 * A decorator for specifying a list of valid values for a property.
 * If this property's setter is called with an invalid value, an error is logged and the default value will be assigned instead.
 * The decorator supports single values or a string of comma separated values
 * @param validValues - The array of valid values
 * @param defaultValue - The value to fall back on
 * @returns  - The decorator function
 */
export const validPropertyValues = <T>(componentName: string, validValues: readonly T[], defaultValue: T) => function validatePropertyValues (target: object, propertyKey: string): void {
    const privatePropertyKey = `#${propertyKey}`;

    Object.defineProperty(target, propertyKey, {
        get (): T {
            return this[privatePropertyKey];
        },
        set (value: T): void {
            let isValid;
            const oldValue = this[privatePropertyKey];
            const isCommaSeparatedValue = typeof value === 'string' && value.includes(',');

            if (isCommaSeparatedValue) {
                isValid = value.trim().split(',').every((i) => validValues.includes(i as T));
            } else {
                isValid = validValues.includes(value);
            }

            if (!isValid) {
                console.error(
                        `<${componentName}> Invalid value "${value}" provided for property "${propertyKey}".`,
                        `Must be ${isCommaSeparatedValue ? 'a combination of values separated with a comma' : 'one of'}: ${validValues.join(' | ')}.`,
                        `Falling back to default value: "${defaultValue}"`,
                );
                this[privatePropertyKey] = defaultValue;
            } else {
                this[privatePropertyKey] = value;
            }

            this.requestUpdate(propertyKey, oldValue);
        },
    });
};
