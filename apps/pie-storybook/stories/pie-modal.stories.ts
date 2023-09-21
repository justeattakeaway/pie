import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { PieModal } from '@justeattakeaway/pie-modal';
import { PieButton } from '@justeattakeaway/pie-button';
import {
    ModalProps as ModalPropsBase,
    headingLevels,
    sizes,
    positions,
} from '@justeattakeaway/pie-modal/src/defs';

import { i18nArgTypes } from '../args/commonArgsTypes';
import { StoryMeta, SlottedComponentProps } from '../types';
import { createStory } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [
    PieIconButton,
    PieModal,
    PieButton,
];

type ModalProps = SlottedComponentProps<ModalPropsBase>;
type ModalStoryMeta = StoryMeta<ModalProps>;

const defaultArgs: ModalProps = {
    heading: 'Modal header',
    headingLevel: 'h2',
    isDismissible: true,
    hasBackButton: true,
    hasStackedActions: false,
    isFooterPinned: true,
    isFullWidthBelowMid: false,
    isOpen: true,
    isLoading: false,
    size: 'medium',
    position: 'center',
    slot: 'This is Lit!',
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
    aria: {
        close: 'Close',
        back: 'Back',
        loading: 'Loading',
    },
};

const modalStoryMeta: ModalStoryMeta = {
    title: 'Modal',
    component: 'pie-modal',
    argTypes: {
        ...i18nArgTypes,
        isDismissible: {
            description: 'Allows dismissing the modal by clicking outside of it, using the escape key or close button.',
            control: 'boolean',
        },
        hasBackButton: {
            description: 'When true, the modal will have a back button. This currently behaves the same as the close button.',
            control: 'boolean',
        },
        hasStackedActions: {
            control: 'boolean',
        },
        isFooterPinned: {
            description: 'When false, the modal footer will scroll with the content inside the modal body.',
            control: 'boolean',
        },
        isFullWidthBelowMid: {
            description: 'This controls whether a *medium-sized* modal will cover the full width of the page when below the mid breakpoint.',
            control: 'boolean',
        },
        isOpen: {
            description: 'When true, the modal will be open.',
            control: 'boolean',
        },
        isLoading: {
            description: 'When true, displays a loading spinner in the modal.',
            control: 'boolean',
        },
        heading: {
            description: 'The text to display in the modal\'s heading.',
            control: 'text',
        },
        headingLevel: {
            description: 'The HTML heading tag to use for the modal\'s heading. Can be h1-h6.',
            control: 'select',
            options: headingLevels,
        },
        returnFocusAfterCloseSelector: {
            description: 'The selector for the element that you would like focus to be returned to when the modal is closed, e.g., #skipToMain',
            control: 'text',
        },
        size: {
            description: 'The size of the modal; this controls how wide it will appear on the page.',
            control: 'radio',
            options: sizes,
        },
        position: {
            description: 'The position of the modal; this controls where it will appear on the page.',
            control: 'radio',
            options: positions,
        },
        slot: {
            description: 'Content to place within the modal',
            control: 'text',
        },
        leadingAction: {
            description: 'The leading action configuration for the modal.',
            control: 'object',
        },
        supportingAction: {
            description: 'The supporting action configuration for the modal. Will not appear if no leading action is provided.',
            control: 'object',
        },
        aria: {
            description: 'The ARIA labels used for the modal close and back buttons, as well as loading state.',
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
    const modal = document.querySelector('pie-modal') as PieModal;
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

const BaseStoryTemplate = (props: ModalProps) : TemplateResult => {
    const {
        aria,
        heading,
        headingLevel,
        hasBackButton,
        hasStackedActions,
        isDismissible,
        isFooterPinned,
        isFullWidthBelowMid,
        isLoading,
        isOpen,
        leadingAction,
        position,
        returnFocusAfterCloseSelector,
        size,
        slot,
        supportingAction,
    } = props;
    return html`
        <pie-button @click=${toggleModal}>Toggle Modal</pie-button>
        <pie-modal
            .aria="${aria}"
            heading="${heading}"
            headingLevel="${headingLevel}"
            ?hasBackButton="${hasBackButton}"
            ?hasStackedActions="${hasStackedActions}"
            ?isDismissible="${isDismissible}"
            .isFooterPinned="${isFooterPinned}"
            ?isFullWidthBelowMid="${isFullWidthBelowMid}"
            ?isLoading="${isLoading}"
            ?isOpen="${isOpen}"
            .leadingAction="${leadingAction}"
            position="${position}"
            returnFocusAfterCloseSelector="${ifDefined(returnFocusAfterCloseSelector)}"
            size="${size}"
            .supportingAction="${supportingAction}">
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

const createBaseModalStory = createStory<ModalProps>(BaseStoryTemplate, defaultArgs);

export const Default = createBaseModalStory();
export const ScrollLocking = createStory<ModalProps>(ScrollablePageStoryTemplate, defaultArgs)();
export const FocusManagement = createStory<ModalProps>(FocusableElementsPageStoryTemplate, defaultArgs)({
    returnFocusAfterCloseSelector: '#focus-3',
});
export const LargeTextContent = createBaseModalStory({
    isFooterPinned: false,
    slot: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quas inventore quasi ullam, sed ab odio dicta, tempore, ex adipisci atque asperiores suscipit quisquam alias aliquam minus amet ad a?
    Iure consequuntur nihil officia odio, ut dolores reprehenderit tenetur, repellat eveniet dolore, dignissimos aspernatur quo laboriosam eum repellendus ratione libero. Aspernatur in, inventore ratione molestias exercitationem repudiandae omnis nisi illo?
    Laborum, aspernatur labore! Nulla corporis laudantium, odio iure cum maiores veritatis. Facere ullam sequi voluptate ipsa neque? Atque necessitatibus aspernatur quibusdam sit pariatur quo sunt, voluptatem doloribus dolore consequatur temporibus?
    Aspernatur ducimus blanditiis quasi fugit similique. Ullam ea sapiente minima, minus distinctio consequuntur libero nisi tempore in sed corporis officia voluptatem est illum cumque at incidunt fuga magni. Iste, possimus?
    Quas beatae, accusantium porro tempore cupiditate reprehenderit doloremque illo molestias odio esse ipsum sapiente earum? Laborum distinctio soluta saepe numquam optio aperiam adipisci, officiis ut excepturi sapiente, earum magnam labore.
    Sapiente hic impedit incidunt consectetur nisi maiores id enim natus ipsam asperiores cum suscipit quam fugiat dignissimos consequatur tempora, expedita, quod labore cupiditate, temporibus error dolore. Delectus voluptate nisi aliquam.
    Impedit atque similique accusantium animi qui quod doloremque sunt aut magni nostrum commodi dignissimos inventore, obcaecati voluptatibus, facilis assumenda porro consequatur explicabo deserunt dolor autem? Nemo repudiandae totam distinctio reprehenderit.
    Unde at nemo provident mollitia eaque possimus enim, exercitationem cumque explicabo. Quaerat, fuga veritatis rerum, magnam ratione hic ab tenetur quasi esse totam dolor. Ducimus nulla ad aperiam iste consectetur.
    Molestias fugiat nisi debitis quasi dolore aliquam saepe nostrum iusto error veniam earum aut harum, quibusdam eligendi praesentium tenetur, neque aspernatur tempora adipisci nulla minus, totam qui sed? Numquam, aliquid?
    Sint adipisci earum libero illum facere, quisquam ut commodi pariatur reprehenderit ratione aliquam cumque nobis praesentium nulla neque facilis cum possimus ab explicabo vitae omnis nihil eos impedit est. Deserunt!
    Molestiae doloribus adipisci vel culpa delectus consequuntur, pariatur distinctio. Corrupti quae maiores ad minima hic voluptatem asperiores veniam, eos tenetur harum perspiciatis aut accusamus inventore quaerat laborum ipsum unde saepe!
    Tempora mollitia, ea corrupti necessitatibus voluptatibus aliquid possimus dicta odit fuga, delectus dolor voluptatem. Obcaecati illo est ut? Alias tempora quae aliquid dolor in, ducimus accusamus molestias. Sit, ipsam cum.
    Reiciendis, praesentium! Tenetur officia, eius illum voluptates libero cum neque reprehenderit error reiciendis doloribus asperiores ea vero nam dolorem aperiam sapiente consequatur at corporis nihil tempora unde harum voluptate nulla!
    Atque corporis consectetur corrupti magni expedita aspernatur nostrum sed libero reprehenderit sint quod quasi dolores vel sit maiores quisquam, voluptatem suscipit aliquid ad quaerat optio excepturi! Deleniti a quos maiores.
    Necessitatibus hic mollitia natus soluta est dolore nobis eos! Reiciendis totam quasi rerum id, ab et perspiciatis, sed, laborum mollitia pariatur exercitationem aliquam necessitatibus. Sit pariatur autem quia id quidem?
    Necessitatibus ea beatae nisi atque, architecto, neque porro ex dolore impedit odio consequuntur omnis. Similique non nihil corporis nobis ea porro eum quam, fugiat obcaecati voluptatem, sit dolore vitae praesentium?
    Voluptatum dignissimos dolores quos maxime incidunt, excepturi in quis earum fuga inventore molestiae, perferendis mollitia eos minima possimus sed ab, reiciendis culpa. Rem aliquid at quaerat dolorem id eos ducimus?
    Iure quisquam at facilis, veritatis sequi unde quam ipsa! Ex nobis provident non numquam quia maiores, placeat qui incidunt quam est vitae reiciendis esse ipsa expedita temporibus? Perferendis, delectus magni.
    Ullam accusamus porro cumque, assumenda eligendi quos optio qui architecto perspiciatis quaerat error iusto, quae, aspernatur libero nemo. Possimus deserunt laudantium velit, aut mollitia molestiae id atque voluptatibus eum earum.
    Placeat, ad! Quidem error aliquam atque aut, voluptates voluptatibus cumque quia? Laboriosam ab mollitia laborum maxime numquam similique eveniet quaerat? Et, nemo natus officia cum hic adipisci doloremque! Quia, delectus.`,
});
