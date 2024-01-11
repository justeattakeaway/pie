/**
 * Wraps the native event in a custom event. This is useful for native events that have `composed` set to `false`
 * as these cannot propagate outside of the shadow DOM.
 * @param event - The native event.
 */
export function wrapNativeEvent (event: Event) {
    return new CustomEvent(event.type, {
        detail: {
            sourceEvent: event,
        },
        bubbles: event.bubbles,
        cancelable: event.cancelable,
    });
}
