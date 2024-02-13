/**
 * Dispatch a custom event.
 *
 * To be used whenever we have behavioural events we want to
 * bubble up through the component.
 * @param {Element} element The element to dispatch the event from.
 * @param {string} eventType
 * @param {any} detail
 */
export function dispatchCustomEvent (element: Element, eventType: string, detail?: CustomEventInit['detail']) : void {
    const event = new CustomEvent(eventType, {
        bubbles: true,
        composed: true,
        detail,
    });

    element.dispatchEvent(event);
}
