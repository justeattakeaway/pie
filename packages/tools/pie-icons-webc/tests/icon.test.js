import { html, fixture, expect } from '@open-wc/testing';
import { sizeToValueMap, largeIconSizeDefault, regularIconSizeDefault } from '@justeattakeaway/pie-icons-configs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IconAlcoholFilled, IconAlcoholFilledLarge } from '../dist/icons';

describe('IconAlcoholFilled', () => {
    it('should use the default width and height when not provided', async () => {
        // Arrange & Act
        const el = await fixture(html`<icon-alcohol-filled></icon-alcohol-filled>`);
        const svg = el.shadowRoot.querySelector('svg');

        // Assert
        expect(svg.getAttribute('width')).to.contain(sizeToValueMap[regularIconSizeDefault]);
        expect(svg.getAttribute('height')).to.contain(sizeToValueMap[regularIconSizeDefault]);
    });

    it('should fall back to the default width and height if an invalid value is given', async () => {
        // Arrange & Act
        const el = await fixture(html`<icon-alcohol-filled size="xm"></icon-alcohol-filled>`);
        const svg = el.shadowRoot.querySelector('svg');

        // Assert
        expect(svg.getAttribute('width')).to.contain(sizeToValueMap[regularIconSizeDefault]);
        expect(svg.getAttribute('height')).to.contain(sizeToValueMap[regularIconSizeDefault]);
    });
});

describe('IconAlcoholFilledLarge', () => {
    it('should use the default width and height when not provided', async () => {
        // Arrange & Act
        const el = await fixture(html`<icon-alcohol-filled-large></icon-alcohol-filled-large>`);
        const svg = el.shadowRoot.querySelector('svg');

        // Assert
        expect(svg.getAttribute('width')).to.contain(largeIconSizeDefault);
        expect(svg.getAttribute('height')).to.contain(largeIconSizeDefault);
    });

    it('should fall back to the default width and height if an invalid value is given', async () => {
        // Arrange & Act
        const el = await fixture(html`<icon-alcohol-filled-large size="55"></icon-alcohol-filled-large>`);
        const svg = el.shadowRoot.querySelector('svg');

        // Assert
        expect(svg.getAttribute('width')).to.contain(largeIconSizeDefault);
        expect(svg.getAttribute('height')).to.contain(largeIconSizeDefault);
    });
});
