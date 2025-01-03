import { type PieToastProvider } from './index';
import { type ExtendedToastProps } from './defs';

/**
 * Singleton toaster interface for global access.
 */
export const toaster = {
    _getToastProvider (): PieToastProvider | null {
        const toastProviders = document.querySelectorAll('pie-toast-provider');

        if (toastProviders.length === 0) {
            console.error('ToastProvider is not initialized.');
            return null;
        }

        if (toastProviders.length > 1) {
            console.error('Multiple PieToastProviders are found in the DOM. Only one provider is supported currently and should be registered at the root of the app.');
            return null;
        }

        return toastProviders[0];
    },
    create (toast: ExtendedToastProps) {
        const toastProvider = this._getToastProvider();
        if (!toastProvider) return;

        toastProvider.createToast(toast);
    },
    clearAll () {
        const toastProvider = this._getToastProvider();
        if (!toastProvider) return;

        toastProvider.clearToasts();
    },
};
