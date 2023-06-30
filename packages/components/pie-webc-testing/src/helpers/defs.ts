/* eslint-disable @typescript-eslint/no-explicit-any */
export type PropObject = {
    [key: string]: any;
};

export type WebComponentPropValues = {
    [key: string]: any;
};

export type WebComponentTestInput = {
    propValues: WebComponentPropValues;
    renderedString: string;
};

export type WebComponentRenderFn = (propVals: WebComponentPropValues) => string;
