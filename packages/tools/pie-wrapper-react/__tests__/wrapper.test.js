import genReactWrapper from '../scripts/react-gen-wrapper.js';
import removeReactWrapper from '../scripts/react-remove-wrapper.js';
import fs from 'fs-extra';

const loadJSON = (path) => JSON.parse(fs.readFileSync(__dirname + path));

describe('React: Generate Wrapper', () => {
    it('generates wrapper from mock custom elements JSON', () => {    

      const wrapper = genReactWrapper(loadJSON(`/mocks/mock-custom-elements.json`))

      expect(wrapper).toMatchSnapshot();
    });
});

describe('React: Remove Wrapper', () => {
      it('removes generated wrapper from mock component', () => {

      const wrapper = removeReactWrapper(loadJSON(`/mocks/mock-custom-elements.json`))

      expect(wrapper).toMatchSnapshot();

      fs.unlinkSync(__dirname + '/mocks/mock-button.ts')
    });
})


