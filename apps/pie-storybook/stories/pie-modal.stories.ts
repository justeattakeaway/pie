import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { StoryObj as Story } from '@storybook/web-components';
import '@justeattakeaway/pie-button'; // Register pie-button
import '@justeattakeaway/pie-icon-button'; // Register pie-icon-button
import '@justeattakeaway/pie-modal'; // Register pie-modal
import '@justeattakeaway/pie-icons-webc/icons/IconClose'; // Register icon-close
import '@justeattakeaway/pie-icons-webc/icons/IconChevronLeft'; // Register icon-chevron-left
import '@justeattakeaway/pie-icons-webc/icons/IconChevronRight'; // Register icon-chevron-right
import {
    ModalProps as ModalPropsBase,
    headingLevels,
    sizes,
    positions,
} from '@justeattakeaway/pie-modal/src/defs';
import { i18nArgTypes } from '../args/commonArgsTypes';
import { StoryMeta, SlottedComponentProps } from '../types';

type ModalProps = SlottedComponentProps<ModalPropsBase>;
type ModalStoryMeta = StoryMeta<ModalProps>;

const defaultArgs: ModalProps = {
    heading: 'Modal header',
    headingLevel: 'h2',
    isDismissible: true,
    hasBackButton: true,
    isFooterPinned: true,
    isFullWidthBelowMid: false,
    isOpen: true,
    isLoading: false,
    size: 'medium',
    position: 'center',
    slot: 'This is Lit!',
    dir: 'ltr',
    leadingAction: {
        text: 'Confirm',
        variant: 'primary',
        ariaLabel: 'Descriptive confirmation text',
    },
    supportingAction: {
        text: 'Cancel',
        variant: 'ghost',
        ariaLabel: 'Descriptive cancellation text',
    },
};

const modalStoryMeta: ModalStoryMeta = {
    title: 'Modal',
    component: 'pie-modal',
    argTypes: {
        ...i18nArgTypes,
        isDismissible: {
            control: 'boolean',
        },
        hasBackButton: {
            control: 'boolean',
        },
        isFooterPinned: {
            control: 'boolean',
        },
        isFullWidthBelowMid: {
            control: 'boolean',
        },
        isOpen: {
            control: 'boolean',
        },
        isLoading: {
            control: 'boolean',
        },
        heading: {
            control: 'text',
        },
        headingLevel: {
            control: 'select',
            options: headingLevels,
        },
        returnFocusAfterCloseSelector: {
            control: 'text',
        },
        size: {
            control: 'radio',
            options: sizes,
        },
        position: {
            control: 'radio',
            options: positions,
        },
        slot: {
            control: 'text',
        },
        leadingAction: {
            control: 'object',
        },
        supportingAction: {
            control: 'object',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%5BPIE-2.0%5D?type=design&node-id=32007-376358&t=HIfzk0Y1IEnAJyUi-0',
        },
    },
};

export default modalStoryMeta;

/**
 * Helper function to toggle the modal open/closed within the actual template (separate to the Storybook controls)
 */
const toggleModal = () => {
    const modal = document.querySelector('pie-modal');
    if (modal) {
        modal.isOpen = !modal.isOpen;
    }
};

const createFocusableElementsPageHTML = () : TemplateResult => html`
    <pie-button id="focus-1">#focus-1</pie-button>
    <pie-button id="focus-2">#focus-2</pie-button>
    <pie-button id="focus-3">#focus-3</pie-button>
    <pie-button id="focus-4">#focus-4</pie-button>
    <pie-button id="focus-5">#focus-5</pie-button>
    <p>Try closing the modal in one of the following ways to see how focus is managed:</p>
    <ol>
        <li>Clicking on the backdrop</li>
        <li>Pressing the modal's close button</li>
        <li>Pressing the modal's close button using the keyboard</li>
        <li>Pressing the Esc key</li>
    </ol>
    <style>
        pie-button {
            margin: 8px;
            display: inline-block;
        }
    </style>`;

const BaseStoryTemplate = (props: ModalProps): TemplateResult => {
    const {
        heading,
        headingLevel,
        isDismissible,
        hasBackButton,
        isFooterPinned,
        isFullWidthBelowMid,
        isOpen,
        isLoading,
        returnFocusAfterCloseSelector,
        size,
        position,
        slot,
        dir,
        leadingAction,
        supportingAction,
    } = props;
    return html`
        <pie-button @click=${toggleModal}>Toggle Modal</pie-button>
        <pie-modal
            heading="${heading}"
            headingLevel="${headingLevel}"
            ?isDismissible="${isDismissible}"
            ?hasBackButton="${hasBackButton}"
            ?isFooterPinned="${isFooterPinned}"
            ?isFullWidthBelowMid="${isFullWidthBelowMid}"
            ?isLoading="${isLoading}"
            returnFocusAfterCloseSelector="${ifDefined(returnFocusAfterCloseSelector)}"
            ?isOpen="${isOpen}"
            dir="${dir}"
            size="${size}"
            .leadingAction="${leadingAction}"
            .supportingAction="${supportingAction}"
            position="${position}">
            ${slot}
        </pie-modal>`;
};

