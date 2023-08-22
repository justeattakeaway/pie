declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
// dummy change

declare module '*.scss?inline' {
    const content: Record<string, string>;
    export default content;
}
