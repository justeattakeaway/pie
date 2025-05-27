/* eslint-disable max-classes-per-file */
import {
    describe, it, expect, vi, beforeEach,
} from 'vitest';
import { safeCustomElement } from '../../decorators/safe-custom-element';

describe('safeCustomElement', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('should register a custom element if it is not already registered', () => {
        // Arrange
        const tag = 'test-element-a';

        // Act
        @safeCustomElement(tag)
        class TestElementA extends HTMLElement { }

        // Assert
        expect(customElements.get(tag)).toBe(TestElementA);
    });

    it('should not throw an error if the custom element is already registered', () => {
        // Arrange
        const tag = 'test-element-b';

        class PredefinedElement extends HTMLElement {
            static v = '1.0.0';
        }
        customElements.define(tag, PredefinedElement);

        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
            // Intentionally left empty to suppress warnings during tests
        });

        // Act
        @safeCustomElement(tag)
        class TestElementB extends HTMLElement {
            static v = '1.0.0';
        }

        // Assert
        expect(customElements.get(tag)).toBe(PredefinedElement);
        expect(warnSpy).not.toHaveBeenCalled();
    });

    it('should log a warning if already registered with a different version', () => {
        // Arrange
        const tag = 'test-element-c';

        class PredefinedElement extends HTMLElement {
            static v = '1.0.0';
        }
        customElements.define(tag, PredefinedElement);

        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
            // Intentionally left empty to suppress warnings during tests
        });

        // Act
        @safeCustomElement(tag)
        class TestElementC extends HTMLElement {
            static v = '2.0.0';
        }

        // Assert
        expect(warnSpy).toHaveBeenCalledTimes(1);
        const [message, error] = warnSpy.mock.calls[0];
        expect(message).toBe(`PIE Web Component: "${tag}" was already registered with version: 1.0.0.`);
        expect(error).toBeInstanceOf(DOMException);
    });

    it('should log a warning with missing version info if none is available', () => {
        // Arrange
        const tag = 'test-element-d';

        class PredefinedElement extends HTMLElement { } // no static v property
        customElements.define(tag, PredefinedElement);

        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
            // Intentionally left empty to suppress warnings during tests
        });

        // Act
        @safeCustomElement(tag)
        class TestElementD extends HTMLElement {
            static v = '3.0.0';
        }

        // Assert
        expect(warnSpy).toHaveBeenCalledTimes(1);
        const [message, error] = warnSpy.mock.calls[0];
        expect(message).toContain(`PIE Web Component: "${tag}" was already registered with version: No version data found.`);
        expect(error).toBeInstanceOf(DOMException);
    });
});
