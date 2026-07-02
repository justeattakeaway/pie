const isMissing = <T>(value: T): boolean => value === undefined || value === null || (typeof value === 'string' && value.trim() === '');

/**
 * A decorator for marking a property as required.
 * If the property's value is `undefined`, `null` or empty string, an error is logged.
 *
 * This also checks on `connectedCallback` so a missing required property is still reported
 * even when the corresponding attribute is never set at all (in which case the property
 * setter below is never invoked).
 * @returns {Function} - The decorator function.
 */
export const requiredProperty = <T>(componentName: string) => function validateRequiredProperty (target: object, propertyKey: string): void {
    const privatePropertyKey = `#${propertyKey}`;
    const hasBeenSetKey = `#${propertyKey}HasBeenSet`;
    const hasWarnedKey = `#${propertyKey}HasWarned`;

    Object.defineProperty(target, propertyKey, {
        get (): T {
            return this[privatePropertyKey];
        },
        set (value: T): void {
            this[hasBeenSetKey] = true;

            if (isMissing(value)) {
                console.error(`<${componentName}> Missing required attribute "${propertyKey}"`);
            }
            this[privatePropertyKey] = value;
        },
        configurable: true,
    });

    const elementProto = target as { connectedCallback?: (this: Record<string, unknown>) => void };
    const originalConnectedCallback = elementProto.connectedCallback;

    elementProto.connectedCallback = function connectedCallback (this: Record<string, unknown>): void {
        originalConnectedCallback?.call(this);

        // Guard with a dedicated "has warned" flag (rather than reusing hasBeenSetKey) so an
        // element that reconnects repeatedly while still missing the prop (e.g. a virtualised
        // list recycling DOM nodes) only logs once, instead of on every reconnect.
        if (!this[hasBeenSetKey] && !this[hasWarnedKey]) {
            this[hasWarnedKey] = true;
            console.error(`<${componentName}> Missing required attribute "${propertyKey}"`);
        }
    };
};
