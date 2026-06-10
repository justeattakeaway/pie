import { type NavigableOption } from '../defs';
import { type ListboxNavigationController, type SelectionStrategy } from '../listbox-navigation-controller';

export class SingleSelectionStrategy implements SelectionStrategy {
    private controller: ListboxNavigationController;

    constructor (controller: ListboxNavigationController) {
        this.controller = controller;
    }

    resetTabindexState () {
        const { options } = this.controller;
        if (options.length === 0) return;

        const activeIndex = this.controller.getActiveDescendantIndex();
        const selectedIndex = options.findIndex((opt) => opt.selected);
        const targetIndex = activeIndex !== -1
            ? activeIndex
            : (selectedIndex !== -1 ? selectedIndex : 0);

        options.forEach((option, i) => {
            option.tabIndex = (i === targetIndex) ? 0 : -1;
        });
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
        this.controller.focusOption(targetIndex);
    }
}
