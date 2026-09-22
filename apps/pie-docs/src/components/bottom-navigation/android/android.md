---
eleventyNavigation:
  key: Android
  parent: 'Bottom Navigation'
  order: 1
shouldShowContents: true
---

## Dos and Don'ts

**Do**

- Use minimum 3 and maximum 5 tabs for navigation across the app.
- Make the navigation bar always visible. The exception is when an overlay is opened.
- Ensure the icons are simple and universally understood to minimise confusion.
- Use a clear visual hierarchy to indicate the currently active destination.
- Avoid long or complex wording; keep labels concise and direct.

**Don't**

- Don't change the tabs for a specific user flow. The navigation bar should be consistent across app screens.

---

## Anatomy

--- > IMAGE PLACEHOLDER

1. **Container:** Provides a filled background.
2. **Icon (selected):** The icon is always filled and is visually distinguished from the inactive ones.
3. **Label:** Describes the purpose and function of the tab to provide clarity, especially for less common or ambiguous icons.
4. **Home indicator:** Navigation bar for accessing core system functions on Android.
5. **Icon (unselected):** Visually supports the label and doesn't have a fill.
6. **Notification badge:** Displays notifications, or counts on navigation items.

---

## Variants

### Docked

It's anchored at the bottom of the screen.

--- > IMAGE PLACEHOLDER

### Floating

Sits on top of content.

--- > IMAGE PLACEHOLDER

---

## Content

### Label

Labels should always be one word with clear meaning to aid navigation through the app. Avoid long or complex wording; keep labels concise and direct.

--- > IMAGE PLACEHOLDER

### Notification badge

Badges appear on top of the icon. They show the number of notifications in a specific tab. The badge will change size depending on the number of digits contained without changing position.

- Don't override the properties of the notification badge.
- Allow for a maximum of 2 digits; a plus (+) sign should be used if the number is higher than 2 digits.
- Each context and case might require different logic on when to remove the notification badge or the number of digits allowed to display.

--- > IMAGE PLACEHOLDER

### Overflow

Labels should not go over one line of text. If they do the text will truncate — you should avoid this happening by keeping text succinct and testing any translations across devices. Use alternative titles if translations are too long.

--- > IMAGE PLACEHOLDER

---

## Placement

### Docked

It's anchored at the bottom of the screen.

--- > IMAGE PLACEHOLDER

### Floating

Sits on top of content with 16px vertical and 24px horizontal padding.

--- > IMAGE PLACEHOLDER

---

## Interactions

### Touch targets

Defines the touch targets of interactive elements across variants.

--- > IMAGE PLACEHOLDER

- **Active tab:** Navigates to a section in the app.

---

## Interactive states

### Default

The icon doesn't have a fill.

--- > IMAGE PLACEHOLDER

### Active

The icon doesn't have a fill but has a background using `$active-01`.

--- > IMAGE PLACEHOLDER

### Selected

The icon has a fill, a background with opacity and the colour changes.

--- > IMAGE PLACEHOLDER

---

## Examples

### LTR examples

Here are some examples of the [Android] Bottom navigation in left-to-right context.

--- > IMAGE PLACEHOLDER

### RTL examples

Here are some examples of the [Android] Bottom navigation in right-to-left context.

--- > IMAGE PLACEHOLDER
