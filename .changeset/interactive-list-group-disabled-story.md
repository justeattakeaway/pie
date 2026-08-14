---
"@justeattakeaway/pie-storybook": patch
---

[Added] - `thumbnail` option for the trailing content control in the list stories
[Fixed] - Radio and checkbox selection list stories now disable the containing group rather than each list item, so the group propagates its disabled state to the rows, their controls and any slotted tag
[Changed] - Individually disabled switch and button rows now dim their slotted tag and thumbnail, matching the recommended usage
[Changed] - Disabled tag behaviour test story also covers slotted thumbnails
