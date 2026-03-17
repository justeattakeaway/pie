import { createRequire } from 'node:module';
import { describe, it, expect } from 'vitest';
import {
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
    tokenMap,
    colorMap,
    typographyMap,
    radiusMap,
    spacingMap,
    elevationMap,
    gradientMap,
    motionMap,
    breakpointMap,
    zIndexMap,
    tokensVersion,
    tokenCategories,
} from '../../src/index.js';
import type { TypographyTokenValue } from '../../src/index.js';

const require = createRequire(import.meta.url);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tokens = require('@justeat/pie-design-tokens/dist/tokens.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tokensPkg = require('@justeat/pie-design-tokens/package.json');

function getTypoToken (name: string): TypographyTokenValue {
    return typographyMap[name as keyof typeof typographyMap];
}

describe('pie-token-map', () => {
    describe('getColor', () => {
        it('should return a CSS var ref for a known color token', () => {
            expect(getColor('background-default')).toBe('var(--dt-color-background-default)');
        });

        it('should return a CSS var ref for interactive-brand', () => {
            expect(getColor('interactive-brand')).toBe('var(--dt-color-interactive-brand)');
        });

        it('should return undefined for an unknown color token', () => {
            expect(getColor('nonexistent-color')).toBeUndefined();
        });
    });

    describe('getTypography', () => {
        it('should return a composite value for a responsive heading token', () => {
            const result = getTypography('heading-xs') as TypographyTokenValue;
            expect(result).toBeDefined();
            expect(result.family).toBe('var(--dt-font-heading-xs-family)');
            expect(result.weight).toBe('var(--dt-font-heading-xs-weight)');
            expect(result.sizeWide).toBe('var(--dt-font-heading-xs-size--wide)');
            expect(result.lineHeightWide).toBe('var(--dt-font-heading-xs-line-height--wide)');
            expect(result.sizeNarrow).toBe('var(--dt-font-heading-xs-size--narrow)');
            expect(result.lineHeightNarrow).toBe('var(--dt-font-heading-xs-line-height--narrow)');
            expect(result.size).toBeUndefined();
            expect(result.lineHeight).toBeUndefined();
        });

        it('should return a composite value for a non-responsive body token', () => {
            const result = getTypography('body-s') as TypographyTokenValue;
            expect(result).toBeDefined();
            expect(result.family).toBe('var(--dt-font-body-s-family)');
            expect(result.weight).toBe('var(--dt-font-body-s-weight)');
            expect(result.size).toBe('var(--dt-font-body-s-size)');
            expect(result.lineHeight).toBe('var(--dt-font-body-s-line-height)');
            expect(result.paragraph).toBe('var(--dt-font-body-s-paragraph)');
            expect(result.sizeWide).toBeUndefined();
            expect(result.sizeNarrow).toBeUndefined();
        });

        it('should include fontStyle for italic heading tokens', () => {
            const result = getTypography('heading-m-italic') as TypographyTokenValue;
            expect(result).toBeDefined();
            expect(result.fontStyle).toBe('var(--dt-font-heading-m-italic-font-style)');
            expect(result.sizeWide).toBeDefined();
        });

        it('should include textDecoration for link tokens', () => {
            const result = getTypography('body-s-link') as TypographyTokenValue;
            expect(result).toBeDefined();
            expect(result.textDecoration).toBe('var(--dt-font-body-s-link-text-decoration)');
            expect(result.paragraph).toBeDefined();
        });

        it('should return undefined for an unknown typography token', () => {
            expect(getTypography('nonexistent')).toBeUndefined();
        });
    });

    describe('getRadius', () => {
        it('should return a CSS var ref for a known radius token', () => {
            expect(getRadius('rounded-a')).toBe('var(--dt-radius-rounded-a)');
        });

        it('should return undefined for an unknown radius token', () => {
            expect(getRadius('nonexistent')).toBeUndefined();
        });
    });

    describe('getSpacing', () => {
        it('should return a CSS var ref for a known spacing token', () => {
            expect(getSpacing('b')).toBe('var(--dt-spacing-b)');
        });

        it('should return undefined for an unknown spacing token', () => {
            expect(getSpacing('zzz')).toBeUndefined();
        });
    });

    describe('getElevation', () => {
        it('should return a CSS var ref for a known elevation token', () => {
            expect(getElevation('below-10')).toBe('var(--dt-elevation-below-10)');
        });

        it('should return undefined for an unknown elevation token', () => {
            expect(getElevation('nonexistent')).toBeUndefined();
        });
    });

    describe('getGradient', () => {
        it('should return a CSS var ref for a known gradient token', () => {
            expect(getGradient('jetplus-brand-01')).toBe('var(--dt-gradient-jetplus-brand-01)');
        });

        it('should return undefined for an unknown gradient token', () => {
            expect(getGradient('nonexistent')).toBeUndefined();
        });
    });

    describe('getMotion', () => {
        it('should return a CSS var ref for a known motion token', () => {
            expect(getMotion('easing-in')).toBe('var(--dt-motion-easing-in)');
        });

        it('should return a CSS var ref for a timing token', () => {
            expect(getMotion('timing-200')).toBe('var(--dt-motion-timing-200)');
        });

        it('should return undefined for an unknown motion token', () => {
            expect(getMotion('nonexistent')).toBeUndefined();
        });
    });

    describe('getBreakpoint', () => {
        it('should return a CSS var ref for a known breakpoint token', () => {
            expect(getBreakpoint('sm')).toBe('var(--dt-breakpoint-sm)');
        });

        it('should return undefined for an unknown breakpoint token', () => {
            expect(getBreakpoint('nonexistent')).toBeUndefined();
        });
    });

    describe('getZIndex', () => {
        it('should return a CSS var ref for a known z-index token', () => {
            expect(getZIndex('modal')).toBe('var(--dt-z-index-modal)');
        });

        it('should return a CSS var ref for toast', () => {
            expect(getZIndex('toast')).toBe('var(--dt-z-index-toast)');
        });

        it('should return undefined for an unknown z-index token', () => {
            expect(getZIndex('nonexistent')).toBeUndefined();
        });
    });

    describe('hasToken', () => {
        it('should return true for a known token', () => {
            expect(hasToken('color', 'background-default')).toBe(true);
        });

        it('should return false for an unknown token', () => {
            expect(hasToken('color', 'nonexistent')).toBe(false);
        });

        it('should work across all categories', () => {
            expect(hasToken('typography', 'body-s')).toBe(true);
            expect(hasToken('radius', 'rounded-a')).toBe(true);
            expect(hasToken('spacing', 'b')).toBe(true);
            expect(hasToken('elevation', 'below-10')).toBe(true);
            expect(hasToken('gradient', 'jetplus-brand-01')).toBe(true);
            expect(hasToken('motion', 'easing-in')).toBe(true);
            expect(hasToken('breakpoint', 'sm')).toBe(true);
            expect(hasToken('zIndex', 'modal')).toBe(true);
        });
    });

    describe('tokenMap convenience object', () => {
        it('should expose all getter methods', () => {
            expect(tokenMap.getColor('background-default')).toBe('var(--dt-color-background-default)');
            expect(tokenMap.getTypography('body-s')).toBeDefined();
            expect(tokenMap.getRadius('rounded-a')).toBe('var(--dt-radius-rounded-a)');
            expect(tokenMap.getSpacing('b')).toBe('var(--dt-spacing-b)');
            expect(tokenMap.getElevation('below-10')).toBe('var(--dt-elevation-below-10)');
            expect(tokenMap.getGradient('jetplus-brand-01')).toBe('var(--dt-gradient-jetplus-brand-01)');
            expect(tokenMap.getMotion('easing-in')).toBe('var(--dt-motion-easing-in)');
            expect(tokenMap.getBreakpoint('sm')).toBe('var(--dt-breakpoint-sm)');
            expect(tokenMap.getZIndex('modal')).toBe('var(--dt-z-index-modal)');
        });

        it('should expose hasToken', () => {
            expect(tokenMap.hasToken('color', 'background-default')).toBe(true);
            expect(tokenMap.hasToken('color', 'nonexistent')).toBe(false);
        });

        it('should expose version', () => {
            expect(tokenMap.version).toBe(tokensPkg.version);
        });

        it('should expose raw maps', () => {
            expect(tokenMap.colors).toBe(colorMap);
            expect(tokenMap.typography).toBe(typographyMap);
            expect(tokenMap.radii).toBe(radiusMap);
            expect(tokenMap.spacing).toBe(spacingMap);
            expect(tokenMap.elevation).toBe(elevationMap);
            expect(tokenMap.gradients).toBe(gradientMap);
            expect(tokenMap.motion).toBe(motionMap);
            expect(tokenMap.breakpoints).toBe(breakpointMap);
            expect(tokenMap.zIndices).toBe(zIndexMap);
        });
    });

    describe('tokenCategories', () => {
        it('should list all 9 categories', () => {
            expect(tokenCategories).toHaveLength(9);
            expect(tokenCategories).toContain('color');
            expect(tokenCategories).toContain('typography');
            expect(tokenCategories).toContain('radius');
            expect(tokenCategories).toContain('spacing');
            expect(tokenCategories).toContain('elevation');
            expect(tokenCategories).toContain('gradient');
            expect(tokenCategories).toContain('motion');
            expect(tokenCategories).toContain('breakpoint');
            expect(tokenCategories).toContain('zIndex');
        });
    });

    describe('version', () => {
        it('should match the design tokens package version', () => {
            expect(tokensVersion).toBe(tokensPkg.version);
        });
    });

    // -----------------------------------------------------------------------
    // Completeness tests — ensure generated maps cover all tokens in source
    // -----------------------------------------------------------------------
    describe('completeness', () => {
        it('should include all color alias tokens from tokens.json (excluding platform-specific) plus platform-agnostic aliases', () => {
            const platformPrefixes = ['android-', 'ios-'];
            const sourceNames = Object.keys(tokens.theme.jet.color.alias.default)
                .filter((name: string) => !platformPrefixes.some((prefix) => name.startsWith(prefix)));
            const platformAliases = ['container-base', 'container-base-dark', 'container-neutral', 'container-prominent'];

            sourceNames.forEach((name) => {
                expect(colorMap).toHaveProperty(name);
            });
            platformAliases.forEach((name) => {
                expect(colorMap).toHaveProperty(name);
            });
            expect(Object.keys(colorMap)).toHaveLength(sourceNames.length + platformAliases.length);
        });

        it('should not include platform-specific (android-*, ios-*) color tokens', () => {
            const platformNames = Object.keys(tokens.theme.jet.color.alias.default)
                .filter((name: string) => name.startsWith('android-') || name.startsWith('ios-'));
            expect(platformNames.length).toBeGreaterThan(0); // sanity check
            platformNames.forEach((name) => {
                expect(colorMap).not.toHaveProperty(name);
            });
        });

        it('should map platform-agnostic aliases to their web-prefixed CSS vars', () => {
            expect(getColor('container-base')).toBe('var(--dt-color-web-container-base)');
            expect(getColor('container-base-dark')).toBe('var(--dt-color-web-container-base-dark)');
            expect(getColor('container-neutral')).toBe('var(--dt-color-web-container-neutral)');
            expect(getColor('container-prominent')).toBe('var(--dt-color-web-container-prominent)');
        });

        it('should include all font alias tokens from tokens.json', () => {
            const sourceNames = Object.keys(tokens.theme.jet.font.alias);
            sourceNames.forEach((name) => {
                expect(typographyMap).toHaveProperty(name);
            });
            expect(Object.keys(typographyMap)).toHaveLength(sourceNames.length);
        });

        it('should include all radius alias tokens from tokens.json', () => {
            const sourceNames = Object.keys(tokens.theme.jet.radius.alias);
            sourceNames.forEach((name) => {
                expect(radiusMap).toHaveProperty(name);
            });
            expect(Object.keys(radiusMap)).toHaveLength(sourceNames.length);
        });

        it('should include all spacing alias tokens from tokens.json', () => {
            const sourceNames = Object.keys(tokens.theme.jet.spacing.alias);
            sourceNames.forEach((name) => {
                expect(spacingMap).toHaveProperty(name);
            });
            expect(Object.keys(spacingMap)).toHaveLength(sourceNames.length);
        });

        it('should include all elevation alias tokens from tokens.json', () => {
            const sourceNames = Object.keys(tokens.theme.jet.elevation.alias.default);
            sourceNames.forEach((name) => {
                expect(elevationMap).toHaveProperty(name);
            });
            expect(Object.keys(elevationMap)).toHaveLength(sourceNames.length);
        });

        it('should include all gradient alias tokens from tokens.json', () => {
            const sourceNames = Object.keys(tokens.theme.jet.gradient.alias.default);
            sourceNames.forEach((name) => {
                expect(gradientMap).toHaveProperty(name);
            });
            expect(Object.keys(gradientMap)).toHaveLength(sourceNames.length);
        });

        it('should include all motion global tokens from tokens.json', () => {
            const sourceNames = Object.keys(tokens.theme.jet.motion.global);
            sourceNames.forEach((name) => {
                expect(motionMap).toHaveProperty(name);
            });
            expect(Object.keys(motionMap)).toHaveLength(sourceNames.length);
        });

        it('should include all breakpoint alias tokens from tokens.json', () => {
            const sourceNames = Object.keys(tokens.theme.jet.breakpoint.alias);
            sourceNames.forEach((name) => {
                expect(breakpointMap).toHaveProperty(name);
            });
            expect(Object.keys(breakpointMap)).toHaveLength(sourceNames.length);
        });

        it('should include all 10 z-index tokens from pie-css', () => {
            const expectedNames = [
                'base', 'dropdown', 'fab', 'tooltip', 'popover',
                'bottom-sheet', 'side-sheet', 'modal', 'cookie-banner', 'toast',
            ];
            expectedNames.forEach((name) => {
                expect(zIndexMap).toHaveProperty(name);
            });
            expect(Object.keys(zIndexMap)).toHaveLength(expectedNames.length);
        });
    });

    describe('typography token structure', () => {
        it('should have responsive properties for all heading tokens', () => {
            Object.keys(typographyMap)
                .filter((n) => n.startsWith('heading-'))
                .forEach((name) => {
                    const token = getTypoToken(name);
                    expect(token.sizeWide).toBeDefined();
                    expect(token.sizeNarrow).toBeDefined();
                    expect(token.lineHeightWide).toBeDefined();
                    expect(token.lineHeightNarrow).toBeDefined();
                    expect(token.size).toBeUndefined();
                    expect(token.lineHeight).toBeUndefined();
                });
        });

        it('should have responsive properties for all subheading tokens', () => {
            Object.keys(typographyMap)
                .filter((n) => n.startsWith('subheading-'))
                .forEach((name) => {
                    const token = getTypoToken(name);
                    expect(token.sizeWide).toBeDefined();
                    expect(token.sizeNarrow).toBeDefined();
                });
        });

        it('should have non-responsive properties for body tokens', () => {
            Object.keys(typographyMap)
                .filter((n) => n.startsWith('body-'))
                .forEach((name) => {
                    const token = getTypoToken(name);
                    expect(token.size).toBeDefined();
                    expect(token.lineHeight).toBeDefined();
                    expect(token.sizeWide).toBeUndefined();
                    expect(token.sizeNarrow).toBeUndefined();
                });
        });

        it('should include fontStyle only for italic heading tokens', () => {
            Object.keys(typographyMap)
                .filter((n) => n.includes('italic'))
                .forEach((name) => {
                    expect(getTypoToken(name).fontStyle).toBeDefined();
                });

            Object.keys(typographyMap)
                .filter((n) => !n.includes('italic'))
                .forEach((name) => {
                    expect(getTypoToken(name).fontStyle).toBeUndefined();
                });
        });

        it('should include textDecoration only for link tokens', () => {
            Object.keys(typographyMap)
                .filter((n) => n.includes('link'))
                .forEach((name) => {
                    expect(getTypoToken(name).textDecoration).toBeDefined();
                });

            Object.keys(typographyMap)
                .filter((n) => !n.includes('link'))
                .forEach((name) => {
                    expect(getTypoToken(name).textDecoration).toBeUndefined();
                });
        });

        it('should include paragraph for body and caption tokens but not interactive or heading', () => {
            Object.keys(typographyMap)
                .filter((n) => n.startsWith('interactive-'))
                .forEach((name) => {
                    expect(getTypoToken(name).paragraph).toBeUndefined();
                });

            Object.keys(typographyMap)
                .filter((n) => n.startsWith('heading-'))
                .forEach((name) => {
                    expect(getTypoToken(name).paragraph).toBeUndefined();
                });
        });
    });
});
