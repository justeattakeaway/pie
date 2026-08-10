---
eleventyNavigation:
    key: Web
    parent: Avatar
    order: 2
shouldShowContents: true
---

## Do's and don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Prioritise initials avatar over user icon avatar for individuals.",
            "Make sure you use the correct size for its placement, whether it's in a list, stand-alone, or any other context.",
            "Always maintain equal width and height dimensions."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't use the initials avatar for a non-individual entity (e.g. a company)."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/anatomy.svg",
alt: "Example of an avatar component anatomy.",
variant: "secondary",
width: 200
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Container:** Background container that organises the information.",
        "**Initials:** Displays the user's first and last name initials.",
        "**User Icon:** It can represent any entity, such as a user or a business.",
        "**Photo:** Displays a picture of the user."
    ]
} %}

---

## Variants

### Initials

Use the initials avatar variation when you want to represent an individual user. Use it only when the name is known.

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/variants-initials.svg",
alt: "Example of the avatar in the initials variant.",
width: 200
} %}

### User Icon

Use the user icon avatar variation when you want to represent an individual user whose name has not been specified, or for non-individual entities such as companies, teams or groups.

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/variants-user-icon.svg",
alt: "Example of the avatar in the user icon variant.",
width: 200
} %}

### Photo

Use the Photo avatar variation when you want to display a picture of the user.

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/variants-photo.svg",
alt: "Example of the avatar in the photo variant.",
variant: "secondary",
width: 200
} %}

### Unauthenticated

Use the unauthenticated variation when the user hasn't logged in or authenticated their session yet.

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/variants-unauthenticated.svg",
alt: "Example of the avatar in the unauthenticated variant.",
width: 200
} %}

---

## Modifiers

### Emphasis

Depending on the level of visual prominence you want to give to your avatar, you can choose between strong or subtle emphasis.

{% contentLayout %}
  {% contentItem %}
  <h4>Strong</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/modifiers-strong.svg",
      width: 200,
      alt: "Example of the avatar with strong emphasis."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>Subtle</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/modifiers-subtle.svg",
      width: 200,
      alt: "Example of the avatar with subtle emphasis."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Colours

Select from a palette of distinct brand colours for your avatar.

{% contentLayout %}
  {% contentItem %}
  <h4>Neutral</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/modifiers-colours-neutral.svg",
      width: 200,
      alt: "Example of the avatar in the neutral colour variant."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>01 Orange</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/modifiers-colours-01orange.svg",
      width: 200,
      alt: "Example of the avatar in the 01 Orange colour variant."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>02 Orange Subtle</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/modifiers-colours-02orange-subtle.svg",
      width: 200,
      alt: "Example of the avatar in the 02 Orange Subtle colour variant."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>03 Cupcake</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/modifiers-colours-03cupcake.svg",
      width: 200,
      alt: "Example of the avatar in the 03 Cupcake colour variant."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>04 Berry</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/modifiers-colours-04berry.svg",
      width: 200,
      alt: "Example of the avatar in the 04 Berry colour variant."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>05 Turmeric</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/modifiers-colours-05turmeric.svg",
      width: 200,
      alt: "Example of the avatar in the 05 Turmeric colour variant."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h4>06 Aubergine</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/modifiers-colours-06aubergine.svg",
      width: 200,
      alt: "Example of the avatar in the 06 Aubergine colour variant."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h4>08 Latte</h4>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/modifiers-colours-08latte.svg",
      width: 200,
      alt: "Example of the avatar in the 08 Latte colour variant."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Outline

You can apply an outline to the Photo variant, which helps with clarity and gives a good contrast to the avatar.

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/modifiers-outline.svg",
alt: "Example of an avatar component in the outline colour variant.",
variant: "secondary",
width: 200
} %}

---

## Interaction

### Interactive

An avatar should be interactive when it serves a specific purpose or action within the user interface.

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/interaction-interactive.svg",
alt: "Example of an interactive avatar.",
width: 200
} %}

### Non-interactive

Use the avatar in a static form, if you want the avatar to retain its original appearance without any interactive features tied with the content or context.

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/interaction-non-interactive.svg",
alt: "Example of a non-interactive avatar.",
width: 200
} %}

---

## Sizes

### Small (S)

Height and width of 24px.

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/sizes-small.svg",
alt: "Example of a small avatar.",
variant: "secondary",
width: 200
} %}

### Medium (M)

Height and width of 32px.

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/sizes-medium.svg",
alt: "Example of a medium avatar.",
variant: "secondary",
width: 200
} %}

### Large (L)

Height and width of 40px.

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/sizes-large.svg",
alt: "Example of a large avatar.",
variant: "secondary",
width: 200
} %}

### X Large (XL)

Height and width of 56px.

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/sizes-extra-large.svg",
alt: "Example of an extra large avatar.",
variant: "secondary",
width: 200
} %}

---

## Content

### Initials

Use the first letter of the user's first and last name as the initials in the avatar, limited to a maximum of two capital letters. The letters should always be centre-aligned.

{% notification {
  type: "information",
  message: "However, in cases where the concept of first and last name doesn't apply or when there is no specific individual identified, the user icon variant should be used instead."
} %}

{% usage {
    do: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/avatar/web/content-initials-do.svg",
            width: 200,
            alt: "Example of an avatar with initials."
        }]
    },
    dont: {
        type: usageTypes.image,
        items: [{
            src: "../../../assets/img/components/avatar/web/content-initials-dont.svg",
            width: 200,
            alt: "Example of an avatar with more than two initials, which is not supported."
        }]
    }
} %}

---

## Interactive states

{% contentLayout %}
  {% contentItem %}
  <h3>Default</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/states-default.svg",
      width: 200,
      alt: "Example of an avatar component in the default state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Hover</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/states-hover.svg",
      width: 200,
      alt: "Example of an avatar component in the hover state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

{% contentLayout %}
  {% contentItem %}
  <h3>Active</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/states-active.svg",
      width: 200,
      alt: "Example of an avatar component in the active state."
    } %}
  {% endcontentItem %}
  {% contentItem %}
  <h3>Focus</h3>
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/states-focus.svg",
      width: 200,
      alt: "Example of an avatar component in the focus state."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Disabled

{% contentPageImage {
src:"../../../assets/img/components/avatar/web/states-disabled.svg",
alt: "Example of an avatar component in the disabled state.",
width: 200
} %}

---

## Examples

Here are some examples of Avatar in context:

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/examples-left.svg",
      width: 200,
      alt: "Example of the avatar component in the accounts section of an application."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
      src: "../../../assets/img/components/avatar/web/examples-right.svg",
      width: 200,
      alt: "Example of the avatar component as it appears in the profile in a navigation bar."
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
