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

        // Priority: existing aria-activedescendant > selected item > first
        // non-disabled item (falling back to options[0] if all are disabled).
        const activeIndex = this.controller.getActiveDescendantIndex();
        if (activeIndex !== -1) {
            this.controller.setActive(options[activeIndex]);
            return;
        }

        const selected = options.find((opt) => opt.selected);
        if (selected) {
            this.controller.setActive(selected);
            return;
        }

        const firstEnabledIndex = this.controller.findNextEnabled(0, 1);
        this.controller.setActive(options[firstEnabledIndex === -1 ? 0 : firstEnabledIndex]);
    }

    handleKeyDown (event: KeyboardEvent, currentIndex: number) {
        let nextIndex = -1;

        if (event.key === 'ArrowDown') {
            nextIndex = this.controller.findNextEnabled(currentIndex + 1, 1);
        } else if (event.key === 'ArrowUp') {
            nextIndex = this.controller.findNextEnabled(currentIndex - 1, -1);
        } else {
            return;
        }

        const { options } = this.controller;
        if (nextIndex !== -1) {
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
