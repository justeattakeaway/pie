import { isServer } from 'lit';

interface DialogPolyfillType {
    registerDialog(dialog: HTMLDialogElement): void;
    forceRegisterDialog(dialog: HTMLDialogElement): void;
}

// Ensures that we don't re-import the module multiple times
let polyfillCached: DialogPolyfillType | undefined;

// This is a fake polyfill that does nothing. It's used on the server to avoid breaking SSR by importing the polyfill (it isn't universal code - contains Window references etc).
function getFakePolyfill (): DialogPolyfillType {
    return {
        registerDialog: (dialog: HTMLDialogElement): void => {
            console.warn('Fake registerDialog called');
        },
        forceRegisterDialog: (dialog: HTMLDialogElement): void => {
            console.warn('Fake forceRegisterDialog called');
        },
    };
}

async function getPolyfill (): Promise<DialogPolyfillType> {
    if (polyfillCached) {
        return polyfillCached;
    }

    if (isServer) {
        polyfillCached = getFakePolyfill();
    } else {
        // Use the `default` export since it's exported as a default in the type definitions.
        polyfillCached = await import('dialog-polyfill').then((module) => module.default);
    }

    // Ensure we're returning a value that matches DialogPolyfillType
    return polyfillCached || getFakePolyfill();
}

export default getPolyfill;
