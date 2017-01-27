#### Vue.js is a JavaScript Framework [↗](https://vuejs.org/).

## Install and build
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

## Introducing Vue.js
```HTML
<div id="app">
    {{message}}
</div>

<script>
let app = new Vue({
    el: "#app",
    data: {
        message: "Hello!"
    }
});
</script>
```

## Element attributes
```v-prefixed``` special attributes - they tell Vue.js to do something to the DOM in respond to changing the value of an expression.
```HTML
<span>{{message}}</span>
<span v-once>{{message}}</span>
<span v-text="message"></span>
<span v-html="message"></span>

<span v-if="truthyVariable">Shown</span>
<span v-else>Not shown</span>

<span v-show="truthyVariable">Shown</span> <!-- same as v-if -->

<span v-for="user in users">{{user.name}}</span>

<!-- Binding -->
<span v-bind:class="{active: isActive}"></span> <!-- isActive: true, so class is assigned -->
<span v-bind:style="{color: colorVariable}"></span> <!-- colorVariable: '#ff00ff' -->
```

### Handling user input
```HTML
<button v-on:click="functionName">Do smthn</button>

<script>
let app = new Vue({
  el: '#app',
  methods: {
    functionName: function () {
      // do smthn
    }
  }
});
</script>
```
```v-model``` creates two-way binding between form input and app state:
```HTML
<div id="app">
  <p>{{message}}</p>
  <input v-model="message">
</div>

<script>
let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello!'
  }
});
</script>
```


## Components
Reusable, provides project with organization and encapsulation.
Can be separated in to ```*.vue``` files.
```JavaScript
Vue.component('componentName', {
    template: '<li>Some templating</li>'
})
```
Using components:
```HTML
<div id="app">
    <componentName></componentName>
</div>
```

### Exporting
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

### Data transferring
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

let app = new Vue({
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

### Styling
```HTML
<style scoped>
/* styles will affect only current component */
</style>
```

### Example of app organisation
```HTML
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```

## Additional tools
- vue-router
- vue-resource  *(handle web requests)*
- vue-async-data
- vue-validator
- vue-devtools *(Chrome devtools extension)*
- vue-touch *(touch gestures with Hammer.js)*
