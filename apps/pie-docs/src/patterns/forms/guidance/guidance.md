---
eleventyNavigation:
    key: Guidance
    parent: 'Forms'
    order: 2
shouldShowContents: true
---

## Anatomy

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/anatomy.svg",
  alt: "Anatomy diagram showing the header, body, row and footer regions of a form.",
  width: "699px"
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

#### Checkboxes

[Checkboxes](/components/checkbox/) allow users to choose multiple options from an extensive list and for binary options that permit multiple selections, such as confirming terms and conditions.

{% contentPageImage {
  src: "../../../assets/img/patterns/forms/appropriate-body-input-checkboxes.svg",
  width: "258px",
  alt: "Checkboxes example."
} %}

#### Date pickers

[Date pickers](/components/date-picker/) provide an easy way to select specific dates or data ranges in a consistent, risk averse manner (e.g. bookings or appointments). Don’t use a date picker if the user already knows or is very familiar with the date, e.g. date of birth.

{% contentPageImage {
  src: "../../../assets/img/patterns/forms/anatomy-appropriatebodyinputs-datepickers.svg",
  width: "270px",
  alt: "Date picker example."
} %}

#### Dropdown

[Dropdowns](/components/dropdown/) are for selecting one option from a long, predefined list of choices and conserving space is important. Dropdowns also allow hiding information which isn’t frequently used.

{% notification {
  type: "information",
  message: "Dropdowns are for use in apps"
} %}

{% contentPageImage {
  src: "../../../assets/img/patterns/forms/appropriate-body-input-dropdown.svg",
  width: "256px",
  alt: "Dropdown example."
} %}

#### Numeric steppers

[Numeric steppers](/components/numeric-stepper/) are used when users need to input precise numeric data with easy to identify increments and decrements. A defined range or step size works best such as 1, 5, or 10.

{% contentPageImage {
  src: "../../../assets/img/patterns/forms/appropriate-body-input-numeric-stepper.svg",
  width: "256px",
  alt: "Numeric stepper example."
} %}

#### Radio buttons

[Radio buttons](/components/radio/) are for selecting one option from a small group of mutually exclusive choices and displaying all of those choices openly. This improves scannability and requires less actions from the user to see all of their options.

{% contentPageImage {
  src: "../../../assets/img/patterns/forms/appropriate-body-input-radio-buttons.svg",
  width: "258px",
  height: "200px",
  alt: "Radio buttons example."
} %}

#### Select inputs

[Select inputs](/components/select-input/) are for selecting one option from a long, predefined list of choices and conserving space is important. Select inputs also allow hiding information which isn’t frequently used.

{% notification {
  type: "information",
  message: "Select inputs are for use in apps"
} %}

{% contentPageImage {
  src: "../../../assets/img/patterns/forms/appropriate-body-input-selectinputs.svg",
  width: "256px",
  alt: "Select input example."
} %}

#### Switches

[Switches](/components/switch/) are best utilised for binary on/off decisions. Switches are also particularly appropriate when an action has an immediate effect without requiring form submission.

{% contentPageImage {
  src: "../../../assets/img/patterns/forms/appropriate-body-input-switches.svg",
  width: "94px",
  alt: "Switch example."
} %}

#### Textareas

[Textareas](/components/textarea/) are used for multi-line, open-ended responses where users may need to write longer content. They excel at facilitating the collection of detailed and descriptive data, e.g. feedback & comments.

{% notification {
  type: "information",
  message: "Only available in web, if the functionality is required in apps, use the Text input"
} %}

{% contentPageImage {
  src: "../../../assets/img/patterns/forms/appropriate-body-input-textareas.svg",
  width: "256px",
  alt: "Textarea example."
} %}

#### Text inputs

[Text inputs](/components/text-input/) are used for short, open-ended data entry which require precise manual info (e.g. names, email addresses and postcodes). Typically, the input should be used for one line of text.

{% notification {
  type: "information",
  message: "Text inputs also have the functionality of textarea in apps"
} %}

{% contentPageImage {
  src: "../../../assets/img/patterns/forms/appropriate-body-input-textinputs.svg",
  width: "256px",
  alt: "Text input example."
} %}

#### Uploaders

[Uploaders](/components/uploader/) give users the ability to submit more complex data files such as documents, images, and other media easily.

