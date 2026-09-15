---
eleventyNavigation:
  key: Apps
  parent: 'Payment Method Card'
  order: 1
shouldShowContents: true
permalink: components/payment-method-card/
---

## Overview

The payment method card displays the user’s payment method information.

{% contentPageImage {
    src:"../../../assets/img/components/payment-method/overview.svg",
    alt: "Overview of the payment method card component showing a card with an icon, payment method name, status tag, and cardholder name."
} %}

---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Stack multiple payment method components where needed."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't override icon and background pairings. If you need a new variant please follow this process.",
            "Don't resize the component."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/payment-method/anatomy.svg",
    alt: "Annotated diagram of a payment method card showing its main parts: icon, payment method name, status, cardholder name, and background.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Icon:** Displays the icon associated with the payment method.",
        "**Payment method name:** Displays the name associated with the payment method.",
        "**Status:** Changes based on the validity or user preferences of the payment method card.",
        "**Cardholder name:** Displays the name issued on the card.",
        "**Background:** Displays the background colours associated with the payment method's brand."
    ]
} %}

---

## Variants

{% contentLayout %}
  {% contentItem %}
    <h3>Afterpay</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-afterpay.svg",
        alt: "Payment method card showing the Afterpay variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Amazon Pay</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-amazon-pay.svg",
        alt: "Payment method card showing the Amazon Pay variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Apple Pay</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-apple-pay.svg",
        alt: "Payment method card showing the Apple Pay variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Bank of Ireland</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-bank-of-ireland.svg",
        alt: "Payment method card showing the Bank of Ireland variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Bank of Scotland</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-bank-of-scotland.svg",
        alt: "Payment method card showing the Bank of Scotland variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Barclays</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-barclays.svg",
        alt: "Payment method card showing the Barclays variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Chase</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-chase.svg",
        alt: "Payment method card showing the Chase variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Danske Bank</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-danske-bank.svg",
        alt: "Payment method card showing the Danske Bank variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Google Pay</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-google-pay.svg",
        alt: "Payment method card showing the Google Pay variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>First Direct</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-first-direct.svg",
        alt: "Payment method card showing the First Direct variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Halifax</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-halifax.svg",
        alt: "Payment method card showing the Halifax variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>HSBC</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-hsbc.svg",
        alt: "Payment method card showing the HSBC variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Lloyds</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-lloyds.svg",
        alt: "Payment method card showing the Lloyds variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Monzo</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-monzo.svg",
        alt: "Payment method card showing the Monzo variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Nationwide</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-nationwide.svg",
        alt: "Payment method card showing the Nationwide variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>NatWest</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-natwest.svg",
        alt: "Payment method card showing the NatWest variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Paypal</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-paypal.svg",
        alt: "Payment method card showing the Paypal variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Revolut</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-revolut.svg",
        alt: "Payment method card showing the Revolut variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Royal Bank of Scotland</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-royal-bank-of-scotland.svg",
        alt: "Payment method card showing the Royal Bank of Scotland variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Santander</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-santander.svg",
        alt: "Payment method card showing the Santander variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Starling</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-starling.svg",
        alt: "Payment method card showing the Starling variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Tesco Bank</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-tesco-bank.svg",
        alt: "Payment method card showing the Tesco Bank variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>TSB</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-tsb.svg",
        alt: "Payment method card showing the TSB variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Ulster Bank</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-ulster-bank.svg",
        alt: "Payment method card showing the Ulster Bank variant.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Virgin Money</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/variants-virgin-money.svg",
        alt: "Payment method card showing the Virgin Money variant.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## States

