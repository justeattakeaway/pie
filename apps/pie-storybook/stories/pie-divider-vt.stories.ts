import { html } from 'lit';
import { type Meta } from '@storybook/web-components';
import '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';

import {
    type DividerProps, defaultProps, orientations,
} from '@justeattakeaway/pie-divider';

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

const longLabel = 'Lorem ipsum dolor sit amet consectetur' as const;

export const Default = () => html`
    <div class="variant-grid">
        ${orientations.map((orientation) => ['', 'Label', longLabel].map((label) => html`
                <web-component-test-wrapper
                    propKeyValues="${generatePropKeyValues({ orientation, label })}">
                    <div style="height:250px">
                        <pie-divider slot="component"
                            variant="default"
                            orientation="${orientation}"
                            label="${label || ''}">
                        </pie-divider>
                    </div>
                </web-component-test-wrapper>
            `))}
    </div>
`;

export const Inverse = () => html`
    <div class="variant-grid">
        ${orientations.map((orientation) => ['', 'Label', longLabel].map((label) => html`
            <web-component-test-wrapper
                propKeyValues="${generatePropKeyValues({ orientation, label })}"
                ?darkMode="${'inverse'}">
                <pie-divider slot="component"
                    variant="inverse"
                    orientation="${orientation}"
                    label="${label || ''}">
                </pie-divider>
            </web-component-test-wrapper>
        `))}
    </div>
`;
