---
eleventyNavigation:
    key: Guidance
    parent: 'Messaging and Chatbots'
    order: 2
shouldShowContents: true
---

## Foundations 

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Different platform restrictions may exist, but strive for as much consistency between platforms as possible."
} %}

For compliance with JET guidelines, it's essential to overwrite all available foundations to align with the PIE foundational tokens. Depending on the customisation level, various foundations may be available to adjustment. We advise confirming the customisation options available for the specific third party platform.

Foundations you can investigate are:
* Typography
* Colour
* Elevation
* Radius
* Spacing
* Motion
* Iconography

---

## Content width

All content types content should have a maximum width of 80% of the available space. This includes the avatar if used for the correspondents messages.

{% contentPageImage {
  src:"../../../../assets/img/patterns/messaging-and-chatbots/content-width.svg",
  width: "375px"
} %}

---

## Messages

### Colour

It's crucial to differentiate between the correspondent's and user's messages. Below are message options designed to ensure clear distinction between both the user and the correspondent.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "The correspondent's and user's messages should each have a distinct, consistent colour defined for their side of the conversation."
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Ensure that the background colour used for the user’s messages is stronger than that of the correspondents to help users easily identify their contributions to the conversation.",
            "Guarantee messages are clearly visible against the background, allowing users to read the conversion with ease, especially if a complex background has been applied.",
            "Consider the tone of the scenario when selecting colours to ensure they align, and are suitable."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use the same colour for both the user’s messages and the correspondent’s. Ensure there are clear visual differences to help the user easily distinguish between them.",
            "Don’t use multiple colours."
        ]
    }
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/messaging-and-chatbots/content-types-messages.svg",
  alt: "",
  width: "800px"
} %}

---

### Borders

Borders are an optional addition to message colours than can be used for multiple reasons.

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use borders to increase the contrast of the message against the background.",
            "Use borders to enhance the user's ability to quickly scan a conversation and more clearly identify individual messages.",
            "Ensure that the border colour aligns to the message colour, creating a cohesive palette."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t use the same colour for both the user’s messages and the correspondent’s. Ensure there are clear visual differences to help the user easily distinguish between them.",
            "Don’t use multiple colours."
        ]
    }
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/messaging-and-chatbots/content-types-messages-borders.svg",
  alt: "",
  width: "800px"
} %}

---
## Tails

Tails are a small extension that point towards the direction of the message’s sender that are attached to individual messages. They can vary in design depending on the third party platform that is being used.

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Use tails where available with the third party platform to provide additional context to the user’s."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Don’t apply tails to individual messages within a group, except for the last message in the sequence."
        ]
    }
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/messaging-and-chatbots/messages-tails.svg",
  alt: "",
  width: "290px"
} %}

---

## Groups

Messages sent in quick succession can be grouped to show users they are connected. Different third-party platforms may have varying time thresholds for defining grouped messages. 

The spacing between individual messages is reduced to ensure they are visually tied together, and only the last message in a sequence retains its tail, while the others do not.


{% contentPageImage {
  src:"../../../../assets/img/patterns/messaging-and-chatbots/groups-variants.svg",
  alt: ""
} %}

---

## Structured responses

Structured responses are useful for chatbots that present choices to the user that are easy for the bot to understand, when selected, all structured responses will change their visual appearance and a user message will appear with the selected content.

Structured responses are always paired with a message to provide context to the options provided.

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "Ensure the background colour of the structured response chip matches that of the correspondent’s messages to visually pair them."
} %}

{% usage {
    do: {
        type: usageTypes.text,
        items: [
            "Align the options to the side of the correspondent offering them to make it clear which side of the conversation they belong to.",
            "Always provide an automated message response from the user with the option they selected for confirmation and visual feedback.",
            "Always disable the options once a selection has been made to ensure a clear direction for the conversation."
        ]
    },
    dont: {
        type: usageTypes.text,
        items: [
            "Avoid structured responses for complex, emotional, ambiguous, or highly personalised interactions, as they can feel too rigid."
        ]
    }
} %}

{% contentPageImage {
  src:"../../../../assets/img/patterns/messaging-and-chatbots/content-types-structured-responses.svg",
  alt: "",
  width: "800px"
} %}

## Interactive states

Outlines the atomic level interactive elements for the component.

{% contentLayout %}
  {% contentItem %}
  **Default**
    {% contentPageImage {
      src: "../../../assets/img/patterns/messaging-and-chatbots/interactive-states-container1.svg",
      alt: ""
    } %}
  {% endcontentItem %}
  {% contentItem %}
    **Hover**
    {% contentPageImage {
      src: "../../../assets/img/patterns/messaging-and-chatbots/interactive-states-container2.svg",
      alt: ""
    } %}
  {% endcontentItem %}
{% endcontentLayout %} 

{% contentLayout %}
  {% contentItem %}
  **Active**
    {% contentPageImage {
      src: "../../../assets/img/patterns/messaging-and-chatbots/image-container-active-1.svg",
      alt: ""
    } %}
  {% endcontentItem %}
  {% contentItem %}
    **Focus**
    {% contentPageImage {
      src: "../../../assets/img/patterns/messaging-and-chatbots/image-container-active-2.svg",
      alt: ""
    } %}
  {% endcontentItem %}
{% endcontentLayout %} 

{% contentLayout %}
{% contentItem %}
    **Disabled**
    {% contentPageImage {
      src: "../../../assets/img/patterns/messaging-and-chatbots/image-container-disabled.svg",
      alt: ""
    } %}
  {% endcontentItem %}
{% endcontentLayout %} Metadata

---

## Metadata

Metadata should be applied to individual content elements or content groups to provide additional context 

<h4>Name</h4>
Consider including the correspondent's name as message metadata based on the user-correspondent relationship. It can be used to foster a more personalised connection or enhance identification depending on the conversation.

{% contentLayout %}
  {% contentItem %}
  **First name**
    {% contentPageImage {
      src: "../../../assets/img/patterns/messaging-and-chatbots/first-name.svg",
      alt: ""
    } %}
  {% endcontentItem %}
  
  {% contentItem %}
    **First + last name**
    {% contentPageImage {
      src: "../../../assets/img/patterns/messaging-and-chatbots/first-last-name.svg",
      alt: ""
    } %}
  {% endcontentItem %}


  {% contentItem %}
    **Restaurant name**
    {% contentPageImage {
      src: "../../../assets/img/patterns/messaging-and-chatbots/restaurant-name.svg",
      alt: ""
    } %}
  {% endcontentItem %}
{% endcontentLayout %} 

## Date & timestamp

Consider including the message’s date and time in the metadata, for both the user and the correspondent, depending on the message’s purpose. This can provide contextual understand the timing of events or response.



