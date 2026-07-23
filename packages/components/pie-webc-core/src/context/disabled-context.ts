import { createContext } from '@lit/context';

/**
 * Context a container uses to tell its descendants it is disabled, so they can reflect it (for
 * example a disabled `pie-radio-group` / `pie-checkbox-group` suppressing a `pie-list-item`'s
 * interactive hover and active states). Defaults to `false` when no ancestor provides it.
 *
 * This is deliberately generic: any disabling ancestor can provide it and any descendant can
 * consume it. Like `ariaContext`, it crosses shadow boundaries and reaches descendants at any depth
 * without prop drilling, and decouples the provider from the consumer.
 */
export const parentDisabledContext = createContext<boolean>(Symbol('pie-parent-disabled'));
