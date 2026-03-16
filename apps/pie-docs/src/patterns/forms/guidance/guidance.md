---
eleventyNavigation:
    key: Guidance
    parent: 'Forms'
    order: 2
shouldShowContents: true
---

## Anatomy

{% notification {
  type: "warning",
  message: "Please note that our default haptic feedback types **cannot be overridden or altered**."
} %}

{% list {
    type: listTypes.ordered,
    items: [
        "**Header (Optional):** A title and subheading can provide additional context for the user.",
        "**Body:** This is the area where the user provides information. Various input components can be used to help users submit the right data.",
        "**Row:** A row of content, in this case split into two by a select input and a text input. ",
    "**Footer:** Provides important actions such as submitting or saving data. "
    ]
} %}


### Appropriate body inputs

Use the appropriate input where possible for each data piece required. Such as:

{% contentLayout %}
  {% contentItem %}
    <h4>Checkboxes</h4>
    <p>
    [Checkboxes](/components/checkbox/) allow users to choose multiple options from an extensive list and for binary options that permit multiple selections, such as confirming terms and conditions.
    </p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-leading-icon.svg",
      width: "256px",
      alt: "Text input with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Date pickers</h4>
    <p>
    [Date pickers](/components/date-picker/) provide an easy way to select specific dates or data ranges in a consistent, risk averse manner (e.g. bookings or appointments). Don't use a date picker if the user already knows or is very familiar with the date, e.g. date of birth.
    </p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-leading-icon.svg",
      width: "256px",
      alt: "Text input with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Dropdown</h4>
    <p>
    [Dropdowns](/components/dropdown/) are for selecting one option from a long, predefined list of choices when conserving space is important. Dropdowns also allow hiding information which isn’t frequently used.
    </p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-leading-icon.svg",
      width: "256px",
      alt: "Text input with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Numeric steppers</h4>
    <p>
    [Numeric steppers](/components/numeric-stepper/) are used when users need to input precise numeric data with easy to identify increments and decrements. A defined range or step size works best such as 1, 5, or 10.
    </p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-leading-icon.svg",
      width: "256px",
      alt: "Text input with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Radio Buttons</h4>
    <p>
    [Radio buttons](/components/radio/) are for selecting one option from a small group of mutually exclusive choices and displaying all of those choices openly. This improves scannability and requires less actions from the user to see all of their options.
    </p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-leading-icon.svg",
      width: "256px",
      alt: "Text input with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Select inputs</h4>
    <p>
    [Select inputs](/components/select-input/) are for selecting one option from a long, predefined list of choices when conserving space is important. Select inputs also allow hiding information which isn’t frequently used.
    </p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-leading-icon.svg",
      width: "256px",
      alt: "Text input with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Switches</h4>
    <p>
    [Switches](/components/switch/) are best utilised for binary on/off decisions. Switches are also particularly appropriate when an action has an immediate effect without requiring form submission.
    </p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-leading-icon.svg",
      width: "256px",
      alt: "Text input with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Textareas</h4>
    <p>
    [Textareas](/components/textarea/) are used for multi-line, open-ended responses where users may need to write longer content. They excel at facilitating the collection of detailed and descriptive data, e.g. feedback and comments.
    </p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-leading-icon.svg",
      width: "256px",
      alt: "Text input with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Text inputs</h4>
    <p>
    [Text inputs](/components/text-input/) are used for short, open-ended data entry which require precise manual information (e.g. names, email addresses and postcodes). Typically, the input should be used for one line of text.
    </p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-leading-icon.svg",
      width: "256px",
      alt: "Text input with a leading icon."
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <h4>Uploaders</h4>
    <p>
    [Uploaders](/components/uploader/) give users the ability to submit more complex data files such as documents, images, and other media easily.
    </p>
    {% contentPageImage {
      src: "../../../assets/img/components/text-input/modifiers-leading-icon.svg",
      width: "256px",
      alt: "Text input with a leading icon."
    } %}
  {% endcontentItem %}

{% endcontentLayout %}

---

## Body structure

### Input widths

Define four standardised width options for form inputs to set clear expectations for users. These widths should be consistent across the pillar, and align to the grid.
Input width should align with the expected length of the user’s entry, the longer the entry, the wider the input, and vice versa.

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/body-structure-input-widths.svg",
  alt: "Body structure example showing different form input widths.",
  width: "790px"
} %}

### Column layouts

#### Ordering

Where possible input fields should be arranged in a vertical layout (stacked on top of each other) rather than placed side by side or in a grid-like arrangement.
Form content should be prepared to be read line by line either LTR or RTL depending on the language of the content to ensure users can easily digest the form.

{% usage {
  do: {
    type: usageTypes.image,
    items: [{
      src: "../../../assets/img/patterns/forms/column-layouts-ordering-do.svg",
      width: "380px",
      alt: "Example showing the recommended ordering for form fields."
    }]
  },
  dont: {
    type: usageTypes.image,
    items: [{
      src: "../../../assets/img/patterns/forms/column-layouts-ordering-dont.svg",
      width: "380px",
      alt: "Example showing a form field ordering pattern to avoid."
    }]
  }
} %}

#### Rows

Logically related fields can be placed in the same row, including standard inputs and those with prefixes or suffixes.

{% contentLayout %}
  {% contentItem %}
    <p>Logically related fields</p>
    <p>Two fields can be logically related by belonging to the same category of data. For example, a city and postcode both belong to an address.</p>

    {% contentPageImage {
      src:"../../../assets/img/patterns/forms/column-layouts-logically-related-fields.svg",
      alt: "Example showing logically related fields placed in the same row.",
      width: "380px"
    } %}
  {% endcontentItem %}
  {% contentItem %}
    <p>Prefixes and suffixes</p>
    <p>Two fields with a connected relationship can be linked using an editable prefix or suffix, allowing users to modify the inputs directly.</p>

    {% contentPageImage {
      src:"../../../assets/img/patterns/forms/column-layouts-prefixes-suffixes.svg",
      alt: "Example showing related fields with editable prefixes or suffixes.",
      width: "380px"
    } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Alignment

Input fields which do not fill their row should be aligned in the direction that they are read from based on the language of the content. E.g. LTR forms should align their inputs to the left.

Footers should either be aligned to the opposite side of input content, or fill their container in small viewports. This is to provide contrast with the form body.

---

## Layout

Outlines the internal spacing structure of the component. See the [Spacing](/foundations/spacing/) documentation for token details.

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/layout-spacing-structure.svg",
  alt: "Layout example showing the internal spacing structure of a form.",
  width: "790px"
} %}

---

## Content

Use sentence-style capitalisation and active language; strive for clarity and brevity in all copy. For additional guidance, refer to the UX copy team's documentation.

### Button labels

[Button labels](/components/button/) should guide users through a clear indication of the action the button will take once clicked. Use active verbs, such as Add or Delete. For a pair of buttons, use specific labels, such as Save or Discard, instead of using OK and Cancel. This is particularly helpful when the user is confirming an action.

### Form labels

[Form labels](/components/form-label/) are a necessity because sighted users can read them, screen readers users will hear them and motor-impaired users can more accurately set their focus area to them (due to the larger focus area). Avoid using placeholder’s as labels, once a user starts inputting data they won’t be able to read what the label was. Making it difficult to review answers.

### Assistive text

[Assistive text](/components/assistive-text/) should always be clear, concise, and actionable to guide users effectively. Whether offering instructions, highlighting errors, or confirming success, focus on providing users with the information they need to complete their tasks confidently.

---
