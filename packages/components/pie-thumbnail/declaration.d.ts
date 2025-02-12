declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.scss?inline' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.svg?inline' {
    const content: string;
    export default content;
}
