---
title: Plumbing
description: Small tools for small tasks in WordPress and ACF.
eleventyNavigation:
  key: Plumbing
  parent: Projects
attributes:
  - label: Type
    content: Collection of Small Tools
  - label: Language
    content: PHP
links:
  - url: https://github.com/alwaysblank/plumbing-normalize-links
    label: Normalize Links
  - url: https://github.com/alwaysblank/plumbing-templates
    label: Templates
  - url: https://github.com/alwaysblank/plumbing-responsive-images
    label: Responsive Images
  - url: https://github.com/alwaysblank/plumbing-acf
    label: ACF
---

These are really several different packages; I just group them under "Plumbing"--behind-the-scenes bits that bring everything together and don't need you to think about them much.
Each solves a small problem I ran into enough that I got tired of solving it for every project.
They're all meant to be simple and one-note:
Do one thing, and do it well, so you can mix and match as needed.

Normalize Links
: Makes it a bit easier to use and interact with the arrays returned by ACF's "link" field type.

Templates
: Allows you to set specific directories for custom templates for pages (and custom post types) in WordPress.

Responsive Images
: Wrapper for handling generating responsive images when using WordPress.

ACF
: Slim interface over ACF's `get_field()` that mostly just adds the ability to get several fields at once--and the ability to provide defaults and run callbacks on those fields individually.