{% contentPageImage {
  src: "../../../assets/img/patterns/forms/appropriate-body-input-uploaders.svg",
  width: "384px",
  alt: "Uploader example."
} %}

---

## Body structure

### Input widths

Define four standardised width options for form inputs to set clear expectations for users. These widths should be consistent across the pillar, and align to the grid.
Input width should align with the expected length of the user’s entry, the longer the entry, the wider the input, and vice versa.

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/bodystructure-inputwidths.svg",
  alt: "Body structure example showing different form input widths.",
  width: "575px"
} %}

### Column layouts

#### Ordering

Where possible input fields should be arranged in a vertical layout (stacked on top of each other) rather than placed side by side or in a grid-like arrangement.
Form content should be prepared to be read line by line either LTR or RTL depending on the language of the content to ensure users can easily digest the form.

{% usage {
  do: {
    type: usageTypes.image,
    items: [{
      src: "../../../assets/img/patterns/forms/bodystrucutre-columnlayouts-ordering-do.svg",
      width: "504px",
      alt: "Example showing the recommended ordering for form fields."
    }]
  },
  dont: {
    type: usageTypes.image,
    items: [{
      src: "../../../assets/img/patterns/forms/bodystrucutre-columnlayouts-ordering-dont.svg",
      width: "504px",
      alt: "Example showing a form field ordering pattern to avoid."
    }]
  }
} %}

#### Rows

Logically related fields can be placed in the same row, including standard inputs and those with prefixes or suffixes.

##### Logically related fields

Two fields can be logically related by belonging to the same category of data. For example, a city and postcode both belong to an address.

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/rows-logically-related-fields-city-postcode.svg",
  alt: "Example showing logically related fields placed in the same row.",
  width: "424px"
} %}

##### Prefixes and suffixes

Two fields with a connected relationship can be linked using an editable prefix or suffix, allowing users to modify the inputs directly.

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/rows-prefixes-suffixes-weight-unit.svg",
  alt: "Example showing related fields with editable prefixes or suffixes.",
  width: "366px"
} %}

#### Alignment

Input fields which do not fill their row should be aligned in the direction that they are read from based on the language of the content. E.g. LTR forms should align their inputs to the left.

Footers should either be aligned to the opposite side of input content, or fill their container in small viewports. This is to provide contrast with the form body.

---

## Layout

Outlines the internal spacing structure of the component. See the [Spacing](/foundations/spacing/) documentation for token details.

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/layout.svg",
  alt: "Layout example showing the internal spacing structure of a form.",
  width: "690px"
} %}

---

## Content

Use sentence-style capitalisation and active language; strive for clarity and brevity in all copy. For additional guidance, refer to the UX copy team's documentation.

### Button labels

[Button labels](/components/button/) should guide users through a clear indication of the action the button will take once clicked. Use active verbs, such as Add or Delete. For a pair of buttons, use specific labels, such as Save or Discard, instead of using OK and Cancel. This is particularly helpful when users are confirming an action.

### Form labels

[Form labels](/components/form-label/) are a necessity because sighted users can read them, screen reader users will hear them, and motor-impaired users can more accurately set their focus area to them (due to the larger focus area). Avoid using placeholders as labels; once a user starts inputting data they will not be able to read what the label was, which makes it difficult to review answers.

### Assistive text

[Assistive text](/components/assistive-text/) should always be clear, concise, and actionable to guide users effectively. Whether offering instructions, highlighting errors, or confirming success, focus on providing users with the information they need to complete their tasks confidently.

---

## Behaviour

Autofill, spellcheck and autocorrect are all native HTML features. Therefore, we have limited control over how these elements are styled or interact.

### Autofill

Autofill automatically fills in form fields with previously saved data.

Autofill works best for **static, non-sensitive data** that improves user convenience without compromising privacy or security, such as contact information or general demographic data. Avoid autofilling sensitive, dynamic or confidential data to protect users and maintain trust, such as temporary codes or appointment notes.

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/behaviours-autofill.svg",
  alt: "Autofill behaviour example in a text input field.",
  width: "415px"
} %}

### Spellcheck

Spellcheck is a feature that detects and **highlights spelling errors** in text fields.

Spellcheck is useful for fields like comments, feedback, or open-ended text responses where correct spelling enhances clarity and professionalism. Avoid using spellcheck for fields which are often grammatically incorrect, such as email addresses.

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/behaviours-spellcheck.svg",
  alt: "Spellcheck behaviour example highlighting misspelled text.",
  width: "256px"
} %}

