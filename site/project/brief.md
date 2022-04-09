---
title: Brief
description: A simple tool for passing around collections of variable structured data.
eleventyNavigation:
  key: Brief
  parent: Projects
links:
  - url: https://github.com/alwaysblank/brief
    label: Source Code (GitHub)
attributes:
  - label: Language
    content: PHP
---

90% of the reason I built it was because I got very tired of writing `isset()`, etc, conditionals when *the nonexistence of a key was equivalent to a falsey value in terms of program flow*.
It grew from there to provide some other functionality related to moving collections of structured data around.
I find it particularly useful when templating with [Laravel Blade](https://laravel.com/docs/blade).

You can think of it as a sort of argument wrapper:

```php
$Args = Brief::make([
  'sandwich_type' => 'Reuben',
]);

$Args->sandwich_type;
// 'Reuben'

$Args->sandwich_ingredients;
// null

$Args->sandwich_ingredients = [ 
  'corned beef', 'cheese', 'sauerkraut', 'dressing'
];
$Args->sandwich_ingredients;
// [ 'corned beef', 'cheese', 'sauerkraut', 'dressing' ]
```
