---
title: Drawer
description: Watch states on an HTML element and respond to them.
eleventyNavigation:
  parent: Projects
  key: Drawer
links:
  - url: https://github.com/alwaysblank/drawer
    label: Source Code (GitHub)
attributes:
  - label: Type
    content: Utility Library
  - label: Language(s)
    content: JavaScript, TypeScript
eleventyExcludeFromCollections: true
---

I originally built Drawer to handle a pretty simple use case: Opening and closing navigation menus, and more specifically being able to reliably define a state on those menus that was persistent and not closely tied to the visual state. i.e. I want a menu that's always visible on desktop, but can be opened and closed on mobile.

It ended up growing beyond that a bit, and turned into a system for generically tracking and responding to state on HTML elements. What differentiates it from other libraries that its designed to rely on JavaScript only for state tracking and modification--the implementor decides how to use CSS to respond to that state. Part of how it does this by representing state through the use of `data-` attributes. It uses these to communicate state, but also to set up and control drawers. 

The simplest implementation looks like this:

```js
import {Cabinet} from 'drawer';
new Cabinet();
```

```html
<div data-module="drawer" data-knob="#knob">
    <!--  Drawer Contents  -->
</div>

<button id="knob">Toggle</button>
```

...But you can get a lot wilder if you want to.
