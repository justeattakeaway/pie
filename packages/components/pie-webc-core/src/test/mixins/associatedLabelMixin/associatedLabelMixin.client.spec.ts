import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import {
    describe,
    it,
    expect,
    beforeEach,
    afterEach,
    vi,
} from 'vitest';

import { AssociatedLabelMixin, type GenericConstructor } from '../../../index';

const safariUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15';
const chromeUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

describe('AssociatedLabelMixin', () => {
    const componentSelector = 'associated-label-mixin-mock';

    @customElement(componentSelector)
    class MockComponent extends AssociatedLabelMixin(LitElement as unknown as GenericConstructor<LitElement & { _internals: ElementInternals }>) {
        // A minimal stand-in for the `_internals` provided by `FormControlMixin` in real usage,
        // set directly by tests before the element is connected to the document.
        public _internals = { labels: [] } as unknown as ElementInternals;

        render () {
            return html`<div>Mock Component</div>`;
        }
    }

    async function createConnectedMockInstance (labels: HTMLLabelElement[]): Promise<MockComponent> {
        const instance = document.createElement(componentSelector) as MockComponent;
        instance._internals = { labels } as unknown as ElementInternals;
        document.body.appendChild(instance);
        await instance.updateComplete;
        return instance;
    }

    let userAgentSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        document.body.innerHTML = '';
        userAgentSpy = vi.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(safariUserAgent);
    });

    afterEach(() => {
        userAgentSpy.mockRestore();
    });

    describe('when running in Safari', () => {
        it('should mirror the text content of a single associated label', async () => {
            // Arrange
            const label = document.createElement('label');
            label.textContent = 'Marketing emails';

            // Act
            const component = await createConnectedMockInstance([label]);

            // Assert
            expect(component.associatedLabelText).toBe('Marketing emails');
        });

        it('should join and normalise whitespace across multiple associated labels', async () => {
            // Arrange
            const labelOne = document.createElement('label');
            labelOne.textContent = '  Marketing   \n emails ';
            const labelTwo = document.createElement('label');
            labelTwo.textContent = 'for offers';

            // Act
            const component = await createConnectedMockInstance([labelOne, labelTwo]);

            // Assert
            expect(component.associatedLabelText).toBe('Marketing emails for offers');
        });

        it('should leave associatedLabelText undefined when there are no associated labels', async () => {
            // Act
            const component = await createConnectedMockInstance([]);

            // Assert
            expect(component.associatedLabelText).toBeUndefined();
        });

        it('should leave associatedLabelText undefined when the only associated label has no text', async () => {
            // Arrange
            const label = document.createElement('label');

            // Act
            const component = await createConnectedMockInstance([label]);

            // Assert
            expect(component.associatedLabelText).toBeUndefined();
        });

        it('should update associatedLabelText when an associated label mutates', async () => {
            // Arrange
            const label = document.createElement('label');
            label.textContent = 'Original text';
            const component = await createConnectedMockInstance([label]);
            expect(component.associatedLabelText).toBe('Original text');

            // Act
            label.textContent = 'Updated text';
            await vi.waitFor(() => expect(component.associatedLabelText).toBe('Updated text'));
        });

        it('should stop observing associated labels once disconnected', async () => {
            // Arrange
            const label = document.createElement('label');
            label.textContent = 'Original text';
            const component = await createConnectedMockInstance([label]);
            expect(component.associatedLabelText).toBe('Original text');

            // Act
            component.remove();
            label.textContent = 'Updated text';

            // Assert - give any pending MutationObserver callback a chance to (not) fire
            await new Promise((resolve) => { setTimeout(resolve, 0); });
            expect(component.associatedLabelText).toBe('Original text');
        });
    });

    describe('when not running in Safari', () => {
        it('should leave associatedLabelText undefined even when associated labels exist', async () => {
            // Arrange
            userAgentSpy.mockReturnValue(chromeUserAgent);
            const label = document.createElement('label');
            label.textContent = 'Marketing emails';

            // Act
            const component = await createConnectedMockInstance([label]);

            // Assert
            expect(component.associatedLabelText).toBeUndefined();
        });
    });
});
