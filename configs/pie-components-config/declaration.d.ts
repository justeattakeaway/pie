// This is a placeholder value that is swapped out
// with the component package.json version at build time by Vite.
declare const __PACKAGE_VERSION__: string;

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.scss?inline' {
    const content: Record<string, string>;
    export default content;
}
