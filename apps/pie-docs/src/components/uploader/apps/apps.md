---
eleventyNavigation:
    key: Apps
    parent: Uploader
    order: 3
shouldShowContents: true
---

## Dos and Don'ts

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use Assistive Text and Label Details for additional info like file size and file format ."
        ]
    }
} %}

---

## Anatomy

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/anatomy-uploader.svg",
    alt: "Annotated diagram of an uploader component showing its main parts: label, string, assistive text, button/icon button, assistive text, and string.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Form label:** The Form Label provides necessary content / information to a field.",
        "**String:** Informational content like file name.",
        "**Assistive Text (Optional):** Assistive text to provide additional instructional information like file format.",
        "**Button / Icon button:** Opens OS file browser.",
        "**Assistive Text:** The Assistive Text provides additional instructional information like maximum file size.",
        "**String:** Text label informing the user about option/action like file size."
    ]
} %}

---

## Variants

### Default

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/variants-default.svg",
    alt: "An uploader component in its default state, showing a label and a browse button.",
    width: "200"
} %}

---

## Modifiers

### Label

Label is optional for "Uploading", "Success" and "Error" states.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/modifiers-label.svg",
    alt: "Uploader component without the optional label modifier across uploading, success, and error states.",
    width: "200"
} %}

### Preview

An optional preview is displayed once the file has been successfully uploaded. This may appear either within a preview container or as a thumbnail.

{% notification {
  type: "information",
  message: "Each uploader is only allowed to have one preview."
} %}

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/modifiers-preview.svg",
    alt: "Uploader component showing a file preview after a successful upload.",
    width: "200"
} %}

### Preview error

If an image fails to upload, a thumbnail with a placeholder (fallback image) may be displayed in the error state.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/modifiers-preview-error.svg",
    alt: "Uploader component showing a placeholder thumbnail in the error state when an image fails to upload.",
    width: "200"
} %}

### Actions

Uploader actions can be presented as buttons or icon buttons. The chosen style should remain consistent throughout the design.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/modifiers-actions.svg",
    alt: "Uploader component showing action buttons and icon buttons side by side.",
    width: "200"
} %}

---

## Content

### Label

**Strings in uploader**: All uploader text is predefined and not customisable.

**Action label**: Update action labels to suit the context if the default text does not meet your needs.

---

## Overrides

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/content-overrides.svg",
    alt: "Uploader component showing button size override options from medium to small.",
    width: "200"
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Button:** The Button / Icon button sizes can be decreased from Size medium to Size small."
    ]
} %}

---

## Behaviour

### Single Upload

#### Default

The "Browse" Button opens the OS browser for user to select a file.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/behaviour-single-upload-default.svg",
    alt: "Single upload uploader in the default state, showing the browse button.",
    width: "200"
} %}

#### Uploading

Once a file is selected, the uploader changes to the "Uploading" state. If you click the "Cancel" Button, the uploading stops and the Uploader changes back to the "Default" state.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/behaviour-single-upload-uploading.svg",
    alt: "Single upload uploader in the uploading state, showing a progress indicator and cancel button.",
    width: "200"
} %}

#### Success

Once a file is successfully uploaded, if you click the "Remove" Button, the upload is removed and the Uploader changes back to the "Default" state.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/behaviour-single-upload-success.svg",
    alt: "Single upload uploader in the success state, showing the uploaded file name and a remove button.",
    width: "200"
} %}

#### Error

If a file can't be uploaded, the Uploader changes to the "Error" state. If you click the "Retry" Button, the uploading restarts and the uploader changes to the "Uploading" state.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/behaviour-single-upload-error.svg",
    alt: "Single upload uploader in the error state, showing an error message and a retry button.",
    width: "200"
} %}

### Multi Upload

#### Uploading

Once a file is selected, an "Uploading" state of the Uploader appears underneath the uploader. If you click the "Cancel" Button, the uploading stops and the second Uploader disappears.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/behaviour-multi-upload-upload.svg",
    alt: "Multi upload uploader showing a second uploader in the uploading state beneath the first.",
    width: "200"
} %}

#### Success

Once a file is successfully uploaded, if you click the "Remove" Button, the upload is removed and the second uploader disappears.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/behaviour-multi-upload-success.svg",
    alt: "Multi upload uploader showing the second uploader in the success state with a remove button.",
    width: "200"
} %}

#### Error

If the file can't be uploaded, the second uploader changes to the "Error" state. If you click the "Retry" Button, the uploading restarts and the second uploader changes to the "Uploading" state.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/behaviour-multi-upload-error.svg",
    alt: "Multi upload uploader showing the second uploader in the error state with a retry button.",
    width: "200"
} %}

---

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
    <h3>Default</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/uploader/apps/interactive-states-default.svg",
        alt: "Uploader component showing the default interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Uploading</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/uploader/apps/interactive-states-uploading.svg",
        alt: "Uploader component showing the uploading interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Success</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/uploader/apps/interactive-states-success.svg",
        alt: "Uploader component showing the success interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h3>Error</h3>
    {% contentPageImage {
        src:"../../../assets/img/components/uploader/apps/interactive-states-error.svg",
        alt: "Uploader component showing the error interactive state.",
        width: "200"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

---

## LTR Examples

Here are some examples of Uploader in LTR context.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/examples-ltr.svg",
    alt: "Example of an uploader component used in a left-to-right apps context.",
    width: "200"
} %}

---

## RTL Examples

Here are some examples of Uploader in RTL context.

{% contentPageImage {
    src:"../../../assets/img/components/uploader/apps/examples-rtl.svg",
    alt: "Example of an uploader component in a right-to-left layout, with controls mirrored accordingly.",
    width: "200"
} %}
