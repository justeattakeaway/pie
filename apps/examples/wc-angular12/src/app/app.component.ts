import { Component } from '@angular/core';
import { ButtonProps, buttonSizes, buttonVariants } from '@justeattakeaway/pie-button';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent {
    title = 'wc-angular12';

    buttonSizes = buttonSizes;
    count = 0;
    variantIndex = 0;
    variantName = 'primary';

    increment () {
        this.count++;
    }

    decrement () {
        this.count--;
    }

    switchVariant () {
        this.variantIndex += 1;
        const variant: ButtonProps['variant'] = buttonVariants[this.variantIndex % buttonVariants.length];

        this.variantName = variant;
    }
}
