import {
    describe,
    it,
    expect,
    vi,
} from 'vitest';

import { PieFormManager } from '../../forms/pie-form-manager';

describe('PieFormManager', () => {
    describe('addForm', () => {
        it('correctly sets up a submit event listener when a form is added', () => {
            // Arrange
            document.body.innerHTML = `
                <form id="testForm"></form>
            `;

            const testForm = document.getElementById('testForm') as HTMLFormElement;
            const manager = new PieFormManager();
            const addEventListenerSpy = vi.spyOn(testForm, 'addEventListener');

            // Act
            manager.addForm(testForm);

            // Assert
            expect(addEventListenerSpy).toHaveBeenCalledWith('submit', expect.any(Function));
        });

        it('does not throw an error when trying to add the same form multiple times', () => {
            // Arrange
            document.body.innerHTML = `
                <form id="testForm"></form>
            `;

            const testForm = document.getElementById('testForm') as HTMLFormElement;
            const manager = new PieFormManager();

            // Act
            const addForm = () => manager.addForm(testForm);

            // Assert
            expect(addForm).not.toThrow();
        });
    });

    describe('getForm', () => {
        it('returns the PieFormData object associated with a form', () => {
            // Arrange
            document.body.innerHTML = `
                <form id="testForm"></form>
            `;

            const testForm = document.getElementById('testForm') as HTMLFormElement;
            const manager = new PieFormManager();
            manager.addForm(testForm);

            // Act
            const result = manager.getForm(testForm);

            // Assert
            expect(result?.form).toStrictEqual(testForm);
        });

        it('returns undefined when a form is not in the manager', () => {
            // Arrange
            document.body.innerHTML = `
                <form id="testForm"></form>
            `;

            const testForm = document.getElementById('testForm') as HTMLFormElement;
            const manager = new PieFormManager();

            // Act
            const result = manager.getForm(testForm);

            // Assert
            expect(result).toBeUndefined();
        });

        it('returns undefined when a form has been deleted', () => {
            // Arrange
            document.body.innerHTML = `
                <form id="testForm"></form>
            `;

            const testForm = document.getElementById('testForm') as HTMLFormElement;
            const manager = new PieFormManager();
            manager.addForm(testForm);
            manager.deleteForm(testForm);

            // Act
            const result = manager.getForm(testForm);

            // Assert
            expect(result).toBeUndefined();
        });
    });

    describe('deleteForm', () => {
        it('does not return the PieFormData object associated with a form after it has been deleted', () => {
            // Arrange
            document.body.innerHTML = `
                <form id="testForm"></form>
            `;

            const testForm = document.getElementById('testForm') as HTMLFormElement;
            const manager = new PieFormManager();
            manager.addForm(testForm);

            // Act
            manager.deleteForm(testForm);
            const result = manager.getForm(testForm);

            // Assert
            expect(result).toBeUndefined();
        });

        it('correctly removes the submit event listener when a form is deleted', () => {
            // Arrange
            document.body.innerHTML = `
                <form id="testForm"></form>
            `;

            const testForm = document.getElementById('testForm') as HTMLFormElement;
            const manager = new PieFormManager();

            const addEventListenerSpy = vi.spyOn(testForm, 'addEventListener');
            manager.addForm(testForm);
            const removeEventListenerSpy = vi.spyOn(testForm, 'removeEventListener');

            // Act
            manager.deleteForm(testForm);

            // Assert
            expect(removeEventListenerSpy).toHaveBeenCalled();

            const [addEvent, addCallback] = addEventListenerSpy.mock.calls[0];
            const [removeEvent, removeCallback] = removeEventListenerSpy.mock.calls[0];

            expect(addEvent).toStrictEqual(removeEvent);
            expect(addCallback).toStrictEqual(removeCallback);
        });

        it('does not throw an error when trying to delete a form that is not in the manager', () => {
            // Arrange
            document.body.innerHTML = `
                <form id="testForm"></form>
            `;

            const testForm = document.getElementById('testForm') as HTMLFormElement;
            const manager = new PieFormManager();

            // Act
            const deleteForm = () => manager.deleteForm(testForm);

            // Assert
            expect(deleteForm).not.toThrow();
        });

        it('does not throw an error when trying to delete a form that has already been deleted', () => {
            // Arrange
            document.body.innerHTML = `
                <form id="testForm"></form>
            `;

            const testForm = document.getElementById('testForm') as HTMLFormElement;
            const manager = new PieFormManager();

            manager.addForm(testForm);
            manager.deleteForm(testForm);

            // Act
            const deleteForm = () => manager.deleteForm(testForm);

            // Assert
            expect(deleteForm).not.toThrow();
        });

        it('does not throw an error when trying to delete a form that has been removed from the DOM', () => {
            // Arrange
            document.body.innerHTML = `
                <form id="testForm"></form>
            `;

            const testForm = document.getElementById('testForm') as HTMLFormElement;
            const manager = new PieFormManager();

            manager.addForm(testForm);
            document.body.removeChild(testForm);

            // Act
            const deleteForm = () => manager.deleteForm(testForm);

            // Assert
            expect(deleteForm).not.toThrow();
        });
    });
});
