import { ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';
// Or use the appropriate export if ComponentDefaultPropsGeneric was a typo

import { Component } from '@angular/core';
import { ButtonProps, sizes, variants } from '@justeattakeaway/pie-webc/components/button.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'wc-angular12';

    buttonSizes = sizes;
    count = 0;
    variantIndex = 0;
    variantName = 'primary';

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    switchVariant() {
        this.variantIndex += 1;
        const variant: ButtonProps['variant'] = variants[this.variantIndex % variants.length];

        this.variantName = variant;
    }
}
