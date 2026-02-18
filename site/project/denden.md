---
title: Denden
description: Minimalist pub/sub messaging system built around JavaScript events.
eleventyNavigation:
  key: Denden
  parent: Projects
layout: project.njk
attributes:
  - label: Language
    content: TypeScript
links:
  - url: https://github.com/alwaysblank/denden
    label: Source Code (GitHub)
  - url: https://www.npmjs.com/package/@alwaysblank/denden
    label: Package (npm)
  - url: https://alwaysblank.github.io/denden
    label: Documentation
---

Built as an experiment inspired by some issues I ran into at work. Specifically,
how to handle messaging between parts of a JavaScript application when we can't 
know exactly when a component may load. I didn't want to build an entire messaging
system when we have a messging system at home (the browser's event system).
Instead, this focuses on providing a slim layer on top of events that lets you
do some useful things like:

- Wait (for a set amount of time, or forever) for an event to fire.
- Listen for events from multiple sources.
- Run some logic when all handlers for a given message have fired (with access to whatever those handlers returned).