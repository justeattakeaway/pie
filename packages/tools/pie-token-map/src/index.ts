import type { CssVarRef, TokenCategory, TypographyTokenValue } from './types.js';
import { colorMap } from './generated/color-map.js';
import { typographyMap } from './generated/typography-map.js';
import { radiusMap } from './generated/radius-map.js';
import { spacingMap } from './generated/spacing-map.js';
import { elevationMap } from './generated/elevation-map.js';
import { gradientMap } from './generated/gradient-map.js';
import { motionMap } from './generated/motion-map.js';
import { breakpointMap } from './generated/breakpoint-map.js';
import { zIndexMap } from './generated/z-index-map.js';
import { tokensVersion } from './generated/version.js';

export type { CssVarRef, TokenCategory, TypographyTokenValue } from './types.js';
export { tokenCategories } from './types.js';

export type { ColorTokenName } from './generated/color-map.js';
export type { TypographyTokenName } from './generated/typography-map.js';
export type { RadiusTokenName } from './generated/radius-map.js';
export type { SpacingTokenName } from './generated/spacing-map.js';
export type { ElevationTokenName } from './generated/elevation-map.js';
export type { GradientTokenName } from './generated/gradient-map.js';
export type { MotionTokenName } from './generated/motion-map.js';
export type { BreakpointTokenName } from './generated/breakpoint-map.js';
export type { ZIndexTokenName } from './generated/z-index-map.js';

export { colorTokenNames, colorMap } from './generated/color-map.js';
export { typographyTokenNames, typographyMap } from './generated/typography-map.js';
export { radiusTokenNames, radiusMap } from './generated/radius-map.js';
export { spacingTokenNames, spacingMap } from './generated/spacing-map.js';
export { elevationTokenNames, elevationMap } from './generated/elevation-map.js';
export { gradientTokenNames, gradientMap } from './generated/gradient-map.js';
export { motionTokenNames, motionMap } from './generated/motion-map.js';
export { breakpointTokenNames, breakpointMap } from './generated/breakpoint-map.js';
export { zIndexTokenNames, zIndexMap } from './generated/z-index-map.js';
export { tokensVersion } from './generated/version.js';

export function getColor (name: string): CssVarRef | undefined {
    return (colorMap as Record<string, CssVarRef>)[name];
}

export function getTypography (name: string): TypographyTokenValue | undefined {
    return (typographyMap as Record<string, TypographyTokenValue>)[name];
}

export function getRadius (name: string): CssVarRef | undefined {
    return (radiusMap as Record<string, CssVarRef>)[name];
}

export function getSpacing (name: string): CssVarRef | undefined {
    return (spacingMap as Record<string, CssVarRef>)[name];
}

export function getElevation (name: string): CssVarRef | undefined {
    return (elevationMap as Record<string, CssVarRef>)[name];
}

export function getGradient (name: string): CssVarRef | undefined {
    return (gradientMap as Record<string, CssVarRef>)[name];
}

export function getMotion (name: string): CssVarRef | undefined {
    return (motionMap as Record<string, CssVarRef>)[name];
}

export function getBreakpoint (name: string): CssVarRef | undefined {
    return (breakpointMap as Record<string, CssVarRef>)[name];
}

export function getZIndex (name: string): CssVarRef | undefined {
    return (zIndexMap as Record<string, CssVarRef>)[name];
}

const categoryMaps: Record<TokenCategory, Record<string, CssVarRef | TypographyTokenValue>> = {
    color: colorMap,
    typography: typographyMap,
    radius: radiusMap,
    spacing: spacingMap,
    elevation: elevationMap,
    gradient: gradientMap,
    motion: motionMap,
    breakpoint: breakpointMap,
    zIndex: zIndexMap,
};

export function hasToken (category: TokenCategory, name: string): boolean {
    return name in categoryMaps[category];
}

export const tokenMap = {
    getColor,
    getTypography,
    getRadius,
    getSpacing,
    getElevation,
    getGradient,
    getMotion,
    getBreakpoint,
    getZIndex,
    hasToken,
    version: tokensVersion,
    colors: colorMap,
    typography: typographyMap,
    radii: radiusMap,
    spacing: spacingMap,
    elevation: elevationMap,
    gradients: gradientMap,
    motion: motionMap,
    breakpoints: breakpointMap,
    zIndices: zIndexMap,
};
