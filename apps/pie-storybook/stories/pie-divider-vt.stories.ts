import { html } from 'lit';
import { type Meta } from '@storybook/web-components';
import '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';

import {
    type DividerProps, defaultProps, orientations, variants,
} from '@justeattakeaway/pie-divider';

import { getAllPropCombinations } from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos';

const props = {
    orientation: orientations,
    label: ['', 'Label', 'Lorem ipsum dolor sit amet consectetur'],
};

type DividerStoryMeta = Meta<DividerProps>;

const defaultArgs: DividerProps = { ...defaultProps };

const visualTestStoryMeta: DividerStoryMeta = {
    title: 'Divider/Visual Test',
    component: 'pie-divider',
    args: defaultArgs,
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export default visualTestStoryMeta;

const generatePropKeyValues = (props: DividerProps) => `orientation: ${props.orientation}, label: ${props.label || '-'}`;

const propCombinations = getAllPropCombinations(props);

export const Default = () => html`
    ${propCombinations.map(({ variant, orientation, label }) => {
    const propKeyValues = generatePropKeyValues({ variant, orientation, label });

    return html`
        <web-component-test-wrapper propKeyValues="${propKeyValues}">
            <div style="${orientation === 'vertical' ? 'height: 250px;' : ''}" slot="component">
                <pie-divider
                    variant="default"
                    orientation="${orientation}" 
                    label="${label}">
                </pie-divider>
            </div>
        </web-component-test-wrapper>
      `;
})}
`;

export const Inverse = () => html`
    ${propCombinations.map(({ variant, orientation, label }) => {
    const propKeyValues = generatePropKeyValues({ variant, orientation, label });

    return html`
        <web-component-test-wrapper propKeyValues="${propKeyValues}" darkMode="${variant === 'inverse'}">
            <div style="${orientation === 'vertical' ? 'height: 250px;' : ''}" slot="component">
                <pie-divider
                    variant="inverse"
                    orientation="${orientation}" 
                    label="${label}">
                </pie-divider>
            </div>
        </web-component-test-wrapper>
      `;
})}
`;
