import { type NavigableOption } from '../defs';
import { type ListboxNavigationController, type SelectionStrategy } from '../listbox-navigation-controller';

export class MultiSelectionStrategy implements SelectionStrategy {
    private controller: ListboxNavigationController;

    constructor (controller: ListboxNavigationController) {
        this.controller = controller;
    }

    resetActiveState () {
        const { options } = this.controller;
        if (options.length === 0) return;

        // Priority: existing aria-activedescendant > first selected > first
        // non-disabled item (falling back to options[0] if all are disabled).
        const activeIndex = this.controller.getActiveDescendantIndex();
        if (activeIndex !== -1) {
            this.controller.setActive(options[activeIndex]);
            return;
        }

        const firstSelected = options.find((opt) => opt.selected);
        if (firstSelected) {
            this.controller.setActive(firstSelected);
            return;
        }

        const firstEnabledIndex = this.controller.findNextEnabled(0, 1);
        this.controller.setActive(options[firstEnabledIndex === -1 ? 0 : firstEnabledIndex]);
    }

    handleKeyDown (event: KeyboardEvent, currentIndex: number) {
        const { options } = this.controller;
        switch (event.key) {
            case 'ArrowDown': {
                event.preventDefault();
                const next = this.controller.findNextEnabled(currentIndex + 1, 1);
                if (next !== -1) this.controller.setActive(options[next]);
                break;
            }
            case 'ArrowUp': {
                event.preventDefault();
                const prev = this.controller.findNextEnabled(currentIndex - 1, -1);
                if (prev !== -1) this.controller.setActive(options[prev]);
                break;
            }
            case ' ':
            case 'Spacebar': {
                event.preventDefault();
                const option = options[currentIndex];
                if (option.disabled) break;
                this.controller.toggleSelection(option, !option.selected);
                break;
            }
            default:
                break;
        }
    }

    handleOptionClick (option: NavigableOption, index: number) {
        this.controller.toggleSelection(option, !option.selected);
        this.controller.setActive(this.controller.options[index]);
    }
}
