# Design patterns
Design patterns are formalized best practices (descriptions or templates) for how to solve a commonly occurring problems.

## Factory functions
Functions that create objects and return them. Do not require using a `constructor`.

|Benefits|Disadvantages|
|---|---|
|Binding `this` is not required|Object contains its own unique copy of each function|

```JavaScript
const cat = () => {
    const sound = "meow";
    return {
        talk: () => console.log(sound)
    };
};

const Murka = cat();
Murka.talk(); // "meow"
```

## Composition
It is the process of combining two or more functions to produce a new function.
Instead of creating own state internally they accept state as a parameter.
```JavaScript
const driver = (state) => ({
  drive: () => {
    state.position += state.speed;
  }
});

const speaker = (state) => ({
  speak: () => console.log(state.name)
});

speaker({name: 'hello'}).speak();

// creating class
const TalkyDriver = (name) => {
  let state = {
    name,
    speed: 40,
    position: 0
  };
  return Object.assign(
    {},
    speaker(state),
    driver(state)
    );
};

TalkyDriver('John').drive();
```

### Composition vs Inheritance
||Composition|Inheritance|
|---|---|---|
|Ideology|what they **do** | what they **are**|
|Examples|`drive`, `stop`| `track` is a `car`|
|Achieving|Factory functions|Classes|
