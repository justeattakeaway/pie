import { html, type TemplateResult } from 'lit';

// The content shown once the loading region finishes loading.
const restaurantNames = ['The Golden Fork', 'Pizza Piazza', 'Sushi Central'];

const skeletonRow = () => html`
    <div class="c-demoRow">
        <pie-skeleton variant="circle" height="40px"></pie-skeleton>
        <div class="c-demoRowText">
            <pie-skeleton variant="text" height="font-body-l" lines="2"></pie-skeleton>
        </div>
    </div>`;

const loadedRow = (name: string) => html`
    <div class="c-demoRow">
        <span class="c-demoAvatar" aria-hidden="true">${name.charAt(0)}</span>
        <div class="c-demoRowText">
            <p class="c-demoName">${name}</p>
            <p class="c-demoMeta">Open now</p>
        </div>
    </div>`;

// The region starts idle (no skeletons, no content) so that entering the loading state is a real
// change for a screen reader to announce, rather than a state that is already present on load.
type LoadingState = 'idle' | 'loading' | 'loaded';

const nextState: Record<LoadingState, LoadingState> = {
    idle: 'loading',
    loading: 'loaded',
    loaded: 'idle',
};

// The live region message per state. It is empty while idle so that setting "Loading restaurants"
// is a change the live region can announce.
const stateMessages: Record<LoadingState, string> = {
    idle: '',
    loading: 'Loading restaurants',
    loaded: 'Restaurants loaded',
};

const stateButtonLabels: Record<LoadingState, string> = {
    idle: 'Load content',
    loading: 'Finish loading',
    loaded: 'Reset',
};

/**
 * Advances the loading region to its next state (idle -> loading -> loaded -> idle). While loading
 * it shows the skeletons and marks the region busy; when it loads it hides the skeletons, shows the
 * content, clears the busy state and updates the live region, so screen readers announce the change.
 */
const advanceLoadingRegion = (event: Event) => {
    const button = event.currentTarget as HTMLElement;
    const wrapper = button.closest<HTMLElement>('[data-demo-wrapper]');
    const region = wrapper?.querySelector<HTMLElement>('[data-loading-region]');

    if (!wrapper || !region) return;

    const currentState = (wrapper.getAttribute('data-state') as LoadingState) ?? 'idle';
    const next = nextState[currentState];

    wrapper.setAttribute('data-state', next);
    region.setAttribute('aria-busy', next === 'loading' ? 'true' : 'false');

    const message = region.querySelector<HTMLElement>('[data-loading-message]');
    if (message) message.textContent = stateMessages[next];

    const skeletonContent = region.querySelector<HTMLElement>('[data-skeleton-content]');
    const loadedContent = region.querySelector<HTMLElement>('[data-loaded-content]');
    skeletonContent?.toggleAttribute('hidden', next !== 'loading');
    loadedContent?.toggleAttribute('hidden', next !== 'loaded');

    button.textContent = stateButtonLabels[next];
};

/**
 * An accessible loading region: a container that owns the skeletons, announces the loading state
 * once with a visually hidden, localised message, and is marked `aria-busy` while loading. The
 * polite live region is on the message itself (rather than the busy container), so the busy state
 * does not defer its announcement. The region starts idle, so entering the loading state is an
 * actual change. Use the button to step through idle -> loading -> loaded.
 */
export const skeletonLoadingRegionTemplate = (): TemplateResult => html`
    <style>
        .c-demoWrapper {
            display: grid;
            gap: var(--dt-spacing-d);
            inline-size: 360px;
        }

        .c-demoRegion {
            display: grid;
            gap: var(--dt-spacing-c);
            min-block-size: 64px;
            padding: var(--dt-spacing-d);
            background-color: var(--dt-color-container-default);
            border-radius: var(--dt-radius-rounded-c);
        }

        .c-demoRegion [hidden] {
            display: none !important;
        }

        .c-demoRow {
            display: flex;
            align-items: center;
            gap: var(--dt-spacing-c);
        }

        .c-demoRow > pie-skeleton:first-child {
            inline-size: 40px;
            flex: 0 0 auto;
        }

        .c-demoRowText {
            flex: 1;
            display: grid;
            gap: var(--dt-spacing-a);
        }

        .c-demoAvatar {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            inline-size: 40px;
            block-size: 40px;
            flex: 0 0 auto;
            border-radius: 50%;
            background-color: var(--dt-color-container-strong);
            font-family: var(--dt-font-body-l-family);
            font-weight: var(--dt-font-weight-bold);
        }

        .c-demoName {
            margin: 0;
            font-family: var(--dt-font-body-l-family);
            font-size: var(--dt-font-body-l-size);
        }

        .c-demoMeta {
            margin: 0;
            color: var(--dt-color-content-subdued);
            font-family: var(--dt-font-body-s-family);
            font-size: var(--dt-font-body-s-size);
        }

        .c-demoVisuallyHidden {
            position: absolute;
            inline-size: 1px;
            block-size: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip-path: inset(50%);
            white-space: nowrap;
            border: 0;
        }
    </style>
    <div class="c-demoWrapper" data-demo-wrapper data-state="idle">
        <div
            class="c-demoRegion"
            data-loading-region
            aria-busy="false">
            <span
                class="c-demoVisuallyHidden"
                data-loading-message
                aria-live="polite"></span>
            <div data-skeleton-content hidden>
                ${[0, 1, 2].map(() => skeletonRow())}
            </div>
            <div data-loaded-content hidden>
                ${restaurantNames.map((name) => loadedRow(name))}
            </div>
        </div>
        <pie-button
            size="small"
            variant="secondary"
            data-load-button
            @click="${advanceLoadingRegion}">Load content</pie-button>
    </div>`;
