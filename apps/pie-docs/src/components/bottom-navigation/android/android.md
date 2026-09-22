---
eleventyNavigation:
  key: Android
  parent: 'Bottom Navigation'
  order: 2
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use minimum 3 and maximum 5 tabs for navigation across the app.",
            "Make the navigation bar always visible. The exception is when an overlay is opened.",
            "Use a clear visual hierarchy to indicate the currently active destination."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don't change the tabs for a specific user flow. The navigation bar should be consistent across app screens.",
            "Ensure the icons are simple and universally understood to minimise confusion.",
            "Avoid long or complex wording; keep labels concise and direct."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/bottom-navigation/android/anatomy.svg",
    alt: "A docked bottom navigation bar anchored at the bottom of a mobile screen.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Container:** Provides a filled background.",
        "**Icon (selected):** The icon is always filled and is visually distinguished from the inactive ones.",
        "**Label:** Describes the purpose and function of the tab to provide clarity, especially for less common or ambiguous icons.",
        "**Home indicator:** Navigation bar for accessing core system functions on Android.",
        "**Icon (unselected):** Visually supports the label and doesn't have a fill.",
        "**Notification badge:** Displays notifications, or counts on navigation items."
    ]
} %}

---

## Variants

{% contentLayout %}
  {% contentItem %}
    <h3>Docked</h3>
    It's anchored at the bottom of the screen.
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/variants-docked.svg",
        alt: "A bottom navigation bar with five tabs. The first tab is active, shown with an orange icon and a highlighted background. The remaining four tabs are inactive with grey icons. Each tab has a text label beneath it. A home indicator pill is centred at the bottom.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Floating</h3>
    Sits on top of content.
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/variants-floating.svg",
        alt: "A floating bottom navigation bar sitting on top of content on a mobile screen.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Content

### Label

Labels should always be one word with clear meaning to aid navigation through the app. Avoid long or complex wording; keep labels concise and direct.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/content-label-docked.svg",
        alt: "A bottom navigation bar showing concise labels beneath each icon.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/content-label-floating.svg",
        alt: "A bottom navigation bar showing concise labels beneath each icon.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Notification badge

Badges appear on top of the icon. They show the number of notifications in a specific tab. The badge will change size depending on the number of digits contained without changing position.

#### Position

{% notification {
  type: "warning",
  message: "Don't override the properties of the notification badge."
} %}

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/content-notification-docked.svg",
        alt: "A docked bottom navigation bar showing a notification badge on a tab.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/content-notification-docked.svg",
        alt: "A floating bottom navigation bar showing a notification badge on a tab.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

</br>

#### Character count

- Allow for a maximum of 2 digits.
- A plus (+) sign should be used if the number is higher than 2 digits.

{% notification {
  type: "information",
  message: "Each context and case might require different logic on when to remove the notification badge or the number of digits allowed to display."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/bottom-navigation/android/content-notification-character-count.svg",
    alt: "A bottom navigation bar showing notification badges with the maximum character count of two digits and a plus sign.",
    width: "200"
} %}

### Overflow

Labels should not go over one line of text. If they do the text will truncate. Avoid this happening by keeping text label succinct and testing any translations across devices. Use alternative titles if translations are too long.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-navigation/android/overflow-docked.svg",
    alt: "A docked bottom navigation bar showing truncated label text on a tab.",
    width: "200"
} %}

---

## Placement

### Docked

It's anchored at the bottom of the screen.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-navigation/android/placement-docked.svg",
    alt: "A bottom navigation bar anchored at the bottom edge of a mobile screen.",
    width: "200"
} %}

### Floating

Sits on top of content with 16px vertical and 24px horizontal padding.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-navigation/android/placement-floating.svg",
    alt: "A floating bottom navigation bar with padding above and to the sides on a mobile screen.",
    width: "200"
} %}

---

## Interactions

### Touch targets

Defines the touch targets of interactive elements across variants.

{% contentPageImage {
    src:"../../../assets/img/components/bottom-navigation/android/interactions-touch-targets.svg",
    alt: "A bottom navigation bar showing the touch target areas for each tab.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Active tab:** Navigates to a section in the app."
    ]
} %}

---

## Interactive states

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    The icon doesn't have a fill.
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/interactive-states-default.svg",
        alt: "A bottom navigation bar showing tabs in the default state with unfilled icons.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Active</h3>
    The icon doesn't have a fill but has a background using `$active-01`.
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/interactive-states-active.svg",
        alt: "A bottom navigation bar showing a tab in the active state with a background highlight.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Selected</h3>
    The icon has a fill, a background with opacity and the colour changes.
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/interactive-states-selected.svg",
        alt: "A bottom navigation bar showing a tab in the selected state with a filled icon and coloured background.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## Examples

### LTR examples

Here are some examples of the Android Bottom navigation in left-to-right context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/examples-ltr-1.svg",
        alt: "An example of the Android bottom navigation in a left-to-right layout.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/examples-ltr-2.svg",
        alt: "An example of the Android bottom navigation in a left-to-right layout.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

### RTL examples

Here are some examples of the Android Bottom navigation in right-to-left context.

{% contentLayout %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/examples-rtl-1.svg",
        alt: "An example of the Android bottom navigation in a right-to-left layout.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    {% contentPageImage {
        src:"../../../assets/img/components/bottom-navigation/android/examples-rtl-2.svg",
        alt: "An example of the Android bottom navigation in a right-to-left layout.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}
