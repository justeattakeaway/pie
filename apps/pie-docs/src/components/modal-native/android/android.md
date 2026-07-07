---
eleventyNavigation:
  key: Android
  parent: 'Modal - Native'
  order: 2
draft: true
---

# [Android] Dialog - Native V1.1.0

A Dialog is a pop-up window that prompts the user for interaction or information within an app interface.

---

## Overview

**Do**

- Use them for alerting users about critical information or errors.

**Don't**

- Displaying system-wide notifications or messages.
- For anything other than system prompted notifications and alerts. Use our PIE modal instead.

---

## Anatomy

> IMAGE PLACEHOLDER

1. **Title:** Concise heading for clarity.
2. **Body:** The main message or information.
3. **Action 1:** Main action for user interaction.
4. **Action 2 (Optional):** Secondary action option.
5. **Background:** Bounding box for the dialog's content.

### Modifiers

#### No body

You can use a native dialog with no body for quick confirmation messages, alerts, notifications or confirmation prompts where the title alone is enough.

> IMAGE PLACEHOLDER

---

## Interactions

### Closing the dialog

Tapping outside the dialog's boundaries will close it, providing an intuitive way to dismiss it without interacting with specific UI elements like calls to action (unless that is otherwise specified by the interaction).

> IMAGE PLACEHOLDER

---

## Content

### Title

- Ensure the content follows platform specific wording

### Body

- Ensure the content follows platform specific wording

### Calls to action

- Ensure the content follows platform specific wording

---

## Examples

### LTR examples

Here's an example of a Dialog in the LTR context:

> IMAGE PLACEHOLDER

### RTL Examples

Here's an example of a Dialog in the RTL context:

> IMAGE PLACEHOLDER
