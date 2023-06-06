import { Component } from '@angular/core';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent {
    title = 'wc-angular12';

    buttonSizes = Object.values(BUTTON_SIZE).map((size) => size);
    count = 0;
    variantIndex = 0;
    variantName = BUTTON_VARIANT.PRIMARY;

    increment () {
        this.count++;
    }

    decrement () {
        this.count--;
    }

    switchVariant () {
        this.variantIndex += 1;
        const variantsKeys: string[] = Object.keys(BUTTON_VARIANT);
        const variantKey: string = variantsKeys[this.variantIndex % variantsKeys.length];
        const variant: BUTTON_VARIANT = BUTTON_VARIANT[variantKey as keyof typeof BUTTON_VARIANT];

        this.variantName = variant;
    }
}
