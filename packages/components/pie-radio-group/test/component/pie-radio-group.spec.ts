import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieRadio } from '@justeattakeaway/pie-radio';
import { PieRadioGroup, type RadioGroupProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-radio-group"]';
const radioSelector = 'input[type="radio"]';
const radioElements = [
    '<pie-radio value="radio-one" data-test-id="pie-radio-one">radio 1</pie-radio>',
    '<pie-radio value="radio-two" data-test-id="pie-radio-two">radio 2</pie-radio>'
];

test.describe('PieRadioGroup - Component tests', () => {
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieRadioGroup);
        await component.unmount();

        const radioComponent = await mount(PieRadio);
        await radioComponent.unmount();
    });

    test('should render successfully', async ({ mount, page }) => {
        await mount(PieRadioGroup, {
            props: {} as RadioGroupProps,
            slots: {
                default: '<pie-radio name="radio-one" value="radio-one">radio 1</pie-radio>',
            },
        });

        const radioGroup = page.locator(componentSelector);
        expect(radioGroup).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('disabled', () => {
            test.describe('when true', () => {
                test('should disable the slotted radio component', async ({ mount }) => {
                    const component = await mount(PieRadioGroup, {
                        props: {
                            disabled: true,
                        } as RadioGroupProps,
                        slots: {
                            default: '<pie-radio value="radio-one">radio 1</pie-radio>',
                        },
                    });

                    const radio = component.locator(radioSelector);
                    expect(radio).toBeDisabled();
                });
            });

            test.describe('when false', () => {
                test('should keep the slotted radio component enabled', async ({ mount }) => {
                    const component = await mount(PieRadioGroup, {
                        props: {
                            disabled: false,
                        } as RadioGroupProps,
                        slots: {
                            default: '<pie-radio value="radio-one">radio 1</pie-radio>',
                        },
                    });

                    const radio = component.locator(radioSelector);
                    expect(radio).not.toBeDisabled();
                });

                test('should disable the radio component if it has the `disabled` attribute', async ({ mount }) => {
                    const component = await mount(PieRadioGroup, {
                        props: {
                            disabled: false,
                        } as RadioGroupProps,
                        slots: {
                            default: '<pie-radio disabled value="radio-one">radio 1</pie-radio>',
                        },
                    });

                    const radio = component.locator(radioSelector);
                    expect(radio).toBeDisabled();
                });
            });
        });

        test.describe('value', () => {
            test('should select the radio matching the `value` prop', async ({ mount }) => {
                // Arrange
                const component = await mount(PieRadioGroup, {
                    props: {
                        value: 'radio-two',
                    } as RadioGroupProps,
                    slots: {
                        default: radioElements,
                    },
                });

                // Act
                const firstRadio = component.locator('[data-test-id="pie-radio-one"] input');
                const secondRadio = component.locator('[data-test-id="pie-radio-two"] input');

                // Assert
                expect(await firstRadio.isChecked()).toBe(false);
                expect(await secondRadio.isChecked()).toBe(true);
            });
        });
    });

    test.describe('Radio group behaviour', () => {
        test('should only allow one radio to be selected at a time', async ({ mount }) => {
            // Arrange
            const component = await mount(PieRadioGroup, {
                props: {} as RadioGroupProps,
                slots: {
                    default: radioElements,
                },
            });

            // Act
            const firstRadio = component.locator('[data-test-id="pie-radio-one"] input');
            const secondRadio = component.locator('[data-test-id="pie-radio-two"] input');

            await firstRadio.click();

            // Assert
            expect(await firstRadio.isChecked()).toBe(true);
            expect(await secondRadio.isChecked()).toBe(false);
        });

        test('should trigger change event when a radio is selected', async ({ mount }) => {
            // Arrange
            const messages: string[] = [];
            const expectedEventMessage = 'Change event dispatched';

            const component = await mount(PieRadioGroup, {
                props: {} as RadioGroupProps,
                slots: {
                    default: radioElements,
                },
                on: {
                    change: () => {
                        messages.push(expectedEventMessage);
                    },
                },
            });

            // Act
            const firstRadio = component.locator(`${radioSelector}[value="radio-one"]`);
            await firstRadio.click();

            // Assert
            expect(messages).toEqual([expectedEventMessage]);
        });
    });
});
