---
eleventyNavigation:
    key: Overview
    parent: Typography
    order: 1
permalink: foundations/typography/
---

## Font families
We use four different font families for our products and communications.

### JET Sans Digital

This is our primary font family.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/jet-sans-digital.svg",
    width: "96px",
    caption: "The example above shows a sample of JET Sans Digital VF2."
} %}

### JET Sans
Used for Display Type typography tokens.

{% notification {
    type: "information",
    iconName: "download",
    message: "[Download the JET Sans font here](https://drive.google.com/file/d/1FVFivnj_-lV63uDr-EWdrUo2sNKtek9C/view?usp=drive_link)."
} %}

{% notification {
    type: "warning",
    message: "This token is **only** to be used for large promotional and campaign-style content only (such as vouchers, offerings, and promotions)."
} %}

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/jet-sans-display.svg",
    width: "96px",
    caption: "The example above shows a sample of JET Sans / Extra Black Italic."
} %}

### Arial
Used only as a fallback font.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/arial.svg",
    width: "103px",
    caption: "The example above shows a sample of Arial Regular.."
} %}

### PT Mono
Used only for snippets of code.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/pt-mono.svg",
    width: "90px",
    caption: "The example above shows a sample of PT Mono."
} %}

---

## Our type scale
Our type scale uses multiples of 4 for type sizes as well as line height, helping it align to our 4px vertical grid.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/type-scale.svg",
    mobileSrc:"../../../assets/img/foundations/typography/type-scale-mobile.svg"
} %}

---

## Responsive type
We assign different values to some of our typographic styles depending on the size of users' screens. Wider screens use bigger type sizes and more generous spacing, while narrow screens use tighter and smaller type settings.

Here's an example of how our $heading-L looks on wide and narrow screens.

### Wide screens

Screen size: >768px
Text size: 28px • Line size: 32px

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/responsive-wide.svg",
    width: "82px",
    caption: "The example above shows how a $heading-L looks on a wide screen."
} %}

### Narrow screens
Screen size: <768px
Text size: 24px • Line size: 28px

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/responsive-narrow.svg",
    width: "70px",
    caption: "The example above shows how a $heading-L looks on a narrow screen."
} %}

Only our heading and subheading typographic styles are responsive. Our body styles share the same values regardless of the size of the screen they're being displayed in.

{% notification {
    type: "information",
    message: "When creating screens in Figma, make sure you choose the right token depending on the size of the frame you're working on."
} %}

---

## Font weights
Font weight refers to a value assigned to your font which determines how bold or light your text will seem. We use three types of font weight.

### Extra-black

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/font-weight-extra-black.svg",
    width: "106px"
} %}

### Black

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/font-weight-black.svg",
    width: "104px"
} %}

### Extra-bold

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/font-weight-extra-bold.svg",
    width: "100px"
} %}

### Bold

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/font-weight-bold.svg",
    width: "96px"
} %}

### Regular

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/font-weight-regular.svg",
    width: "91px"
} %}

Font weights are important when adding emphasis and hierarchy to your designs. A bold font weight will always draw the user's attention more than a lighter weight. When using both weights in your paragraphs be mindful of this guidance to ensure you create the correct balance.

To keep the hierarchy and make things a bit simpler we use bold weights on all our headings and button styles on all themes. Body copy, subheadings and captions use our regular weight by default, although our body and caption styles also allow fonts to be bolded to add emphasis to a word or small phrase.

---

## Alignment
This property defines the horizontal alignment of the text. It includes three types of alignment.

### Left aligned
This is the preferred way to align text within our products. Left-aligned text performs better for readers because it helps users to easily identify the start of a new line.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/left-aligned.svg",
    width: "247px"
} %}

### Centre aligned
This alignment should be used sparingly, and should never be considered as the primary way to align text in our designs unless there is a specific need for it to be used.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/centre-aligned.svg",
    width: "248px"
} %}

### Right aligned
This alignment should also be used sparingly. This approach is usually found in chunks of complex numeric data, where alignment of the decimals is key to assist readability.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/right-aligned.svg",
    width: "248px"
} %}

---

## Line length
Setting the right line length is key to the readability of the text in our products. With that in mind, a good practice is to keep the length between 80 and 100 characters per line, with a minimum of 60.


{% contentPageImage {
    src:"../../../assets/img/foundations/typography/line-length.svg",
    width: "771.4px",
    caption: "Visual representation of the most common line lenghts in our products."
} %}

---
## JET Sans Digital

### Paragraph spacing
It represents the amount of white spacing between two paragraphs of your text. Keeping consistent paragraph spacing measures throughout your products will help the user understand the hierarchy of the information and will make your texts easier to read. We use three measures.

### Paragraph Spacing 1
This is the most commonly-used paragraph spacing measure. It uses 16px between paragraphs.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/paragraph-spacing-one.svg",
    width: "244px"
} %}

