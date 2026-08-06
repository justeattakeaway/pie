import { addReactWrapper, loadCustomElementsFile } from '../scripts/add-react-wrapper';

describe('React Wrapper', () => {
    let mockExample;

    beforeAll(() => {
        mockExample = loadCustomElementsFile('__tests__/mocks');
    });

    it('should be added from mock custom elements JSON', () => {
        const wrapper = addReactWrapper(mockExample);

        expect(wrapper).toMatchSnapshot();
    });

    it('should only be added if the component contains custom elements', () => {
        mockExample.modules.forEach((m) => {
            m.declarations[0].customElement = false;
        });

        const wrapper = addReactWrapper(mockExample);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.length).toBe(0);
    });

    it('should leave the events object empty if the component contains no custom events', () => {
        mockExample.modules.forEach((m) => {
            m.declarations[0].customElement = true;
            delete m.declarations[0].events;
        });

        const wrapper = addReactWrapper(mockExample);

        const result = 'events: {}';

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.includes(result)).toBe(true);
    });

    it('should be named the same as the component itself', () => {
        mockExample.modules.forEach((m) => {
            m.declarations[0].name = 'ButtonComponent';
        });

        const wrapper = addReactWrapper(mockExample, 'pie-wrapper-react');

        const result = 'export const ButtonComponent';

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.includes(result)).toBe(true);
    });

    it('should generate a controlled-input wrapper for components with a value field and an input event', () => {
        const inputManifest = {
            schemaVersion: '1.0.0',
            readme: '',
            modules: [
                {
                    kind: 'javascript-module',
                    path: 'pie-wrapper-react',
                    declarations: [
                        {
                            kind: 'class',
                            description: '',
                            name: 'PieTextInput',
                            members: [
                                { kind: 'field', name: 'value' },
                            ],
                            events: [
                                { name: 'input', type: { text: 'InputEvent' } },
                                { name: 'change', type: { text: 'CustomEvent' } },
                            ],
                            superclass: { name: 'LitElement', package: 'lit' },
                            tagName: 'pie-text-input',
                            customElement: true,
                        },
                    ],
                },
            ],
        };

        const wrapper = addReactWrapper(inputManifest);

        // The controlled wrapper replaces the direct createComponent export.
        expect(wrapper).toContain('React.forwardRef<PieTextInputLit, PieTextInputWrapperProps>');
        expect(wrapper).toContain('lastAppliedValueRef');
        expect(wrapper).toContain("PieTextInputControlled.displayName = 'PieTextInput'");
        expect(wrapper).toContain('export const PieTextInput = PieTextInputControlled');
        // The value prop must not be forwarded to the underlying createComponent element.
        expect(wrapper).not.toContain('export const PieTextInput = PieTextInputReact');
        expect(wrapper).toMatchSnapshot();
    });

    it('should not generate a controlled-input wrapper for components without an input event', () => {
        const noInputManifest = {
            schemaVersion: '1.0.0',
            readme: '',
            modules: [
                {
                    kind: 'javascript-module',
                    path: 'pie-wrapper-react',
                    declarations: [
                        {
                            kind: 'class',
                            description: '',
                            name: 'PieSelect',
                            members: [
                                { kind: 'field', name: 'value' },
                            ],
                            events: [
                                { name: 'change', type: { text: 'CustomEvent' } },
                            ],
                            superclass: { name: 'LitElement', package: 'lit' },
                            tagName: 'pie-select',
                            customElement: true,
                        },
                    ],
                },
            ],
        };

        const wrapper = addReactWrapper(noInputManifest);

        expect(wrapper).toContain('export const PieSelect = PieSelectReact');
        expect(wrapper).not.toContain('lastAppliedValueRef');
    });
});
