import { type WebComponentPropValues, type WebComponentTestInput, type WebComponentRenderFn } from './defs';

export function createTestWebComponent (propVals: WebComponentPropValues, componentRenderFn: WebComponentRenderFn): WebComponentTestInput {
    const testComponent: WebComponentTestInput = {
        propValues: propVals,
        renderedString: componentRenderFn(propVals),
    };

    return testComponent;
}