const createScrollablePageHTML = () => {
    const items = [];
    for (let i = 0; i < 200; i++) {
        items.push(html`<li>Item ${i}</li>`);
    }

    return html`
        <h1>Test Page</h1>
        <p>Test copy</p>
        <ul>${items}</ul>`;
};

const ScrollablePageStoryTemplate = (props: ModalProps) : TemplateResult => html`
    ${BaseStoryTemplate(props)}
    ${createScrollablePageHTML()}`;

const FocusableElementsPageStoryTemplate = (props: ModalProps) : TemplateResult => html`
    ${BaseStoryTemplate(props)}
    ${createFocusableElementsPageHTML()}`;

export const Default: Story<ModalProps> = (args: ModalProps) => BaseStoryTemplate(args);
Default.args = defaultArgs;

export const ScrollLocking: Story<ModalProps> = (args: ModalProps) => ScrollablePageStoryTemplate(args);
ScrollLocking.args = defaultArgs;

export const FocusManagement: Story<ModalProps> = (args: ModalProps) => FocusableElementsPageStoryTemplate(args);
FocusManagement.args = {
    ...defaultArgs,
    returnFocusAfterCloseSelector: '#focus-3',
};

export const LongText: Story<ModalProps> = (args: ModalProps) => BaseStoryTemplate(args);
LongText.args = {
    ...defaultArgs, slot: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque atque dolorem totam, facere voluptates est minima, eos quod ad quos cum accusamus, nobis officia autem. Veritatis, molestias? Atque, rem soluta?
Esse quidem fugit molestias. Ipsa veniam modi vitae asperiores voluptates quibusdam, atque, optio eaque ipsam quod doloremque? Culpa velit distinctio, ut delectus earum perspiciatis, commodi nesciunt laboriosam sit, nihil molestias.
Velit numquam nam suscipit architecto, placeat ut fugit possimus reiciendis nulla nostrum excepturi modi laborum officiis soluta iste ipsa sed ratione similique recusandae libero! Quod necessitatibus nisi excepturi facilis aliquid!
Optio nisi illo explicabo reiciendis error nobis quos doloremque sit. Praesentium, velit sapiente. Porro enim distinctio sint, illum recusandae id magnam delectus corporis voluptate animi est veritatis quidem magni quo.
Nemo ratione at libero quas excepturi nisi, aperiam expedita quaerat cumque ut doloribus itaque in, ab illo dolore qui dolor consectetur reiciendis eos cum nulla modi obcaecati. Nemo, magni recusandae?
Similique enim voluptatum perferendis recusandae ducimus nulla repellendus consequatur quidem beatae libero omnis doloribus vel commodi, voluptatibus corporis iusto corrupti architecto vitae, hic eveniet error nihil. Praesentium ipsum saepe maiores?
Doloribus dignissimos hic totam esse facilis atque dolore ratione tempora est quibusdam, a saepe excepturi temporibus explicabo assumenda, veritatis omnis, accusantium obcaecati! Accusamus voluptate quos tempora non ullam, maxime porro.
Iure, dolores? Nam perspiciatis ut eligendi consequuntur animi quos in sunt dolorum perferendis. Atque iste quas enim, temporibus quam amet sint dolore minima accusantium eos. Molestiae veritatis tempore vero explicabo!
Ipsam est expedita qui quisquam rem quae aliquam voluptates facere laboriosam itaque molestiae inventore dolore ex maiores ipsa id quam suscipit, atque ea corrupti dolores, cum fuga! Excepturi, quod odit.
Tenetur nihil quae accusantium? Porro, earum. Error distinctio quae tempora reiciendis quasi assumenda commodi ut exercitationem! Vel tempore odio a, corrupti error consequatur quas, ea cupiditate voluptatum ducimus molestias culpa!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque atque dolorem totam, facere voluptates est minima, eos quod ad quos cum accusamus, nobis officia autem. Veritatis, molestias? Atque, rem soluta?
Esse quidem fugit molestias. Ipsa veniam modi vitae asperiores voluptates quibusdam, atque, optio eaque ipsam quod doloremque? Culpa velit distinctio, ut delectus earum perspiciatis, commodi nesciunt laboriosam sit, nihil molestias.
Velit numquam nam suscipit architecto, placeat ut fugit possimus reiciendis nulla nostrum excepturi modi laborum officiis soluta iste ipsa sed ratione similique recusandae libero! Quod necessitatibus nisi excepturi facilis aliquid!
Optio nisi illo explicabo reiciendis error nobis quos doloremque sit. Praesentium, velit sapiente. Porro enim distinctio sint, illum recusandae id magnam delectus corporis voluptate animi est veritatis quidem magni quo.
Nemo ratione at libero quas excepturi nisi, aperiam expedita quaerat cumque ut doloribus itaque in, ab illo dolore qui dolor consectetur reiciendis eos cum nulla modi obcaecati. Nemo, magni recusandae?
Similique enim voluptatum perferendis recusandae ducimus nulla repellendus consequatur quidem beatae libero omnis doloribus vel commodi, voluptatibus corporis iusto corrupti architecto vitae, hic eveniet error nihil. Praesentium ipsum saepe maiores?
Doloribus dignissimos hic totam esse facilis atque dolore ratione tempora est quibusdam, a saepe excepturi temporibus explicabo assumenda, veritatis omnis, accusantium obcaecati! Accusamus voluptate quos tempora non ullam, maxime porro.
Iure, dolores? Nam perspiciatis ut eligendi consequuntur animi quos in sunt dolorum perferendis. Atque iste quas enim, temporibus quam amet sint dolore minima accusantium eos. Molestiae veritatis tempore vero explicabo!
Ipsam est expedita qui quisquam rem quae aliquam voluptates facere laboriosam itaque molestiae inventore dolore ex maiores ipsa id quam suscipit, atque ea corrupti dolores, cum fuga! Excepturi, quod odit.
Tenetur nihil quae accusantium? Porro, earum. Error distinctio quae tempora reiciendis quasi assumenda commodi ut exercitationem! Vel tempore odio a, corrupti error consequatur quas, ea cupiditate voluptatum ducimus molestias culpa!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque atque dolorem totam, facere voluptates est minima, eos quod ad quos cum accusamus, nobis officia autem. Veritatis, molestias? Atque, rem soluta?
Esse quidem fugit molestias. Ipsa veniam modi vitae asperiores voluptates quibusdam, atque, optio eaque ipsam quod doloremque? Culpa velit distinctio, ut delectus earum perspiciatis, commodi nesciunt laboriosam sit, nihil molestias.
Velit numquam nam suscipit architecto, placeat ut fugit possimus reiciendis nulla nostrum excepturi modi laborum officiis soluta iste ipsa sed ratione similique recusandae libero! Quod necessitatibus nisi excepturi facilis aliquid!
Optio nisi illo explicabo reiciendis error nobis quos doloremque sit. Praesentium, velit sapiente. Porro enim distinctio sint, illum recusandae id magnam delectus corporis voluptate animi est veritatis quidem magni quo.
Nemo ratione at libero quas excepturi nisi, aperiam expedita quaerat cumque ut doloribus itaque in, ab illo dolore qui dolor consectetur reiciendis eos cum nulla modi obcaecati. Nemo, magni recusandae?
Similique enim voluptatum perferendis recusandae ducimus nulla repellendus consequatur quidem beatae libero omnis doloribus vel commodi, voluptatibus corporis iusto corrupti architecto vitae, hic eveniet error nihil. Praesentium ipsum saepe maiores?
Doloribus dignissimos hic totam esse facilis atque dolore ratione tempora est quibusdam, a saepe excepturi temporibus explicabo assumenda, veritatis omnis, accusantium obcaecati! Accusamus voluptate quos tempora non ullam, maxime porro.
Iure, dolores? Nam perspiciatis ut eligendi consequuntur animi quos in sunt dolorum perferendis. Atque iste quas enim, temporibus quam amet sint dolore minima accusantium eos. Molestiae veritatis tempore vero explicabo!
Ipsam est expedita qui quisquam rem quae aliquam voluptates facere laboriosam itaque molestiae inventore dolore ex maiores ipsa id quam suscipit, atque ea corrupti dolores, cum fuga! Excepturi, quod odit.
Tenetur nihil quae accusantium? Porro, earum. Error distinctio quae tempora reiciendis quasi assumenda commodi ut exercitationem! Vel tempore odio a, corrupti error consequatur quas, ea cupiditate voluptatum ducimus molestias culpa!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque atque dolorem totam, facere voluptates est minima, eos quod ad quos cum accusamus, nobis officia autem. Veritatis, molestias? Atque, rem soluta?
Esse quidem fugit molestias. Ipsa veniam modi vitae asperiores voluptates quibusdam, atque, optio eaque ipsam quod doloremque? Culpa velit distinctio, ut delectus earum perspiciatis, commodi nesciunt laboriosam sit, nihil molestias.
Velit numquam nam suscipit architecto, placeat ut fugit possimus reiciendis nulla nostrum excepturi modi laborum officiis soluta iste ipsa sed ratione similique recusandae libero! Quod necessitatibus nisi excepturi facilis aliquid!
Optio nisi illo explicabo reiciendis error nobis quos doloremque sit. Praesentium, velit sapiente. Porro enim distinctio sint, illum recusandae id magnam delectus corporis voluptate animi est veritatis quidem magni quo.
Nemo ratione at libero quas excepturi nisi, aperiam expedita quaerat cumque ut doloribus itaque in, ab illo dolore qui dolor consectetur reiciendis eos cum nulla modi obcaecati. Nemo, magni recusandae?
Similique enim voluptatum perferendis recusandae ducimus nulla repellendus consequatur quidem beatae libero omnis doloribus vel commodi, voluptatibus corporis iusto corrupti architecto vitae, hic eveniet error nihil. Praesentium ipsum saepe maiores?
Doloribus dignissimos hic totam esse facilis atque dolore ratione tempora est quibusdam, a saepe excepturi temporibus explicabo assumenda, veritatis omnis, accusantium obcaecati! Accusamus voluptate quos tempora non ullam, maxime porro.
Iure, dolores? Nam perspiciatis ut eligendi consequuntur animi quos in sunt dolorum perferendis. Atque iste quas enim, temporibus quam amet sint dolore minima accusantium eos. Molestiae veritatis tempore vero explicabo!
Ipsam est expedita qui quisquam rem quae aliquam voluptates facere laboriosam itaque molestiae inventore dolore ex maiores ipsa id quam suscipit, atque ea corrupti dolores, cum fuga! Excepturi, quod odit.
Tenetur nihil quae accusantium? Porro, earum. Error distinctio quae tempora reiciendis quasi assumenda commodi ut exercitationem! Vel tempore odio a, corrupti error consequatur quas, ea cupiditate voluptatum ducimus molestias culpa!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque atque dolorem totam, facere voluptates est minima, eos quod ad quos cum accusamus, nobis officia autem. Veritatis, molestias? Atque, rem soluta?
Esse quidem fugit molestias. Ipsa veniam modi vitae asperiores voluptates quibusdam, atque, optio eaque ipsam quod doloremque? Culpa velit distinctio, ut delectus earum perspiciatis, commodi nesciunt laboriosam sit, nihil molestias.
Velit numquam nam suscipit architecto, placeat ut fugit possimus reiciendis nulla nostrum excepturi modi laborum officiis soluta iste ipsa sed ratione similique recusandae libero! Quod necessitatibus nisi excepturi facilis aliquid!
Optio nisi illo explicabo reiciendis error nobis quos doloremque sit. Praesentium, velit sapiente. Porro enim distinctio sint, illum recusandae id magnam delectus corporis voluptate animi est veritatis quidem magni quo.
Nemo ratione at libero quas excepturi nisi, aperiam expedita quaerat cumque ut doloribus itaque in, ab illo dolore qui dolor consectetur reiciendis eos cum nulla modi obcaecati. Nemo, magni recusandae?
Similique enim voluptatum perferendis recusandae ducimus nulla repellendus consequatur quidem beatae libero omnis doloribus vel commodi, voluptatibus corporis iusto corrupti architecto vitae, hic eveniet error nihil. Praesentium ipsum saepe maiores?
Doloribus dignissimos hic totam esse facilis atque dolore ratione tempora est quibusdam, a saepe excepturi temporibus explicabo assumenda, veritatis omnis, accusantium obcaecati! Accusamus voluptate quos tempora non ullam, maxime porro.
Iure, dolores? Nam perspiciatis ut eligendi consequuntur animi quos in sunt dolorum perferendis. Atque iste quas enim, temporibus quam amet sint dolore minima accusantium eos. Molestiae veritatis tempore vero explicabo!
Ipsam est expedita qui quisquam rem quae aliquam voluptates facere laboriosam itaque molestiae inventore dolore ex maiores ipsa id quam suscipit, atque ea corrupti dolores, cum fuga! Excepturi, quod odit.
Tenetur nihil quae accusantium? Porro, earum. Error distinctio quae tempora reiciendis quasi assumenda commodi ut exercitationem! Vel tempore odio a, corrupti error consequatur quas, ea cupiditate voluptatum ducimus molestias culpa!`,
};