### Paragraph Spacing 2
A paragraph spacing measure used for longer bits of text where spacing is key. It uses 14px between paragraphs.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/paragraph-spacing-two.svg",
    width: "244px"
} %}

### Paragraph Spacing 3
An exceptional measure used only where the other options pose a problem to the overall layout.  It uses 12px between paragraphs.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/paragraph-spacing-three.svg",
    width: "244px"
} %}

---

## Letter spacing
Letter spacing is used to determine the horizontal spacing between text characters. In digital applications this has been kept to 0px (standard spacing) for all typographic styles.

---

## Font styles
Font styles refer to the text decorations used to emphasise different features of our typographic styles.

### Italic
We use italics to make type feel more dynamic and to transfer a JET brand specific moment, it can also be used to imply motion which references our service as a delivery business.

Think about context and hierarchy, if the information in your heading is the most relevant information and transfers a JET brand moment, then consider using an italic style.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/italic.svg",
    width: "105px",
    caption: "The example above shows how JET Sans Digital looks when italicised."
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "JET brand moments",
            "Marketing and upsell cases",
            "Time or speed related information",
            "When italics are used in small-scale text (e.g. captions), ensure they support dynamic type and scale with user preferences"
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Big blocks of text where readability would be compromised",
            "Non JET related names or brands",
            "Functional parts of the UI like CTAs"
        ]
    }
} %}


### Underline
We use underlines for interactive elements such as links, especially when they are placed inside a block of text.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/underline.svg",
    width: "91px",
    caption: "The example above shows how JET Sans Digital looks when underlined."
} %}

### Strikethrough
We use this style when indicating something is no longer valid, but can still be read by users so they can understand the context.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/strikethrough.svg",
    width: "91px",
    caption: "The example above shows how JET Sans Digital looks as a strikethrough."
} %}

---

## JET Sans Display (campaign)

{% notification {
    type: "warning",
    message: "**Important:** Display typography tokens should be used only for large promotional and campaign-style content only (such as vouchers, offerings, and promotions). It should not be used for body content."
} %}

### Display

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/display-example.svg",
    width: "220px",
    caption: "Example showing Display type used in a promotional context."
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/typography/display-do.png",
            alt: "A promotional banner with the single word 'Dessert' in Display type over food imagery, with an Explore call to action button"
        }],
        caption: "Use for short, impactful headings or numbers."
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/foundations/typography/display-dont.png",
            alt: "A search results screen showing '76 places match Chinese' as a functional heading rendered in Display type"
        }],
        caption: "Don't use for long or functional headings."
    }
} %}

### Heading vs Display

Heading and Display tokens can appear quite similar, because they share the same font weight and style. Here's how to distinguish when to use each:

#### Heading
Use heading tokens for functional headers, such as page titles and standard labels.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/heading-vs-display-heading.png",
    width: "375px"
} %}

#### Display
Use Display tokens for creating an on-brand, editorial feel for high impact components and pages.

{% contentPageImage {
    src:"../../../assets/img/foundations/typography/heading-vs-display-display.png",
    width: "375px"
} %}

### Using Display in your designs

#### Font size pairing
The display token can be applied at the same size across multiple lines of text, or combined with varying sizes to create a more dynamic visual hierarchy.

{% contentLayout %}
    {% contentItem %}
        {% contentPageImage {
            src: "../../../assets/img/foundations/typography/display-font-size-pairing-1.png",
            width: "380px",
            alt: "Examples showing display tokens applied at the same size, and combined with varying sizes."
        } %}
    {% endcontentItem %}
    {% contentItem %}
        {% contentPageImage {
            src: "../../../assets/img/foundations/typography/display-font-size-pairing-2.png",
            width: "380px",
            alt: "Examples showing display tokens applied at the same size, and combined with varying sizes."
        } %}
    {% endcontentItem %}
{% endcontentLayout %}

#### Localisation
When applying different text sizes, make sure to check that in some markets or languages, the highlighted text may appear in a different position or order.

{% notification {
    type: "information",
    iconName: "info-circle",
    message: "Implementation approaches for handling Display type in verbose localisations are still under experimentation. When used in WebViews, the React hook Pretext can enable you to scale down the Display type when its size exceeds its container. Alternatively, you can use CSS Clamp for a non-JS approach. Talk with your engineers to find the right solution for your context."
} %}

{% contentLayout %}
    {% contentItem %}
        {% contentPageImage {
            src: "../../../assets/img/foundations/typography/display-localisation-1.png",
            width: "380px",
            alt: "A narrow notification in large size with a leading icon, title, supporting text, dismiss button and two action buttons."
        } %}
    {% endcontentItem %}
    {% contentItem %}
        {% contentPageImage {
            src: "../../../assets/img/foundations/typography/display-localisation-2.png",
            width: "380px",
            alt: "A narrow notification in large size with the compact modifier, showing a leading icon, title, supporting text and two action buttons inline."
        } %}
    {% endcontentItem %}
{% endcontentLayout %}
