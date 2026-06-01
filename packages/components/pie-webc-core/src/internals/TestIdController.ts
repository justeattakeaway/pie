import {
    type ReactiveController, type ReactiveControllerHost, isServer,
} from 'lit';

import {
    DEFAULT_TEST_ID_ATTRIBUTE, getPieTestIdAttribute,
} from '../functions/testIdAttribute';

type Host = ReactiveControllerHost & Element;

/**
 * Renames a component's internal `data-test-id` attributes to a consumer-
 * configured attribute name (e.g. `data-qa`) so a single `getByTestId` strategy
 * works end-to-end.
 *
 * Runs after every host update via `hostUpdated`, so it survives re-renders and
 * works regardless of whether a subclass overrides `updated()`. It is a no-op
 * unless a consumer has set an override, and never runs during server rendering.
 */
export class TestIdController implements ReactiveController {
    private host: Host;

    constructor (host: Host) {
        this.host = host;
        host.addController(this);
    }

    hostUpdated (): void {
        // The rename is a client-only DOM operation; SSR output keeps data-test-id.
        if (isServer) {
            return;
        }

        const attribute = getPieTestIdAttribute();

        // No override configured — leave the default behaviour untouched (zero cost).
        if (attribute === DEFAULT_TEST_ID_ATTRIBUTE) {
            return;
        }

        const root = this.host.shadowRoot;
        if (!root) {
            return;
        }

        // querySelectorAll does not pierce shadow boundaries, so this only ever
        // touches THIS component's internals — nested PIE components run their own
        // pass, and consumer light-DOM / slotted content is never affected.
        root.querySelectorAll(`[${DEFAULT_TEST_ID_ATTRIBUTE}]`).forEach((element) => {
            const value = element.getAttribute(DEFAULT_TEST_ID_ATTRIBUTE);
            if (value === null) {
                return;
            }

            element.setAttribute(attribute, value);
            element.removeAttribute(DEFAULT_TEST_ID_ATTRIBUTE);
        });
    }
}
