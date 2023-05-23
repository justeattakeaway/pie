import fs from 'fs-extra';
import path from 'path';
import { addReactWrapper } from '../scripts/add-react-wrapper';
import removeReactWrapper from '../scripts/remove-react-wrapper';

const loadJSON = (file) => JSON.parse(fs.readFileSync(path.resolve(__dirname, file)));

const mockExample = loadJSON('./mocks/mock-custom-elements.json');

describe('React Wrapper', () => {
    it('should be added from mock custom elements JSON', () => {
        const wrapper = addReactWrapper(mockExample, 'pie-wrapper-react');

        expect(wrapper).toMatchSnapshot();
    });

    it('should only be added if the component contains custom elements', () => {
        mockExample.modules.forEach((m) => {
            m.declarations[0].customElement = false;
        });

        const wrapper = addReactWrapper(mockExample, 'pie-wrapper-react');

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.length).toBe(0);
    });

    it('should leave the events object empty if the component contains no custom events', () => {
        mockExample.modules.forEach((m) => {
            m.declarations[0].customElement = true;
            delete m.declarations[0].events;
        });

        const wrapper = addReactWrapper(mockExample, 'pie-wrapper-react');

        const result = 'events: { }';

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

    it('should be removed from the component after dist is built', () => {
        const wrapper = removeReactWrapper(mockExample);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toBe(undefined);
    });
});
