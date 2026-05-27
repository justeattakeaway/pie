import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/thumbnail';
import '@justeattakeaway/pie-webc/components/tag';

import { type ListProps } from '@justeattakeaway/pie-webc/components/list';

import { createStory } from '../utilities';

type ListStoryMeta = Meta<ListProps>;

const defaultArgs: ListProps = {};

const listStoryMeta: ListStoryMeta = {
    title: 'Components/List',
    component: 'pie-list',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default listStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: ListProps) => html`
    <div style="width: 400px">
        <h2>Single item list</h2>
        <pie-list>
            <pie-list-item is-bold>
                <pie-thumbnail size="40" slot="leading" src="./static/images/pie-logo.svg"></pie-thumbnail>
                <span slot="text">Primary text</span>
                <span slot="text">Secondary text</span>
                <span slot="trailing">Meta text</span>
            </pie-list-item>
        </pie-list>

        <h2>Multi-item list</h2>
        <pie-list>
            <pie-list-item is-bold>
                <pie-thumbnail size="40" slot="leading" src="./static/images/pie-logo.svg"></pie-thumbnail>
                <span slot="text">Primary text</span>
                <span slot="text">Secondary text</span>
                <span slot="trailing">Meta text</span>
            </pie-list-item>
            <pie-list-item is-bold>
                <pie-thumbnail size="40" slot="leading" src="./static/images/pie-logo.svg"></pie-thumbnail>
                <span slot="text">Primary text</span>
                <span slot="text">Secondary text</span>
                <span slot="trailing">Meta text</span>
            </pie-list-item>
            <pie-list-item>
                <pie-thumbnail size="40" slot="leading" src="./static/images/pie-logo.svg"></pie-thumbnail>
                <span slot="text">Primary text</span>
                <span slot="text">Secondary text</span>
                <span slot="trailing">Meta text</span>
            </pie-list-item>
        </pie-list>

        <h2>Radio group Trailing</h2>
        <pie-list type="interactive">
            <pie-list-item>
                <pie-thumbnail size="40" slot="leading" src="./static/images/pie-logo.svg"></pie-thumbnail>
                <label for="radio1" slot="text">Option One</label>
                <span id="secondary-text-1" slot="text">Details for option one</span>
                <input aria-describedby="secondary-text-1" slot="trailing" name="radios" type="radio" id="radio1" value="radio1" />
            </pie-list-item>

            <pie-list-item>
                <pie-thumbnail size="40" slot="leading" src="./static/images/pie-logo.svg"></pie-thumbnail>
                <label for="radio2" slot="text">Option Two</label>
                <span id="secondary-text-2" slot="text">Details for option two</span>
                <input aria-describedby="secondary-text-2" slot="trailing" name="radios" type="radio" id="radio2" value="radio2" />
            </pie-list-item>

            <pie-list-item>
                <pie-thumbnail size="40" slot="leading" src="./static/images/pie-logo.svg"></pie-thumbnail>
                <label for="radio3" slot="text">Option Three</label>
                <span id="secondary-text-3" slot="text">Details for option three</span>
                <input aria-describedby="secondary-text-3" slot="trailing" name="radios" type="radio" id="radio3" value="radio3" />
            </pie-list-item>

            <pie-list-item>
                <pie-thumbnail size="40" slot="leading" src="./static/images/pie-logo.svg"></pie-thumbnail>
                <label for="radio4" slot="text">Option Four</label>
                <span id="secondary-text-4" slot="text">Details for option four</span>
                <input aria-describedby="secondary-text-4" slot="trailing" name="radios" type="radio" id="radio4" value="radio4" />
            </pie-list-item>
        </pie-list>

        <h2>Radio group Leading</h2>
        <pie-list type="interactive">
            <pie-list-item>
                <input aria-describedby="desc-credit-card tag-credit-card" slot="leading" name="payment_method" type="radio" id="radio-credit-card" value="credit_card" />
                <label for="radio-credit-card" slot="text">Credit Card</label>
                <span id="desc-credit-card" slot="text">Visa, Mastercard, Amex</span>
                <pie-tag id="tag-credit-card" slot="trailing">Card</pie-tag>
            </pie-list-item>

            <pie-list-item>
                <input aria-describedby="desc-paypal tag-paypal" slot="leading" name="payment_method" type="radio" id="radio-paypal" value="paypal" />
                <label for="radio-paypal" slot="text">PayPal</label>
                <span id="desc-paypal" slot="text">Pay with your PayPal account balance</span>
                <pie-tag id="tag-paypal" slot="trailing">Online</pie-tag>
            </pie-list-item>

            <pie-list-item>
                <input aria-describedby="desc-apple-pay tag-apple-pay" slot="leading" name="payment_method" type="radio" id="radio-apple-pay" value="apple_pay" />
                <label for="radio-apple-pay" slot="text">Apple Pay</label>
                <span id="desc-apple-pay" slot="text">Fast checkout using your Apple Wallet</span>
                <pie-tag id="tag-apple-pay" slot="trailing">Apple</pie-tag>
            </pie-list-item>

            <pie-list-item>
                <input aria-describedby="desc-google-pay tag-google-pay" slot="leading" name="payment_method" type="radio" id="radio-google-pay" value="google_pay" />
                <label for="radio-google-pay" slot="text">Google Pay</label>
                <span id="desc-google-pay" slot="text">Checkout securely with saved cards</span>
                <pie-tag id="tag-google-pay" slot="trailing">Google</pie-tag>
            </pie-list-item>

            <pie-list-item>
                <input aria-describedby="desc-bank-transfer tag-bank-transfer" slot="leading" name="payment_method" type="radio" id="radio-bank-transfer" value="bank_transfer" />
                <label for="radio-bank-transfer" slot="text">Bank Transfer</label>
                <span id="desc-bank-transfer" slot="text">Direct wire from your checking account</span>
                <pie-tag id="tag-bank-transfer" slot="trailing">Bank</pie-tag>
            </pie-list-item>
        </pie-list>

        <h2>Checkbox group</h2>
        <pie-list>
            <pie-list-item>
                <label for="checkbox1">checkbox 1</label>
                <input name="checkboxes" type="checkbox" id="checkbox1" value="checkbox1" />
            </pie-list-item>
            <pie-list-item>
                <label for="checkbox2">checkbox 2</label>
                <input name="checkboxes" type="checkbox" id="checkbox2" value="checkbox2" />
            </pie-list-item>
            <pie-list-item>
                <label for="checkbox3">checkbox 3</label>
                <input name="checkboxes" type="checkbox" id="checkbox3" value="checkbox3" />
            </pie-list-item>
            <pie-list-item>
                <label for="checkbox4">checkbox 4</label>
                <input name="checkboxes" type="checkbox" id="checkbox4" value="checkbox4" />
            </pie-list-item>
            <pie-list-item>
                <label for="checkbox5">checkbox 5</label>
                <input name="checkboxes" type="checkbox" id="checkbox5" value="checkbox5" />
            </pie-list-item>
            <pie-list-item>
                <label for="checkbox6">checkbox 6</label>
                <input name="checkboxes" type="checkbox" id="checkbox6" value="checkbox6" />
            </pie-list-item>
        </pie-list>
    </div>
`;

export const Default = createStory<ListProps>(Template, defaultArgs)();
