import genReactWrapper from '../scripts/react-gen-wrapper.js';
import removeReactWrapper from '../scripts/react-remove-wrapper.js';
import fs from 'fs-extra';

const loadJSON = (path) => JSON.parse(fs.readFileSync(__dirname + path));

describe('React Wrapper', () => {
    it('should generate wrapper from mock custom elements JSON', () => {

      const wrapper = genReactWrapper(loadJSON(`/mocks/mock-custom-elements.json`))

      expect(wrapper).toMatchSnapshot();
    });

    it('should remove generated wrapper from mock component', () => {

      const wrapper = removeReactWrapper(loadJSON(`/mocks/mock-custom-elements.json`))

      expect(wrapper).toMatchSnapshot();
    });
})


