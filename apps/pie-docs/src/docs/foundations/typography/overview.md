---
eleventyNavigation:
    key: Overview
    parent: Typography
    order: 1
---

## Font families
We use three different font families for our products and communications. These include:

### JET Sans Digital
This is our primary font family.

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/jet-sans-digital.svg",
    width: "100px",
    caption: "The example above shows JET Sans Digital in Extra Bold."
} %}

### Arial
Used only as a fallback font.

{% contentPageImage {
src:"../../../../assets/img/foundations/typography/arial.svg",
width: "98px",
caption: "The example above shows Arial Regular, which is used as a fallback font."
} %}

### CP Mono
Used only for snippets of code.

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/cp-mono.svg",
    width: "105px",
    caption: "The example above shows CP Mono, a font used for code snippets."
} %}

---

## Our type scale
We use multiples of 4 within our type scale for both type sizes as well as line height, so that it aligns to our 4px vertical grid.

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/type-scale.svg",
    mobileSrc:"../../../../assets/img/foundations/typography/type-scale-mobile.svg"
} %}

---

## Responsive type
We assign different values to some of our typographic styles depending on the size of the users’ screens. Wider screens use bigger type sizes and more generous spacing, while narrow screens use tighter and smaller type settings.

Here’s an example of how our **$heading-l** looks on wide and narrow screens:

### Wide screens

Screen size: >768px
Text size: 28px • Line size: 36px

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/responsive-wide.svg",
    width: "80px",
    caption: "The example above shows how a $heading-l looks on a wide screen."
} %}

### Narrow screens
Screen size: <768px
Text size: 24px • Line size: 32px

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/responsive-narrow.svg",
    width: "68px",
    caption: "The example above shows how a $heading-l looks on a narrow screen."
} %}

**Only our Heading and Subheading typographic styles are responsive.** Our body styles share the same values regardless of the size of the screen they’re being displayed in.

{% notification {
    type: "information",
    message: "When creating screens in Figma, make sure you choose the right token depending on the size of the frame you’re working on."
} %}

---

## Font weights
Font weight refers to a value assigned to your font which determines how bold or light your text will seem. We use three types of font weight:

### Extra-bold

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/font-weight-extra-bold.svg",
    width: "100px"
} %}

### Bold

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/font-weight-bold.svg",
    width: "96px"
} %}

### Regular

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/font-weight-regular.svg",
    width: "91px"
} %}

Font weights are important when adding emphasis and hierarchy to your designs. A bold font weight will always draw the user’s attention more than a lighter weight. When using both weights in your paragraphs be mindful of this guidance to ensure you create the correct balance.

To keep the hierarchy and make things a bit simpler we use bold weights on all our headings and button styles on all themes. Body copy, subheadings and captions use our regular weight by default, although our body and caption styles also allow fonts to be bolded to add emphasis to a word or small phrase.

---

## Font styles
Font styles refer to the text decorations used to emphasise different features of our typographic styles.

### Underline
We use underlines for interactive elements such as links, especially when they are placed inside a block of text.

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/underline.svg",
    width: "91px",
    caption: "The example above shows how JET Sans Digital looks when underlined."
} %}

### Strikethrough
We use this style when indicating something is no longer valid, but can still be read by users so they can understand the context.

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/strikethrough.svg",
    width: "91px",
    caption: "The example above shows how JET Sans Digital looks as a strikethrough."
} %}

---

## Alignment
This property defines the horizontal alignment of the text. It includes three types of aligment:

### Left aligned
This is the preferred way to align text within our products. Left-aligned text performs better for readers because it helps the users to easily identify the start of a new line.

{% contentPageImage {
src:"../../../../assets/img/foundations/typography/left-aligned.svg",
width: "248px"
} %}

### Centre aligned
This alignment should be used sparingly, and should never be considered as the primary way to align text in our designs, unless there is a specific need for it to be used.

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/centre-aligned.svg",
    width: "248px"
} %}

### Right aligned
This alignment should also be used sparingly. This approach is usually found in chunks of complex numeric data, where alignment of the decimals is key to assist readability.

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/right-aligned.svg",
    width: "248px"
} %}

---

## Line length
Setting the right line length is key to the readability of the text in our products. With that in mind, a good practice is to keep the lenght between 80 and 100 characters per line, with a minimum of 60.


{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/line-length.svg",
    width: "771.4px",
    caption: "Visual representation of the most common line lengths in our products."
} %}

---

## Paragraph spacing
It represents the amount of white spacing between two paragraphs of your text. Keeping consistent paragraph spacing measures throughout your products will help the user understand the hierarchy of the information and will make your texts easier to read. We use three measures:

### Paragraph Spacing 1
This is the most commonly used paragraph spacing measure. It uses **16px** between paragraphs.

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/paragraph-spacing-one.svg",
    width: "235px"
} %}

### Paragraph Spacing 2
A paragraph spacing measure used for longer bits of text where spacing is key. It uses **14px** between paragraphs.

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/paragraph-spacing-two.svg",
    width: "235px"
} %}

### Paragraph Spacing 3
An exceptional measure used only where the other options pose a problem to the overall layout.  It uses **12px** between paragraphs.

{% contentPageImage {
    src:"../../../../assets/img/foundations/typography/paragraph-spacing-three.svg",
    width: "235px"
} %}

---

## Letter spacing
Letter spacing is used to determine the horizontal spacing between text characters. In digital applications this has been kept to **0px** (standard spacing) for all typographic styles.
