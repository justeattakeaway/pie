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

        // Priority: existing aria-activedescendant > first selected > first item.
        const activeIndex = this.controller.getActiveDescendantIndex();
        if (activeIndex !== -1) {
            this.controller.setActive(options[activeIndex]);
            return;
        }

        const firstSelected = options.find((opt) => opt.selected);
        this.controller.setActive(firstSelected ?? options[0]);
    }

    handleKeyDown (event: KeyboardEvent, currentIndex: number) {
        const { options } = this.controller;
        switch (event.key) {
            case 'ArrowDown': {
                event.preventDefault();
                const next = currentIndex + 1;
                if (next < options.length) this.controller.setActive(options[next]);
                break;
            }
            case 'ArrowUp': {
                event.preventDefault();
                const prev = currentIndex - 1;
                if (prev >= 0) this.controller.setActive(options[prev]);
                break;
            }
            case ' ':
            case 'Spacebar': {
                event.preventDefault();
                const option = options[currentIndex];
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
