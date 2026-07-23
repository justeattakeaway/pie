import { createContext } from '@lit/context';

/**
 * A bag of accessible-name/description values an ancestor component can supply to a descendant
 * across the shadow boundary (where `aria-labelledby` / `aria-describedby` IDREFs cannot reach).
 * Restricted to string ARIA that can be applied directly to an element.
 *
 * This is deliberately an extensible bag: any provider can set it (for example a `pie-list-item`
 * stitching its text), and any component can consume it and decide for itself what to do with each
 * field, applying it to whichever element carries its semantics. Extend it with further optional
 * string/boolean ARIA as needed; a consumer simply ignores fields it does not apply. There is no
 * shared "apply" helper on purpose: where and how each field maps is component-specific (a radio
 * names its host, a checkbox its internal input), so each subscriber owns that logic even if a
 * little set/remove code is repeated. That keeps the contract open to new ARIA without a central
 * mapper having to know how every component applies it.
 */
export interface ContextualAria {
    label?: string;
    description?: string;
}

/**
 * Context carrying a `ContextualAria` from a provider down to a consuming component. `undefined`
 * when no ancestor provides ARIA (for example a standalone control).
 *
 * Why a context rather than ARIA props on each component:
 * - it lets a wrapper name a control it does not own, carrying a resolved string across the shadow
 *   boundary that `aria-labelledby` / `aria-describedby` IDREFs cannot cross;
 * - it reaches consumers at any depth below the provider without prop drilling through the layers
 *   in between;
 * - it decouples provider from consumer (neither needs a reference to, or knowledge of, the other)
 *   and is extensible by adding optional fields that consumers opt into.
 * It is always a fallback behind a control's own ARIA props.
 */
export const ariaContext = createContext<ContextualAria | undefined>(Symbol('pie-aria'));
