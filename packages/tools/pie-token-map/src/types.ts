export const tokenCategories = [
    'color',
    'typography',
    'radius',
    'spacing',
    'elevation',
    'gradient',
    'motion',
    'breakpoint',
    'zIndex',
] as const;

export type TokenCategory = typeof tokenCategories[number];

export type CssVarRef = `var(--dt-${string})`;

export interface TypographyTokenValue {
    family: CssVarRef;
    weight: CssVarRef;
    size?: CssVarRef;
    lineHeight?: CssVarRef;
    sizeWide?: CssVarRef;
    lineHeightWide?: CssVarRef;
    sizeNarrow?: CssVarRef;
    lineHeightNarrow?: CssVarRef;
    fontStyle?: CssVarRef;
    textDecoration?: CssVarRef;
    paragraph?: CssVarRef;
}
