export interface StorybookContext {
    globals: {
        writingDirection: 'ltr' | 'rtl' | 'auto';
    };
    component: string;
    viewMode: string;
}
