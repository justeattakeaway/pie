export type ComponentDefaultPropsGeneric<T, K extends keyof T = keyof T> = Readonly<Required<Pick<T, K>>>;
