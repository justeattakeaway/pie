declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.scss?inline' {
    const content: Record<string, string>;
    export default content;
}

declare module '@justeattakeaway/pie-icons-configs';
