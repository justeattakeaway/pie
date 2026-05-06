declare module 'react-syntax-highlighter' {
    export const PrismLight: {
        (props: Record<string, unknown>): unknown;
        registerLanguage(name: string, func: unknown): void;
    };
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/scss' {
    const scss: unknown;
    export default scss;
}
