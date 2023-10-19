/* eslint-disable max-classes-per-file */
import { LitElement } from 'lit';
import {
    vi, expect, it,
} from 'vitest';
import { defineCustomElement } from '../defineCustomElement';

it('should call console.warn when a component is defined twice', () => {
    // Arrange
    class MockComponentA extends LitElement {}

    const warnSpy = vi.spyOn(console, 'warn');
    const errorSpy = vi.spyOn(console, 'error');

    // Act
    defineCustomElement('mock-component-a', MockComponentA);
    defineCustomElement('mock-component-a', MockComponentA);

    // Assert
    const [[warning]] = warnSpy.mock.calls;

    expect(warnSpy).toHaveBeenCalledOnce();
    expect(warning).toMatch('PIE Web Component: "mock-component-a" has already been defined. Please ensure the component is only being defined once in your application.');
    expect(errorSpy).not.toHaveBeenCalled();
    expect(customElements.get('mock-component-a')).toBe(MockComponentA);
});

it('should define the component without warnings when called once', () => {
    // Arrange
    class MockComponentB extends LitElement {}

    const warnSpy = vi.spyOn(console, 'warn');
    const errorSpy = vi.spyOn(console, 'error');

    // Act
    defineCustomElement('mock-component-b', MockComponentB);

    // Assert
    expect(warnSpy).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
    expect(customElements.get('mock-component-b')).toBe(MockComponentB);
});

it('should warn when defining the same component name with a different class', () => {
    // Arrange
    class MockComponentC extends LitElement {}

    class MockComponentD extends LitElement {}

    const warnSpy = vi.spyOn(console, 'warn');
    const errorSpy = vi.spyOn(console, 'error');

    // Act
    defineCustomElement('mock-component-c', MockComponentC);
    defineCustomElement('mock-component-c', MockComponentD);

    // Assert
    const [[warning]] = warnSpy.mock.calls;

    expect(warnSpy).toHaveBeenCalledOnce();
    expect(warning).toMatch('PIE Web Component: "mock-component-c" has already been defined. Please ensure the component is only being defined once in your application.');
    expect(errorSpy).not.toHaveBeenCalled();
    expect(customElements.get('mock-component-c')).toBe(MockComponentC);
});
