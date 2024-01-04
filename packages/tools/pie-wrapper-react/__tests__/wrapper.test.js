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
});
