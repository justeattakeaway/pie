/**
 * Dispatch a custom event.
 *
 * To be used whenever we have custom events we want to
 * bubble up through the component.
 * Bubbles and composed event props are set to true.
 * @param {Element} element The element to dispatch the event from.
 * @param {string} eventType
 * @param {any} detail
 */
export function dispatchCustomEvent (element: Element, eventType: string, detail?: CustomEventInit['detail']) : void {
    if (!eventType.startsWith('pie-')) {
        console.warn('A custom event name should start with `pie-`');
    }
    const event = new CustomEvent(eventType, {
        bubbles: true,
        composed: true,
        detail,
    });

    element.dispatchEvent(event);
}