Each variant of the payment method card has three states: default, non-default and expired.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    <p>The tag indicates the card is the default payment option.</p>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/states-default.svg",
        alt: "Payment method card in the default state, showing a tag indicating it is the default payment option.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Non-default</h3>
    <p>The payment method is not predefined by the user.</p>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/states-non-default.svg",
        alt: "Payment method card in the non-default state, without a default tag.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Expired</h3>
    <p>An added banner and a tag display that there is an error with the payment method.</p>
    {% contentPageImage {
        src:"../../../assets/img/components/payment-method/states-expired.svg",
        alt: "Payment method card in the expired state, showing an error banner and tag.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Sizes

Resizing the component is not needed. The component follows the size and shape of a physical card.

{% notification {
  type: "warning",
  message: "**Keep in mind:** The size of the component can only be changed proportionally. Ideally when used in conjunction with interactions or nested within components."
} %}

### Height

- Minimum height of 170px when on default state.
- Height increases to 218px when displaying the expired state.

{% contentPageImage {
    src:"../../../assets/img/components/payment-method/sizes-height.svg",
    alt: "Diagram showing the payment method card height measurements for default and expired states.",
    width: "200"
} %}

### Width

- Maximum width of 328px, allowing for proportional scaling if necessary.

{% notification {
  type: "warning",
  message: "**Recomendation:** Don't resize the component if placed on a bigger screen. It should resemble the actual size of a physical card."
} %}

#### Narrow screens

In narrow screens the payment method card uses the original component size.

{% contentPageImage {
    src:"../../../assets/img/components/payment-method/sizes-width-narrow.svg",
    alt: "Payment method card displayed at its original size on a narrow screen.",
    width: "200"
} %}

#### Wide screens

In wider screens the payment method card remains the same size.

{% contentPageImage {
    src:"../../../assets/img/components/payment-method/sizes-width-wide.svg",
    alt: "Payment method card displayed at its original size on a wide screen.",
    width: "200"
} %}

### Icon size

The payment method icon follows the size and proportions of the original Icon / Payment method (32x24px) component that is nested.

{% contentPageImage {
    src:"../../../assets/img/components/payment-method/sizes-icon.svg",
    alt: "Diagram showing the payment method icon size at 32x24px.",
    width: "200"
} %}

---

## Content

{% notification {
  type: "information",
  message: "The component displays highly monitored third party branding elements. These are to be updated whenever the branding guidelines of the payment service providers are updated."
} %}

### Icon

Size and proportions remain unchanged from the payment method icons in our Icons library.

### Background

- Asset used for the background needs to be sourced from the pillar repository, not from the PIE repository.
- The available background assets are to be used as reference and are not available for production.
- Follow the guidelines to create and maintain new payment method card background assets. Contact the design system team for the link.

### Cardholder name

Text string shouldn't break into 2 lines.

---

## Overrides

{% contentPageImage {
    src:"../../../assets/img/components/payment-method/overrides.svg",
    alt: "Payment method card showing the elevation override applied.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Elevation:** An elevation token can be added based on placement and positioning in relation to other elements."
    ]
} %}

---

## Behaviour

### Shimmer effect

The shimmer effect from the Skeleton component can be utilised as a moment of delight.

{% notification {
  type: "information",
  message: "**Suggestion:** The animation can be triggered via interaction or based on gyroscope coordinates."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/payment-method/behaviour-shimmer-effect.svg",
    alt: "Payment method card showing the shimmer effect behaviour.",
    width: "200"
} %}

---

## Layout

### Stacking

Component can be resized proportionally only while stacking multiple cards.

{% contentPageImage {
    src:"../../../assets/img/components/payment-method/layout-stacking.svg",
    alt: "Payment method cards stacked, showing proportional resizing.",
    width: "200"
} %}

---

## Examples

### LTR

Here are some examples of Payment method card in left-to-right context.

{% contentPageImage {
    src:"../../../assets/img/components/payment-method/examples-ltr.svg",
    alt: "Example of payment method cards in a left-to-right layout.",
    width: "200"
} %}

### RTL

In right-to-left context the payment method card component remains the same but cardholder name changes direction.

{% contentPageImage {
    src:"../../../assets/img/components/payment-method/examples-rtl.svg",
    alt: "Example of payment method cards in a right-to-left layout, with cardholder name mirrored.",
    width: "200"
} %}
