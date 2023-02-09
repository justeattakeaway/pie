/**
 * A decorator for specifying a list of valid values for a property.
 * If this property's setter is called with an invalid value, an error is logged and the default value will be assigned instead.
 * @param validValues - The array of valid values
 * @param defaultValue - The value to fall back on
 * @returns
 */
export const validValues = (validValues: any[], defaultValue: any) => {
    return function (target: any, propertyKey: string) : void {
        const privatePropertyKey = `_${propertyKey}`;

        Object.defineProperty(target, propertyKey, {
            get () : any {
                return target[privatePropertyKey];
            },
            set (value: any) : void {
                const oldValue = target[privatePropertyKey];

                if (!validValues.includes(value)) {
                    console.error(
                        `Invalid type value provided: "${value}".`,
                        `Must be one of: ${validValues.join(' | ')}.`,
                        `Falling back to default value: "${defaultValue}"`
                    );
                    target[privatePropertyKey] = defaultValue;
                } else {
                    target[privatePropertyKey] = value;
                }

                this.requestUpdate(propertyKey, oldValue);
            }
        });
    }
};
