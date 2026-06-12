---
eleventyNavigation:
  key: Overview
  parent: 'Nested Overrides'
  order: 1
shouldShowContents: true
permalink: patterns/nested-overrides/
eleventyComputed:
    overrideSummaryTableData: "{% include './override-summary-table.json' %}"
---

## Overview

Nested component overrides offer designers the flexibility to adapt components based on specific design needs while maintaining overall system consistency. Overrides ensure that nested elements support their parent components without disrupting the design language.

{% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/overview.svg",
alt: "Illustration of a textured yellow triangle and a pink textured circle in a blue background with a double edged arrow between them."
} %}

---

## Types of overrides

Overrides are useful when adjusting nested components to ensure they align with different design contexts while maintaining visual and functional consistency. These overrides typically apply to the following areas:

### Variant override

Nested elements can be adjusted to different types, styles or colours to match the context.

{% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/types-of-overrides-variant.svg",
alt: "Comparison between variant of the avatar component using different colours with either a person icon or AA typography.",
width: 120
} %}

### Size override

Nested components can be resized to create a clear hierarchy within the component.

{% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/types-of-overrides-size.svg",
alt: "Comparison between sizes of the button component.",
width: 120
} %}

### Alignment override

Vertical alignment can be adjusted to improve layout balance.

{% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/types-of-overrides-alignment.svg",
alt: "Two icons that signify top aligned and center aligned.",
width: 120
} %}

### Typography styling

Body content styling can be modified to enhance readability.

{% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/types-of-overrides-typography.svg",
alt: "Letters A, B, and C in low and upper case.",
width: 120
} %}

---

## Override summary

{% simpleTable {
    tableData: overrideSummaryTableData,
    isFullWidth: true
} %}

---

## Variant overrides

### Visually supportive nested elements

Within a larger component, nested elements such as tags, avatars and icons often serve as visual support.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/variant-overrides-visual-1.svg",
alt: "Multi line list component with two nested elements; avatar component as leading content and a tag component as trailing content.",
width: 120
} %}
  {% endcontentItem %}
  {% contentItem %}
   {% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/variant-overrides-visual-2.svg",
alt: "Notification component with icon with background as a nested component.",
width: 120
} %}
  {% endcontentItem %}
{% endcontentLayout %}

Overrides help in colour and style adjustments to match the parent component's theme and ensuring contrast and readability across different design contexts. Size should remain consistent to maintain visual balance and avoid disrupting the component’s proportions.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/variant-overrides-visual-list-item-do.svg",
            width: "256px",
            alt: "Two list item components with leading avatar and trailing tag as supported nested overrides."
        }],
        caption: "Nested components can be changed to different variants and styles."
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/variant-overrides-visual-list-item-dont.svg",
            width: "256px",
            alt: "Two list item components with sizes of leading avatar and trailing tag changed, representing unsupported nested overrides."
        }],
        caption: "Nested components cannot be increased or decreased in size."
    }
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/variant-overrides-visual-notification-do.svg",
            width: "256px",
            alt: "Two notification components in the information variant, each using different leading icons supported nested overrides."
        }],
        caption: "Icons can be changed to a different one as long as it fits the context."
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/variant-overrides-visual-notification-dont.svg",
            width: "256px",
            alt: "A notification component in the information variant with the exclamation point icon changed, representing unsupported nested override."
        }],
        caption: "Icons cannot be increased or decreased in size."
    }
} %}

### Bulk quantity nested components

Components that contain bulk quantity nested components, such as data tables, often include buttons, icons, and other interactive elements. These nested components can be overridden to provide designers with more flexibility while maintaining usability.

{% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/variant-overrides-bulk.svg",
alt: "A data table with three columns and five rows where each row has a different nested component such as buttons, icons, and other interactive elements that are all supported nested overrides.",
width: 120
} %}

Variants can be adjusted to better support the data table’s structure and hierarchy. However, size adjustments are not recommended, as they can disrupt consistency, affect spacing, and impact the overall usability of the table layout.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/variant-override-bulk-nested-do.svg",
            width: "256px",
            alt: "A data table component with nested components in different variants as an example of supported nested overrides."
        }],
        caption: "Nested components can be adjusted to different variants."
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/variant-override-bulk-nested-dont.svg",
            width: "256px",
            alt: "A data table component representing nested components that had the size changed, representing unsupported nested overrides."
        }],
        caption: "Nested components cannot be increased or decreased in size."
    }
} %}

## Size and variant overrides

### Nested actions in full-page overlay components

Bulk action buttons, such as those in full-page overlays (e.g., modals, bottom sheets, date pickers), may need adjustments to ensure they are usable and consistent across various layouts and screen sizes.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/size-nested-actions-1.svg",
alt: "Modal component with two actions buttons as nested overrides.",
width: 120
} %}
  {% endcontentItem %}
  {% contentItem %}
   {% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/size-nested-actions-2.svg",
alt: "Bottom sheet component with two actions buttons as nested overrides.",
width: 120
} %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/size-nested-actions-3.svg",
alt: "A date picker component highlighting the dates from January 18 2021 to February 5 2021 with two action buttons as nested overrides.",
width: 120
} %}

