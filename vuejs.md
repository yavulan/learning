#### Vue.js is a JavaScript Framework [↗](https://vuejs.org/).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Install and build](#install-and-build)
- [Introducing Vue.js](#introducing-vuejs)
  - [Simple example](#simple-example)
  - [Some advantages](#some-advantages)
  - [Listening](#listening)
- [Template expression](#template-expression)
- [Directives](#directives)
  - [v-once](#v-once)
  - [v-text](#v-text)
  - [v-html](#v-html)
  - [v-on](#v-on)
    - [Passing own arguments](#passing-own-arguments)
    - [Event modifiers](#event-modifiers)
    - [Keyboard events](#keyboard-events)
    - [Shortcut](#shortcut)
  - [v-bind](#v-bind)
    - [Binding classes](#binding-classes)
    - [Binding styles](#binding-styles)
    - [Shortcut](#shortcut-1)
  - [v-model](#v-model)
    - [Modifiers](#modifiers)
- [Control flow](#control-flow)
  - [v-if](#v-if)
    - [Grouping same-level elements](#grouping-same-level-elements)
  - [v-show](#v-show)
- [Looping](#looping)
  - [v-for](#v-for)
    - [Array](#array)
    - [Object](#object)
    - [Numbers](#numbers)
    - [:key](#key)
- [Vue instance](#vue-instance)
  - [Computed properties](#computed-properties)
  - [Watch](#watch)
- [Components](#components)
  - [Exporting](#exporting)
  - [Data transferring](#data-transferring)
  - [Styling](#styling)
  - [Example of app organisation](#example-of-app-organisation)
- [Additional tools](#additional-tools)
- [Code Styling](#code-styling)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Install and build
```Shell
npm install -g vue-cli

# Create new project with webpack template
vue init webpack appname
cd appname

# Install dependencies
npm install

# Run dev server
npm run dev

# Build app to production
npm run build
```

Types of templates:

1. `simple` - index.html + Vue CDN.
2. `webpack-simple`.
3. `webpack` - includes testing.
4. `browserify-simple`.
5. `browserify`.

# Introducing Vue.js
## Simple example
```HTML
<div id="app">
    {{ message }}
</div>

<script>
let data = {
    message: "Hello!"
};

let vm = new Vue({
    el: "#app",
    data: {
        message: data
    }
});
</script>
```
In a paradigm of design patterns it is possible to think of Vue.js as a `MVVM-patterned framework` (Model-View-ViewModel).

In this example, `HTML` represents `View`, `data object` represents `Model` and `Vue instance` represents `ViewModel`.

## Some advantages
1. Simple binding.
2. [Performant↗](http://stefankrause.net/js-frameworks-benchmark4/webdriver-ts/table.html).
3. Has `component`s, which are reusable & allow to scope styles.
4. Uses virtual DOM.
5. All about reactive data.

## Listening
When script executed, `data` object is prepared to receive data binding.

**Q**: How listening is achieved?

**A**: By using native JavaScript `Object.defineProperty()` method.
```JavaScript
// Object.defineProperty(obj, prop, descriptor)

Object.defineProperty(data, 'prop', {
  get: function() { return val; },
  set: function(newValue) { val = newVal; },
  enumerable: true,
  configurable: true
});
```

So, watchers:

1. Assigned to directives and data properties using `Object.defineProperty()` method.
2. Notified with help of the `set` method of `Object.defineProperty()`.
3. Updates DOM or data.

# Template expression
```HTML
<p>{{ message }}</p>
<!-- {{ message }} is a template expression. -->
```

Template expressions may contain any valid JavaScript expression.
```HTML
<h1>{{ say() }}</h1>
<p>{{ multiply ? number * 2 : number }}</p>

<script>
new Vue({
    el: "#app",
    data: {
        number: 42,
        multiply: true
    },
    methods: {
        say: function() { return 'Hello'; }
    }
});
</script>
```

# Directives
Directives are special attributes that tells Vue.js to do something to the DOM in respond to changing the value of an expression.

## v-once
Disables re-rendering (e.g., on data change).
```HTML
<span v-once>{{ message }}</span>
```

## v-text
Updates the element `textContent`.
```HTML
<!-- these two are equal: -->
<span v-text="message"></span>
<span>{{ message }}</span>
```

## v-html
By default, Vue.js escapes HTML. To render HTML by updating element's `innerHTML` use `v-html`.

**Note:** use it wisely with user-provided data.
```HTML
<p v-html="link"></p>

<script>
new Vue({
    data: {
        link: '<a href="www.google.com">Google</a>'
    }
});
</script>
```

## v-on
Listens for the [default DOM events↗](http://www.w3schools.com/jsref/dom_obj_event.asp) and returns an `$event` object passed to a called function.

```HTML
<span v-on:click="clicked">Click me!</span>

<script>
new Vue({
    methods: {
        clicked: function(event) {
            console.log(event);
            alert("Clicked!");
        }
    }
});
</script>
```

### Passing own arguments
```HTML
<span v-on:click="foo(2, $event)">Click me!</span>
```
`$event` - default argument of Vue.js.

### Event modifiers

|Name|Meaning|
|---|---|
|stop|event.stopPropagation()|
|prevent|event.preventDefault()|
|capture|addEventListener(type, listener, `useCapture`)|
|self|if(e.target !== e.currentTarget) return;|
|once|May be used for a cheap static content|
```HTML
<!-- Easy chaining -->
<a v-on:click.stop.prevent="foo">link</a>
```

### Keyboard events
Accepts [eyboard codes↗](http://keycode.info/).

#### Aliases
- enter
- tab
- delete (captures both “Delete” and “Backspace” keys)
- esc
- space
- up
- down
- left
- right

#### Modifier keys
- ctrl
- alt
- shift
- meta (⌘ / ⊞ / ◆)

```HTML
<!-- Any key -->
<input v-on:keyup="foo">

<!-- Alt + Delete or Backspace -->
<input v-on:keyup.alt.delete="clear">

<!-- Ctrl + Click -->
<div v-on:click.ctrl="foo">/div>
```

### Shortcut
`v-on:` === `@`.
```HTML
<input v-on:keyup="foo">
<input @keyup="foo">
```

## v-bind
Binding HTML attributes with our data.

```HTML
<a href="{{ link }}">Google</a> <!-- DOESN't work! -->
<a v-bind:href="link">Google</a> <!-- Works! -->

<script>
new Vue({
    data: {
        link: "www.google.com"
    }
});
</script>
```

### Binding classes
```HTML
<p v-bind:class="classNameVariable"></p>
<p v-bind:class="[classNameVariable1, classNameVariable2, classNameVariable3]"></p>

<!-- Toggle class depends on @{booleanCondition} -->
<p v-bind:class="{className: booleanCondition}"></p>
<p v-bind:class="[className1, {className: booleanCondition}, computedPropertyObject]"></p>
```

### Binding styles
```HTML
<p v-bind:style="{color: colorValue}"></p>
<p v-bind:style="[computedPropertyObject, {color: colorValue}]"></p>
```

### Shortcut
`v-bind:` === `:`.
```HTML
<input v-bind:class="">
<input :class="">
```

## v-model
Creates two-way data binding (between form elements and app data).

```HTML
<div id="app">
  <p>{{message}}</p>
  <input v-model="message">
</div>

<script>
let vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello!'
  }
});
</script>
```

### Modifiers
- lazy (sync after `change` event instead of default `input` event)
- number
- trim

```HTML
<input v-model.lazy="message">
<input v-model.number="speed" type="number">
<input v-model.trim="message">
```

# Control flow
## v-if
Completely removes elements from the DOM (not only hides it).
```HTML
<span v-if="truthyVariable">Shown</span>
<span v-else>Not shown</span>
```

### Grouping same-level elements
`<template>` doesn't renders in DOM in HTML5, so it may be used for grouping same-level elements.
```HTML
<template v-if="booleanCondition">
    ...
</template>
```

## v-show
Shows/hides element without it out the DOM (uses `display: none;`).

```HTML
<span v-show="truthyVariable">Shown</span>
```

# Looping
## v-for
Remember `<template>` tag when rendering multiply same-level elements.

### Array
```HTML
<span v-for="item in items">{{ item }}</span>
<span v-for="(item, i) in items">{{ item }} ({{ i }})</span>
```

### Object
```HTML
<span v-for="user in users">{{ user.name }}</span>
<span v-for="(value, key) in obj">{{ }}</span>
```

### Numbers
```HTML
<span v-for="n in 10">{{ n }}</span>
```

### :key
`v-for` listens to change in array/object and updates the list by updating only changed elements.
To be super safe and keep current order and values use `:key`.

```HTML
<div v-for="item in items" :key="item.id"></div>
```

# Vue instance

## Lifecycle
1. new Vue()
2. `beforeCreate()`
    - observe data & init events
2. `created()`
    - compile template of el's template
3. `beforeMount()`
    - replace el with compiled template
4. `mounted()` to the DOM
    1. on data changed - `beforeUpdate()`
    2. after re-rendering DOM - `updated()`
5. `beforeDestroy()`
    - teardown watchers, child components, event listeners.
6. `destroyed()`

```JavaScript
let vm = new Vue({
  data: {},
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {},
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
});
```

## Accessing from the outside
Access is proxied by Vue.js for `data`, `computed` and `methods`.
```JavaScript
let vm = new Vue({
  data: {
    name: "John"
  },
  computed: {
    title: function(){ return "title"; }
  },
  methods: {
    show: function() { return; }
  }
});

vm.name;
vm.$data.name;

vm.title;
vm.show();
```

## el
Accepts any CSS selector and affects `first` item this selector meets.
To affect multiple elements use components.

## $mount
Allows passing element selector outside Vue constructor.

```JavaScript
let vm = new Vue({
  data: {}
});

vm.$mount('#app');
```

## methods
All methods have `this` context automatically bounded to the Vue instance.
Note: don't use arrow function to define a method (it will be bound to wrong context).

## computed
Computed properties used as a typical data properties. The main difference - they are optimized.
Runs synchronously (immediately).

```JavaScript
new Vue({
  data: {},
  computed: {
      title: function(){ return "title"; }
  }
});
```

## watch
No need to return anything. Used for async operations.

```JavaScript
new Vue({
  data: {
    prop: ''
  },
   watch: {
       prop: function(value) { setTimeout(() => { value = 0 }, 2000); }
   }
});
```

## $refs
Allows access to DOM element directly. Use whenever it is required to access native element.

```HTML
<div id="app">
    <span ref="mySpan @click="show"></span>
</div>

<script>
new Vue({
  data: {},
  methods: {
    show: function() {
        this.$refs.mySpan.innerText = "New Text!";
    }
  }
});
</script>
```

## template
```JavaScript
let vm = new Vue({
  template: "<h2>Hello!</h2>"
});

vm.$mount('#app');

// vm.$el now contains template
```

## render
Renders `*.vue` template.
```JavaScript
import App from './App.vue';

new Vue({
    el: '#app',
    render: h => h(App)
});
```

# Components
Reusable, provides project with organization and encapsulation.
Can be separated in to ```*.vue``` files as a single-file templates.
```JavaScript
Vue.component('componentName', {
    template: '<li>Some templating</li>'
});
```
Using components:
```HTML
<div id="app">
    <componentName></componentName>
</div>
```

## Exporting
```HTML
<template>
<!-- HTML here -->
</template>

<script>
import Comp from './components/Comp'

export default {
    name: 'app',
    components: {
        Comp
    }
}
</script>

<style>
/* styles here */
</style>
```

## Data transferring
**From the component** - transferred as a function:
```JavaScript
export default {
    name: 'hello',
    data(){
        return {
            msg: 'Hello'
        }
    }
}
```
**To the component** - transferred with the ```[props]``` property:
```HTML
<ol>
    <todo-item v-for="item in list" v-bind:todo="item"></todo-item>
</ol>

<script>
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

let vm = new Vue({
  el: '#app',
  data: {
    list: [
      { text: 'item1' },
      { text: 'item2' }
    ]
  }
});
</script>
```

## Styling
```HTML
<style scoped>
/* styles will affect only current component */
</style>
```

## Example of app organisation
```HTML
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```

# Additional tools
- vue-router
- vue-resource  *(handle web requests)*
- vue-async-data
- vue-validator
- vue-devtools *(Chrome devtools extension)*
- vue-touch *(touch gestures with Hammer.js)*

# Code Styling
```HTML
<!-- Hard readability -->
<input type="text" v-model="newItem">

<!-- Better readability -->
<input v-model="newItem" type="text">

<!-- In case of few directives -->
<input
    v-model="newItem"
    :class="classes"
    type="text">
```
