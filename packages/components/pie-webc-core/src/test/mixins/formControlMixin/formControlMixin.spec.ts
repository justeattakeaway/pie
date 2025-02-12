import {
    describe, test, expect, beforeEach, afterEach,
} from 'vitest';
import { MockComponent } from './MockComponent';
import 'element-internals-polyfill';

describe('FormControlMixin', () => {
    let mockComponent: MockComponent;
    let form: HTMLFormElement;

    beforeEach(() => {
        // Create new instances for each test
        mockComponent = new MockComponent();
        form = document.createElement('form');
        // Add to DOM immediately to ensure proper initialization
        document.body.appendChild(mockComponent);
    });

    afterEach(() => {
        // Clean up DOM
        document.body.innerHTML = '';
    });

    describe('form property', () => {
        describe('when no form exists', () => {
            test('should not have an associated form', async () => {
                // Wait for component to be ready
                await mockComponent.updateComplete;

                // Act
                const associatedForm = mockComponent.form;

                // Assert
                expect(associatedForm).toBeFalsy();
            });
        });

        describe('when inside of a form', () => {
            test('should return the associated form', async () => {
                // Arrange
                form.id = 'testForm';
                form.action = '/foo';
                form.method = 'POST';

                // Move component into form
                document.body.removeChild(mockComponent);
                document.body.appendChild(form);
                form.appendChild(mockComponent);

                // Wait for component to be ready
                await mockComponent.updateComplete;

                // Act
                const associatedForm = mockComponent.form;

                // Assert
                expect(associatedForm).toBeTruthy();
                expect(associatedForm?.id).toBe('testForm');
            });
        });

        describe('when not inside of an existing form', () => {
            test('should not have an associated form', async () => {
                // Arrange
                form.id = 'siblingForm';
                document.body.appendChild(form);

                // Wait for component to be ready
                await mockComponent.updateComplete;

                // Act
                const associatedForm = mockComponent.form;

                // Assert
                expect(associatedForm).toBeFalsy();
            });
        });
    });
});
