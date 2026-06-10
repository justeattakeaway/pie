import { type NavigableOption } from '../defs';
import { type ListboxNavigationController, type SelectionStrategy } from '../listbox-navigation-controller';

export class MultiSelectionStrategy implements SelectionStrategy {
    private controller: ListboxNavigationController;

    constructor (controller: ListboxNavigationController) {
        this.controller = controller;
    }

    resetTabindexState () {
        const { options } = this.controller;
        if (options.length === 0) return;

        let hasSelected = false;
        options.forEach((option) => {
            if (option.selected && !hasSelected) {
                option.tabIndex = 0;
                hasSelected = true;
            } else {
                option.tabIndex = -1;
            }
        });

        if (!hasSelected) {
            options[0].tabIndex = 0;
        }
    }

    handleKeyDown (event: KeyboardEvent, currentIndex: number) {
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.controller.focusOption(currentIndex + 1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.controller.focusOption(currentIndex - 1);
                break;
            case ' ':
            case 'Spacebar': {
                event.preventDefault();
                const option = this.controller.options[currentIndex];
                this.controller.toggleSelection(option, !option.selected);
                break;
            }
            default:
                break;
        }
    }

    handleOptionClick (option: NavigableOption, index: number) {
        this.controller.toggleSelection(option, !option.selected);
        this.controller.focusOption(index);
    }
}
