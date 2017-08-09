# HTML 5

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- [Semantics](#semantics)
- [Structural elements](#structural-elements)
- [Div](#div)
- [Inline text semantics](#inline-text-semantics)
  - [Bold](#bold)
  - [Italic](#italic)
  - [Underline](#underline)
  - [Strike](#strike)
  - [Highlight](#highlight)
- [Forms](#forms)
  - [Datalist](#datalist)
  - [Input types](#input-types)
  - [Templated scale](#templated-scale)
  - [Indicating progress](#indicating-progress)
- [Aria roles](#aria-roles)
- [Hiding content](#hiding-content)
- [Navigation and actions](#navigation-and-actions)
- [`<iframe>` attributes](#iframe-attributes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Semantics
The initial meaning of elements.

* [Selection of html5 element](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf)
* [All the HTML elements on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [HTML5 Element Index on html5doctor](http://html5doctor.com/element-index/)
* [W3C's validation service](https://validator.w3.org/)

## Structural elements

* `<address>`
* `<article>` *(content that could be easily syndicated)*
* `<aside>`
* `<footer>`
* `<h1–h6>`
* `<header>`
* `<hgroup>`
* `<nav>`
* `<section>`

## Div
Use it when there is no other more suitable element available for grouping an area of content (e.g., when you are purely grouping content for styling/visual purposes).

## Inline text semantics

### Bold

| Tag | Description |
|---|---|
| `<strong>` | strong emphasis |
| `<b>`| without importance |

### Italic

| Tag | Description |
|---|---|
| `<em>` | stressed emphasis |
| `<i>`| alternative voice or tone |

### Underline

| Tag | Description |
|---|---|
| `<u>` | unarticulated annotation |
| `<ins cite="#" datetime="2017-08-29">`| text added to document (e.g., updated an article with the new information) |

### Strike

| Tag | Description |
|---|---|
| `<s>` | no longer accurate or relevant |
| `<del cite="#" datetime="2017-08-29">`| text deleted from document (e.g., updated an article) |

### Highlight

| Tag | Description |
|---|---|
| `<mark> ` | e.g., highlight search phrase on search results page |

## Forms

### Datalist
```HTML
<input type="text" list="cities">
<datalist id="cities">
    <option value="Kyiv"></option>
    <option value="Kharkiv"></option>
    <option value="Lviv"></option>
</datalist>
```

### Input types

| HTML | Types |
|---|---|
| HTML | button, checkbox, file, hidden, image, password, radio, reset, submit, text |
| HTML5 | color, date, datetime-local, email, month, number, range, search, tel, time, url, week |

### Templated scale
`<meter max="10" value="7">7 stars</meter>`

### Indicating progress
`<progress value="1" max="10">10%</progress>`

## Aria roles
```HTML
<body>
    <header role="banner">
        <nav role="navigation"></nav>
    </header>
    <article role="article">
        <section role="region"></section>
    </article>
    <aside role="complementary"></aside>
    <footer role="contentinfo"></footer>
</body>
```

## Hiding content
```HTML
<div hidden>
```

## Navigation and actions

| Tag | Description |
|---|---|
| `<nav> ` | links to other pages |
| `<menu> ` | group of controls (like save/edit) within the web app |

## `<iframe>` attributes

| Attribute | Description |
|---|---|
| `sandbox` | enables an extra set of restrictions for the content in the iframe |
| `seamless` | treat <iframe> like it is a part of the containing document (e.g., no scrollbars, use parent css) |
