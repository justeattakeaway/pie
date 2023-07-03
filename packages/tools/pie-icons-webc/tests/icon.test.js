import { html, fixture, expect } from '@open-wc/testing';
import { sizeToValueMap, largeIconSizeDefault, regularIconSizeDefault } from '@justeattakeaway/pie-icons-configs';
import { IconAlcoholFilled } from '../icons/IconAlcoholFilled';
import { IconAlcoholFilledLarge } from '../icons/IconAlcoholFilledLarge';

describe('IconAlcoholFilled', () => {
    it('has a default width and height for a regular sized icon', async () => {
        const el = await fixture(html`
      <icon-alcohol-filled></icon-alcohol-filled>
    `);

        const svg = el.shadowRoot.querySelector('svg');

        expect(svg.getAttribute('width')).to.contain(sizeToValueMap[regularIconSizeDefault]);
        expect(svg.getAttribute('height')).to.contain(sizeToValueMap[regularIconSizeDefault]);
    });
});

describe('IconAlcoholFilledLarge', () => {
    it('has a default width and height for a large sized icon', async () => {
        const el = await fixture(html`
      <icon-alcohol-filled-large></icon-alcohol-filled-large>
    `);

        const svg = el.shadowRoot.querySelector('svg');

        expect(svg.getAttribute('width')).to.contain(largeIconSizeDefault);
        expect(svg.getAttribute('height')).to.contain(largeIconSizeDefault);
    });
});
