---
eleventyNavigation:
    key: Code
    parent: Iconography
    order: 3
---

## Overview
- [Web library and Naming conventions](#web-library-and-naming-conventions)
- [iOS library and naming conventions](#ios-library-and-naming-conventions)
- [Android library and naming conventions](#android-library-and-naming-conventions)

---

## Web library and Naming conventions

We previously had a number of different icon packages available for each supported framework, which are now deprecated in favour of `pie-webc`. For installation and usage instructions, please refer to [this documentation](https://webc.pie.design/?path=/docs/additional-libraries-icons--overview).


The web library uses the same icon names, but the naming style depends on where you use it:

For **React**, import the component from the React dist — names are in PascalCase:

```js
import { IconCalendar } from "@justeattakeaway/pie-icons-webc/dist/react/IconCalendar.js";
<IconCalendar />
```

For other frameworks, including **vanilla JS** and **Vue**, the naming convention uses kebab-case.

```js
import '@justeattakeaway/pie-icons-webc/dist/IconCalendar.js';
<icon-calendar></icon-calendar>
```
{% notification {
type: "information",
message: "We don't use categories in the names of icons in web"
} %}

---

## iOS library and naming conventions

iOS packs all icons into the JustUI core library. Our iOS library will use the same name of the icon, but transforming it from kebab-case to camelCase (removing the hyphens).

For example, the `gift-filled-large` icon would be `giftFilledLarge`.

{% notification {
type: "information",
message: "We don't use categories in the names of icons in iOS"
} %}

---

## Android library and naming conventions

### Use the latest version

In order to get all the PIE Icons in your app, you’ll need to include the `com.jet.pie2:icons` library in your gradle module.
Library versions are controlled via a Bill of Materials (BOM), that will ensure all PIE libraries use a compatible version.

This will handle all versions for you, BOM version: `2025.01.00` or higher:
```
implementation(platform("com.jet.pie2:bom:$latestBOMversion"))
```
Access to all PIE Icons:
```
implementation("com.jet.pie2:icons")
```

Access to all PIE illustrations:
```
implementation("com.jet.pie2:illustrations")
```

Access to all PIE Logos:
```
implementation("com.jet.pie2:logos")
```

{% notification {
  type: "information",
  message: "We strongly recommend using the PIE BOM to handle your dependencies. Of course, you're free to override any version of the above libraries, but that is at your own risk. To ensure you’re on the latest version, please head to the Android PIE repository (reach us on Slack via #help-designsystem if you need the link to this repo)."
} %}

### Get the information directly from Figma

Naming convention for icons: ```ic_pie_{category}_{icon_name}```.

For example, the icon below would be ```ic_pie_benefits_gift_filled_large``` and available as
```@drawableic_pie_benefits_gift_filled_large``` or ```R.drawable ic_pie_benefits_gift_filled_large```.

{% contentPageImage {
src:"../../../assets/img/foundations/iconography/icons-example-code-section.png",
alt: "An example of gift icons showcasing the naming convention for Android.",
width:"350px"
} %}

### Tint the icons with the correct colour token

Icons come with a fuchsia tint by default, so it is your responsibility to make sure they look correct in both Light and Dark themes. To do so, get the colour token from Figma and apply it directly to the icon.

{% notification {
  type: "information",
  message: "You can use ```contentDefault``` as your default design token colour for tinting your icon if you are unsure. This will make sure that the icon looks neat in both Light and Dark modes. Please check with your designer/Figma files that you are using the right token for the icon."
} %}

Example for XML Views:

```
android:drawableStart="@drawable/ic_pie_alert_info_help_circle_filled_large
android:drawableTint="?attr/jetColorContentDefault"
```
or
```
app:srcCompat="@drawable/ic_pie_chevron_chevron_down"
app:tint="?attr/jetColorInteractivePrimary"
```

Example for Jetpack Compose:

```
Icon(
    ...
    imageVector = ImageVector.vectorResource(id = PieIconR.drawable.ic_pie_arrow_arrow_left),
    tint = JetTheme.colors.contentInteractiveBrand,
    ...
)
```

### FAQs

**Q: I’ve imported the library. Where can I find the icons?**

A: Icons are located in their own namespace: com.jet.pie2.icons.R. You can find more information in the Android repository Wiki under the *Use PIE assets* section.

**Q: I can’t find the icon I need. Can I add it to the library?**

A: No. All icons will be automatically generated. If your icon doesn’t belong to PIE, it needs to live inside your own project.

**Q: My icon belongs to PIE, I can see it in Figma. Can I add it?**

A: If your icon belongs to PIE and it’s not in the library, make sure you’re using the latest version of PIE BOM. If you still can’t see it, message us via #help-designsystem Slack channel and we’ll update the icons for you.
