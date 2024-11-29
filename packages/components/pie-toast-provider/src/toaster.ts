import { type PieToastProvider } from './index';
import { type ExtendedToastProps } from './defs';

/**
 * Singleton toaster interface for global access.
 */
export const toaster = {
    _getToastProvider (): PieToastProvider | null {
        const toastProvider = document.querySelector('pie-toast-provider') as PieToastProvider;

        if (!toastProvider) {
            console.error('ToastProvider is not initialized.');
            return null;
        }

        return toastProvider;
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
