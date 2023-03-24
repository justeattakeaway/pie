---
eleventyNavigation:
    key: engineers-contributing
    title: Contributing
    parent: engineers
    order: 3
title: Contributing
description: In this section you’ll find everything you need to know about contributing to our design system and how you can help us.
---

### How can I get in contact with the Design System team?

You can reach out to us on one of our Slack channels (JET employees only):
- **#help-designsystem**
- **#guild-designsystem**
- **#guild-frontend**
- **#guild-accessibility**

We also run a [PIE engineering clinic](https://calendly.com/jetpie/engineering-clinics) every other Tuesday where you can book a slot to speak to one of our engineers.

{% notification {
type: "information",
message: "The booking link for the PIE clinic goes live the day before each session."
} %}

---

### How can I make a feature request?

Please use one of the workflows in the **#help-designsystem** channel to make a feature request, report a defect or request help for anything else.

---

### How can I find out which components have already been built?

You can take a look at our Storybook instances:

{% card {
  items: [
        {
          linkText: "Vue",
          href: "https://vue.pie.design/",
          src: "../../assets/img/engineers/vue@2x.png",
          shouldOpenInNewTab: true
        },
        {
          linkText: "React for Takeaway.com",
          href: "https://snacks.takeaway.com/",
          src: "../../assets/img/engineers/react@2x.png",
          shouldOpenInNewTab: true
        },
        {
          linkText: "React for SkipTheDishes",
          href: "https://react.pie.design/",
          src: "../../assets/img/engineers/react@2x.png",
          shouldOpenInNewTab: true
        }
    ]
} %}

---

### Can I build a new component?

Yes. If the component has been approved by designers then you are more than welcome to contribute. Please [speak to the Design System team](/support/contact-us) about your requirements and we will help by guiding you.

---

### Can I make a custom implementation for a component that already exists?

No. We suggest that you raise a feature request using our **#help-designsystem** Slack channel. Please, make sure you use the Propose Feature workflow to describe your needs.

Once submitted, we will discuss how they can be met by using (or extending) an existing component.

{% contentPageImage {
src:"../../assets/img/engineers/contributing/slack-request@2x.png",
mobileSrc:"../../assets/img/engineers/contributing/slack-request_narrow@2x.png",
width: "466px",
caption: "The image above shows where you can find the Propose feature workflow in our #help-designsystem Slack channel."
} %}
