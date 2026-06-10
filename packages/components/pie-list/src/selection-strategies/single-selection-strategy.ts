import { type NavigableOption } from '../defs';
import { type ListboxNavigationController, type SelectionStrategy } from '../listbox-navigation-controller';

export class SingleSelectionStrategy implements SelectionStrategy {
    private controller: ListboxNavigationController;

    constructor (controller: ListboxNavigationController) {
        this.controller = controller;
    }

    resetActiveState () {
        const { options } = this.controller;
        if (options.length === 0) return;

        // Priority: existing aria-activedescendant > selected item > first item.
        const activeIndex = this.controller.getActiveDescendantIndex();
        if (activeIndex !== -1) {
            this.controller.setActive(options[activeIndex]);
            return;
        }

        const selected = options.find((opt) => opt.selected);
        this.controller.setActive(selected ?? options[0]);
    }

    handleKeyDown (event: KeyboardEvent, currentIndex: number) {
        let nextIndex = -1;

        if (event.key === 'ArrowDown') {
            nextIndex = currentIndex + 1;
        } else if (event.key === 'ArrowUp') {
            nextIndex = currentIndex - 1;
        } else {
            return;
        }

        const { options } = this.controller;
        if (nextIndex >= 0 && nextIndex < options.length) {
            event.preventDefault();
            this.handleSingleSelectFlow(options[nextIndex], nextIndex);
        }
    }

    handleOptionClick (option: NavigableOption, index: number) {
        this.handleSingleSelectFlow(option, index);
    }

    private handleSingleSelectFlow (targetOption: NavigableOption, targetIndex: number) {
        const { options } = this.controller;

        options.forEach((opt, i) => {
            if (i !== targetIndex && opt.selected) {
                this.controller.toggleSelection(opt, false);
            }
        });

        this.controller.toggleSelection(targetOption, true);
        this.controller.setActive(targetOption);
    }
}