Overrides help in scaling button sizes to fit within bulk action toolbars or containers, ensuring they are proportionate and visually balanced. Style can be adjusted to any variant, as long as it aligns with the visual hierarchy. Ensure primary actions are more prominent than secondary actions.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/size-nested-actions-modal-do.svg",
            width: "256px",
            alt: "A modal component with two action buttons with the same size representing supported nested overrides."
        }],
        caption: "Nested actions in full-page overlay components can be adjusted to different sizes, but all actions within the same set must maintain a consistent size."
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/size-nested-actions-modal-dont.svg",
            width: "256px",
            alt: "A modal component with two action buttons of different sizes representing unsupported nested overrides."
        }],
        caption: "Nested actions cannot have different sizes individually within the same component."
    }
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/size-nested-actions-bottom-sheet-do.svg",
            width: "256px",
            alt: "A bottom sheet component with two action buttons in different variants representing supported nested overrides."
        }],
        caption: "Nested actions in full-page overlay components can be adjusted to different variants. However, the primary action must always be more prominent than secondary actions."
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/size-nested-actions-bottom-sheet-dont.svg",
            width: "256px",
            alt: "A bottom sheet component with two action buttons in the same variant representing unsupported nested overrides."
        }],
        caption: "Nested actions can't use the same variant for both primary and secondary actions, nor should the primary action be less prominent than the secondary action."
    }
} %}

### Size overrides only

#### Nested actions in non-full-page overlay components

Action buttons within non-full-page overlays components (e.g. notifications, uploaders) may need size adjustments to ensure they match the overall layout and user expectations.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/size-nested-actions-full-notification.svg",
alt: "A notification component with nested action buttons as nested overrides.",
width: 120
} %}
  {% endcontentItem %}
  {% contentItem %}
   {% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/size-nested-actions-full-uploader.svg",
alt: "An uploader component with one nested action button as nested override.",
width: 120
} %}
  {% endcontentItem %}
{% endcontentLayout %}

Nested actions can be decreased in size to fit the available space and maintain visual balance. However, the variant should remain unchanged to ensure consistency with the overall visual hierarchy.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/size-nested-actions-full-do-example-1.svg",
            width: "256px",
            alt: "An uploader component with an action button in a different size but the same variant representing a supported nested override."
        }],
        caption: "Nested action(s) can be decreased in size."
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/size-nested-actions-full-dont-example-1.svg",
            width: "256px",
            alt: "Two uploader components with an action button in a different size and variant, representing an unsupported nested override."
        }],
        caption: "Nested actions can't be increased in size nor changed to a different variant."
    }
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/size-nested-actions-full-do-example-2.svg",
            width: "256px",
            alt: "A notification component in the information variant with a primary and ghost button representing supported nested overrides."
        }],
        caption: "Nested bulk actions can be decreased in size."
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/size-nested-actions-full-dont-example-2.svg",
            width: "256px",
            alt: "A notification component in the information variant with a secondary and a ghost button, representing unsupported nested override."
        }],
        caption: "Nested bulk actions cannot be increased in size nor changed to a different variant."
    }
} %}

---

## Alignment overrides

By default, content within components is top-aligned. However, certain nested elements may require vertical alignment adjustments to maintain a proper visual hierarchy and ensure balance within the layout.

{% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/alignment-override.svg",
alt: "A list item component with leading and trailing icons top-aligned.",
width: 120
} %}

When necessary, content can be center-aligned, ensuring that all elements—including leading and trailing content—are aligned consistently for a cohesive and well-balanced layout.

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/alignment-override-do.svg",
            width: "256px",
            alt: "A list item component with leading and trailing icons center-aligned, representing supported nested overrides."
        }],
        caption: "All content within the component should be consistently aligned."
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/alignment-override-dont.svg",
            width: "256px",
            alt: "A list item component with the leading icon centre-aligned and the trailing icons top-aligned, representing unsupported nested overrides."
        }],
        caption: "Content within the component should not have mixed alignments."
    }
} %}

---

## Restricted overrides

### Nested actions with specific purpose

Certain nested actions that serve a specific purpose cannot be overridden. For example, a close button, which is typically a standard icon or action, cannot be overridden in terms of style or size. This ensures functionality is preserved and prevents visual disruption in key interactive elements.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/restricted-override-example-1.svg",
alt: "A tooltip component with a close icon button representing a supported nested override.",
width: 120
} %}
  {% endcontentItem %}
  {% contentItem %}
   {% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/restricted-override-example-2.svg",
alt: "A toast component with one nested action button representing a supported nested override.",
width: 120
} %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/restricted-override-example-3.svg",
alt: "A modal component with a close icon button representing a supported nested override.",
width: 120
} %}
  {% endcontentItem %}
  {% contentItem %}
   {% contentPageImage {
src:"../../../assets/img/patterns/nested-overrides/restricted-override-example-4.svg",
alt: "A notification component with one nested action button representing a supported nested override.",
width: 120
} %}
  {% endcontentItem %}
{% endcontentLayout %}

{% usage {
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/patterns/nested-overrides/restricted-override-dont.svg",
            width: "256px",
            alt: "A toast and a notification component in the information variant with the close icon button changed to a different variant, representing unsupported nested overrides."
        }],
        caption: "Actions with specific purpose should not be changed to a different variant."
    }
} %}

---

## Typography overrides

Typography overrides are useful to tailor text to suit different use cases and visual needs.

### Style

Only body text and captions can be styled, e.g. **bold** or _underlined_. These changes should be evaluated on a case-by-case basis by the design system team.

### Weight

The font weight should remain consistent and cannot be scaled up or down to maintain clarity and visual consistency across all components.
