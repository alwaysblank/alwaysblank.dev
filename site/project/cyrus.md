---
title: Cyrus
description: A weird experiment in generating HTML with PHP.
layout: project.njk
attributes:
  - label: Language
    content: PHP
links:
  - url: https://github.com/alwaysblank/cyrus
    label: Source Code (GitHub)
---

Cyrus was an experiment in building HTML with PHP--sort of a simplified recreation of the DOM.
Is it useful? Debatable, although I did use it for a few projects years ago.
Is it over-engineered? Oh, almost certainly.
Is it interesting? Well, it was at the time, and building/using it definitely taught me a few things about using objects in PHP.

Mostly, though, I keep it here because I've got a soft spot for it and I think it's an intriguing oddity.


```php
$element = new Livy\Cyrus;
$element->class('this-is-the-class')
  ->content('Here is some content!')->display();
```

```html
<div class="this-is-the-class">Here is some content!</div>
```

You can also generate more heavily nested elements:

```php
$nest = new Livy\Cyrus;
$nest->class('wrapper')
    ->o()->el('h1')->content('Welcome')->c()
    ->o()->el('p')
      ->content("You've arrived at my web site!")->c()
->c()->display();
```

```html
<div class="wrapper">
    <h1 class="h1">Welcome</h1>
    <p>You've arrived at my web site!</p>
</div>
```

`nest()` allows allows you to nest elements even after you've closed an element:

```php
$list = new Livy\Cryus;
$list->class('wrapper')
    ->o('inner')->el('ul')->ca();

foreach (['one', 'two', 'three'] as $item) :
    $list->n('inner')->o()->el('li')->content($item)->ca();
endforeach;

$list->display();
```

```html
<div class="wrapper">
	<ul>
		<li>one</li>
		<li>two</li>
		<li>three</li>
	</ul>
</div>
```
