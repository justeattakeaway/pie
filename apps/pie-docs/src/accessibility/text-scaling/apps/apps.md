---
eleventyNavigation:
  key: Apps
  parent: 'Text Scaling'
  order: 1
shouldShowContents: true
permalink: accessibility/text-scaling/
---

## What's dynamic text scaling?

Text scaling, also known as dynamic text, allows users to adjust the size of text based on their preferences. This enhances accessibility for people with visual impairments or who prefer larger type. Both iOS and Android platforms support dynamic text in settings.

{% contentPageImage {
src:"../../../assets/img/accessibility/text-scaling/overview.svg",
alt: "Illustration of the bottom of a mobile screen showing a slider with stops for different sizes of text scaling options."
} %}

---

## Text scaling is different from zoom

While both text scaling and zooming can enhance readability, they are fundamentally different in their implementation and user experience.

{% notification {
  type: "information",
  message: "To meet the requirements of the criteria [Resize Text (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html#:~:text=F69:%20Failure%20of%20Success%20Criterion,is%20resized%20up%20to%20200%25), all text except for captions and images of text, should be resizable without assistive technology up to 200 percent without loss of content or functionality."
} %}

### Text scaling

This feature adjusts the size of text dynamically based on user settings or preferences. This affects only the text elements within the application, allowing for a more tailored and accessible experience. The layout and design of the application should accommodate these changes without compromising usability.

#### Text on default size

{% contentPageImage {
src:"../../../assets/img/accessibility/text-scaling/different-text-size-default.svg",
alt: "Example of an accordion component with text at the default size.",
width: 200
} %}

#### Text @2x size

{% contentPageImage {
src:"../../../assets/img/accessibility/text-scaling/different-text-size-200.svg",
alt: "Example of an accordion component with text at 2x size.",
width: 200
} %}

### Zoom

This feature enlarges all visual elements, including text, images, and UI components. Zoom allows the user to magnify the entire screen or a specific area of the interface.

This setting can cause elements to become misaligned or require users to scroll both vertically and horizontally (dragging the elements on the screen) to view content that was previously visible.

#### No zoom applied

{% contentPageImage {
src:"../../../assets/img/accessibility/text-scaling/different-zoom-default.svg",
alt: "Example of a mobile screen with no zoom applied.",
width: 200
} %}

#### Zoom @2x

{% contentPageImage {
src:"../../../assets/img/accessibility/text-scaling/different-zoom-200.svg",
alt: "Example of a mobile screen with zoom applied at 2x.",
width: 200
} %}

## How text scaling affects components

### Typography

All text elements, such as headings, body text, and labels, should be designed to scale appropriately. Interactive components without text such as icon buttons don't scale.

Text scaling may affect the alignment and positioning of images and icons. Ensure that these elements remain visually balanced and do not interfere with the readability of text.

{% usage {
  do: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/accessibility/text-scaling/affect-typography-do.svg",
            width: "200px",
            alt: "Card component with text scaling applied correctly."
        }]
  },
  dont: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/accessibility/text-scaling/affect-typography-dont.svg",
            width: "200px",
            alt: "Card component with text scaling applied incorrectly where buttons and image elements are scaled together with the text."
        }]
  }
} %}

### Navigational elements

Navigational elements such as tabs, segment control, top and bottom bars should not have the text scaled. Users with text scaling settings enabled should be offered an alternative way to view text in these components.

On iOS, an option for that is 'Large Content Viewer' for the bottom bar navigation, and on Android and iOS, 'touch and hold tooltips' for most navigation elements.

{% usage {
  do: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/accessibility/text-scaling/affect-navigation-do.svg",
            width: "200px",
            alt: "Navigation component with text scaling applied correctly."
        }]
  },
  dont: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/accessibility/text-scaling/affect-navigation-dont.svg",
            width: "200px",
            alt: "Navigation component with text scaling applied incorrectly where text is truncated."
        }]
  }
} %}

### Iconography

Increase the size of meaningful interface icons as font size increases. Make sure icons used to communicate important information are easy to view at larger font sizes too.

{% usage {
  do: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/accessibility/text-scaling/affect-icon-do.svg",
            width: "200px",
            alt: "Card component with text scaling applied correctly where text and icons scale appropriately."
        }]
  },
  dont: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/accessibility/text-scaling/affect-icon-dont.svg",
            width: "200px",
            alt: "Card component with text scaling applied incorrectly where text and icons do not scale appropriately."
        }]
  }
} %}

### Truncation

Text with critical information should wrap to the next line to ensure understandability. Truncation might happen but it should be kept to a minimum.

In case truncation happens on important information offer an alternative for the user to read the full content. For example, add a "see more" link button to expand the container and provide access to the content.

{% usage {
  do: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/accessibility/text-scaling/affect-truncation-do.svg",
            width: "200px",
            alt: "Card component with text scaling applied correctly where text wraps appropriately."
        }]
  },
  dont: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/accessibility/text-scaling/affect-truncation-dont.svg",
            width: "200px",
            alt: "Card component with text scaling applied incorrectly where text truncates."
        }]
  }
} %}

### Layout and overflow

Components must be flexible enough to accommodate various text sizes. This may involve enabling text wrapping to prevent the text from overlapping, clipping, or truncating.

{% usage {
  do: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/accessibility/text-scaling/affect-layout-do.svg",
            width: "200px",
            alt: "Card component with text scaling applied correctly where layout adjusts appropriately."
        }]
  },
  dont: {
    type: usageTypes.image,
    items: [{
            src: "../../../assets/img/accessibility/text-scaling/affect-layout-dont.svg",
            width: "200px",
            alt: "Card component with text scaling applied incorrectly where layout does not adjust appropriately and content legibility is compromised."
        }]
  }
} %}

### Interactive elements with text

Ensure that buttons and other interactive elements with text remain accessible and usable at larger text sizes. This may require adjusting padding and margins to maintain a comfortable touch target.

Text and line height scale up but padding and spacing between elements in a component remain the same.

{% contentPageImage {
src:"../../../assets/img/accessibility/text-scaling/affect-interaction.svg",
alt: "Example of buttons in 1x, 1.3x, and 2x text scaling sizes.",
width: 200
} %}
