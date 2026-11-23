import designTokens from '@justeat/pie-design-tokens/dist/tokens.json';

/**
 * The typography identifiers PIE components accept for text heights: the design token alias names
 * (without the `--dt-` prefix and `-size` suffix), e.g. `font-body-l`.
 *
 * Derived from the tokens at build time, so it stays in sync automatically. The `strong` and
 * `italic` variants are excluded because they share the same font size and line height as their
 * base identifier, which is all a size-based component such as pie-skeleton uses.
 */
export const typographyIdentifiers = Object.keys(designTokens.theme.jet.font.alias)
    .map((identifier) => `font-${identifier}`)
    .filter((identifier) => !identifier.includes('strong') && !identifier.includes('italic'));
