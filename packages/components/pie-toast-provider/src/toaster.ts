import { type PieToastProvider } from './index';
import { type ExtendedToastProps } from './defs';

/**
 * Singleton toaster interface for global access.
 */
export const toaster = {
    _getToastProvider (providerId?: string): PieToastProvider | null {
        // 1. Explicit ID lookup
        if (providerId) {
            const el = document.getElementById(providerId);

            if (!el || el.tagName.toLowerCase() !== 'pie-toast-provider') {
                console.error(`No pie-toast-provider found with id "${providerId}".`);
                return null;
            }

            return el as PieToastProvider;
        }

        // 2. Closest ancestor of the focused element (e.g. a button inside a modal with its own provider)
        const closest = document.activeElement?.closest('pie-toast-provider') as PieToastProvider | null;
        if (closest) return closest;

        // 3. Sole provider in the DOM
        const providers = document.querySelectorAll('pie-toast-provider');

        if (providers.length === 0) {
            console.error('No pie-toast-provider found in the DOM. Add a <pie-toast-provider> element to your page or at the root of your application.');
            return null;
        }

        if (providers.length > 1) {
            console.error('Multiple pie-toast-provider elements found. Use the `providerId` option to target a specific provider.');
            return null;
        }

        return providers[0] as PieToastProvider;
    },
    create (toast: ExtendedToastProps) {
        const toastProvider = this._getToastProvider(toast.providerId);
        if (!toastProvider) return;

        toastProvider.createToast(toast);
    },
    clearAll (providerId?: string) {
        const toastProvider = this._getToastProvider(providerId);
        if (!toastProvider) return;

        toastProvider.clearToasts();
    },
};