### Autocorrect

Autocorrect **automatically changes misspelled words** or phrases as users type, based on a predefined dictionary or context. It aims to improve typing accuracy and reduce errors.

Autocorrect is best used for casual text inputs like a long-form message in a contact form. Avoid using it for precise fields which could be answered with technical terms.

---

## Form feedback and support

### Assistive text

Use assistive text when the information is essential for completing the form field correctly and when immediate context improves usability. When guidance is helpful but not mandatory use the help icon detailed below.

#### Default

Assistive text reduces user confusion by providing additional guidance or context to help users fill out a field correctly.

{% contentLayout %}
  {% contentItem %}
  {% contentPageImage {
    src:"../../../assets/img/patterns/forms/assistive-text-default-add-credit.svg",
    alt: "Default assistive text example for add credit field.",
    width: "256px"
  } %}
  {% endcontentItem %}
{% contentItem %}
  {% contentPageImage {
    src:"../../../assets/img/patterns/forms/assitive-text-default-email.svg",
    alt: "Default assistive text example for email field.",
    width: "256px"
  } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Error

Error assistive text must be used to alert users of mistakes in their input and provide instructions on how to resolve those issues. To allow users to easily recognise what has gone wrong and identify how to fix it, reducing frustration and abandonment.

{% contentLayout %}
  {% contentItem %}
  {% contentPageImage {
    src:"../../../assets/img/patterns/forms/assistive-text-error-password.svg",
    alt: "Error assistive text example for password input.",
    width: "265px"
  } %}
  {% endcontentItem %}
  {% contentItem %}
  {% contentPageImage {
    src:"../../../assets/img/patterns/forms/assistive-text-error-offer-time-frame.svg",
    alt: "Error assistive text example for radio group.",
    width: "173px"
  } %}
  {% endcontentItem %}
{% endcontentLayout %}

#### Success

Success assistive text confirms that the input has been accepted or validated. Positive feedback builds user confidence and ensures clarity that their input passes live validation.

{% contentLayout %}
  {% contentItem %}
  {% contentPageImage {
    src:"../../../assets/img/patterns/forms/assistive-text-success-verivication-code.svg",
    alt: "Success assistive text example for verification code input.",
    width: "256px"
  } %}
  {% endcontentItem %}
  {% contentItem %}
  {% contentPageImage {
    src:"../../../assets/img/patterns/forms/assistive-text-success-password.svg",
    alt: "Success assistive text example for password input.",
    width: "256px"
  } %}
  {% endcontentItem %}
{% endcontentLayout %}

### Help icon

The help icon provides access to additional, on-demand guidance without overwhelming the user interface. Consider combining these with assistive text when fields require extensive guidance by providing high-level information upfront and additional details on demand.

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/assistive-text-help-icon.svg",
  alt: "Help icon example with tooltip guidance on a form label.",
  width: "278px"
} %}

---

## Form validation

### Live validation

Wait for users to navigate off their currently selected field, before validating the data which they have entered.

Validating inputs live can be distracting from a task in progress rather than providing required assistance for smooth completion.

{% usage {
  do: {
    type: usageTypes.image,
    items: [{
      src: "../../../assets/img/patterns/forms/live-validation-do.svg",
      width: "265px",
      alt: "Live validation do example showing validation after leaving the field."
    }]
  },
  dont: {
    type: usageTypes.image,
    items: [{
      src: "../../../assets/img/patterns/forms/live-validation-dont.svg",
      width: "265px",
      alt: "Live validation don't example showing inline error while typing."
    }]
  }
} %}

### Submission validation

Submission validation ensures that data entered by users is correct and complete before being processed. If errors are detected during submission, it’s essential to provide feedback that helps users resolve these issues efficiently.

When a user has submitted a form with at least one error, it’s important to assist them with finding those errors and identifying what went wrong so that they can fix the problem seamlessly and with minimum frustration.

Therefore, it’s important to use the <u>error summary</u> component once a form has been submitted with incorrect data. Provide anchor links to errors throughout the form, marked via assistive text, error.

{% contentPageImage {
  src:"../../../assets/img/patterns/forms/formvalidation.svg",
  alt: "Submission validation example showing an error summary with anchor links to invalid fields.",
  width: "876px"
} %}
