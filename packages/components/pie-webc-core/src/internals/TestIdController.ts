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
 * Triggered after every host update via `hostUpdated`, so it survives re-renders
 * and works regardless of whether a subclass overrides `updated()`. It is a
 * no-op unless a consumer has set an override, and never runs during server
 * rendering.
 *
 * The DOM mutation is deferred to a microtask rather than performed synchronously
 * in `hostUpdated`. Some internal `data-test-id` attributes are interpolated
 * (`data-test-id="${...}"`), which makes their host elements Lit attribute parts
 * that are tracked during SSR hydration. Mutating those attributes synchronously
 * inside the update flush interleaves with Lit hydrating sibling/descendant parts
 * in the same tree, desyncing its part walk and throwing "Unexpected
 * TemplateResult rendered to part". A microtask always runs after the current
 * synchronous hydration pass has settled, so the rename can never interleave with
 * it.
 */
export class TestIdController implements ReactiveController {
    private host: Host;

    private renameQueued = false;

    constructor (host: Host) {
        this.host = host;
        host.addController(this);
    }

    hostUpdated (): void {
        // The rename is a client-only DOM operation; SSR output keeps data-test-id.
        if (isServer) {
            return;
        }

        // No override configured — leave the default behaviour untouched (zero cost).
        if (getPieTestIdAttribute() === DEFAULT_TEST_ID_ATTRIBUTE) {
            return;
        }

        // Coalesce repeated updates into a single pending rename.
        if (this.renameQueued) {
            return;
        }

        this.renameQueued = true;

        // Defer out of the synchronous update/hydration flush (see class comment).
        queueMicrotask(() => {
            this.renameQueued = false;
            this.renameTestIdAttributes();
        });
    }

    private renameTestIdAttributes (): void {
        const attribute = getPieTestIdAttribute();

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
            // The selector guarantees the attribute exists; this guard only
            // narrows getAttribute's `string | null` return for setAttribute below.
            if (value === null) {
                return;
            }

            element.setAttribute(attribute, value);
            element.removeAttribute(DEFAULT_TEST_ID_ATTRIBUTE);
        });
    }
}
