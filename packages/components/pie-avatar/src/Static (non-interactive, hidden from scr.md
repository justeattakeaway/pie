1. create label property (type:string)
2. create tag property (look at pie-link)
3. create initials logic (private class method)
4. render initials in <span> in <div>
5. add to Storybook

MVP:
When tag = 'div' return a <div> in a render function , when tag = 'button'
return a <button> in a render function. When tag='a' return an <a> 
tag in the render function.

Render a div in a template when tag has a value of div.
Render label inside <div> when tag='div'. 

To test this: add a new control for tag and a new control for label. 
(we will do it together)
Create a template Avatar in the story, so we can apply the props to the component. 

WD TODO
if string is emnpoty just return
if one word, just return the first initial

We don't won't errors in console. 

Look how default props are made in pie-link defs.ts. Some props dont exist on default props. How can we do this for label in avatar. 

We'll add tag as a control. control may be type of dropdown and values of the union type. take a look at link / card. 


----

TODO:
1. generateInitials function - make it more elegant (should this ever return something if its not a string, what should happen if it can't create initials)
Approach 1: This function doesn't need to worry about empty strings. 
Approach 2: You can throw an error (invalid name format). We don't want our components to throw errors due to risk of breaking the app. 
Approach 3: users may not know that there is undefined. 

2. Screen readers: we use css to visually hide J,C. 
<span class="hidden">J, C</span>
<span aria-hidden="true">JC</span>

APPLE VOICEOVER

1. Turn on voiceover
2. CTRL + Option + Right/Left Arrow

1. Turn on voiceover
2. CTRL + Option + Right/Left Arrow (these things will go through text, and text is not a focusable element). Tabbing only works with focusable elements. 

aria-hidden is saying "screen readers dont get this" 
Maybe initials function returns 

next ticket: If the name is in broken format, fallback to icon.

how do we get machines to see initials as initials, not a word. 
we can render 2 things:
1. thing is going to be invisible due to css but still picked up by screen readers
2. the other things is not invisible 

two spans : one always readf by screen readers, initials separated by comma
the other span, initials without the comma

---
Return object with 2 props. 
We can make it a type (just return this type which is an object with 2 keys: we create an object and assign it a type. (for example type Initials).
type Initials = { visual: string, screenreader: string }. In this file for now. 

in render function only csll this if label has a lenght)

let initials;
if label.length > 1
  initials = generateInitials(label)

if initials 
return button span<initials.visual> span<initials.screenreader>

create a getter on a class of initials and that when called creared initials for us

maybe do some RegEx validation that checks words
space-hyphen-space and tried to upperCase it doesnt work....(and is made up of numbers and letters)

wr may need a property or label isValidLabel?
Could potentially be a getter. 

if you see a design token like this
$interactive-brand
css variable --dt-color-interactive-brand