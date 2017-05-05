# TypeScript

In general, `TypeScript === JavaScript (edge) + Static Typing`.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Compiling](#compiling)
- [Introduction](#introduction)
  - [Specifying Types](#specifying-types)
  - [Error example](#error-example)
- [Basic Types](#basic-types)
- [Advanced Types](#advanced-types)
  - [Union Types](#union-types)
  - [Types assertion](#types-assertion)
  - [Anonymous typing](#anonymous-typing)
- [Interfaces](#interfaces)
  - [Interfaces for method declarations](#interfaces-for-method-declarations)
  - [Function Types](#function-types)
  - [Readonly and const](#readonly-and-const)
- [Overload functions](#overload-functions)
- [Classes](#classes)
  - [Static members](#static-members)
  - [Getters & Setters](#getters--setters)
  - [Class extending](#class-extending)
  - [Abstract Classes & Methods](#abstract-classes--methods)
  - [Access modifiers](#access-modifiers)
  - [Implementing interfaces](#implementing-interfaces)
- [Generic Types](#generic-types)
  - [Naming conventions](#naming-conventions)
  - [Usage with Functions](#usage-with-functions)
  - [Usage with Classes](#usage-with-classes)
  - [Generic Constraints (limitations)](#generic-constraints-limitations)
- [Modules](#modules)
  - [External](#external)
  - [Internal](#internal)
- [Migrating from JavaScript](#migrating-from-javascript)
  - [Third party JavaScript code](#third-party-javascript-code)
    - [Trivial declarations](#trivial-declarations)
    - [Ambient declarations](#ambient-declarations)
- [Debugging](#debugging)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation
```Shell
npm install -g typescript

# TSLint, try to make your IDE use it
npm install -g tslint

# Create config file "tsconfig.json"
tslint --init
```

## Compiling
Compiling `*.ts` files as simple as:
```Shell
tsc <filename>

# Watch for changes
tsc -w app.ts

# In case if tsconfig is configured you don't need to provide a path
tsc -w
```

It is a nice idea to configure your IDE for automated compiling.

## Introduction

### Specifying Types
```TypeScript
// variable: type

function foo(bar: string, x: any[]): string {
    let buz: string = 2;
    return bar + buz;
}
```

### Error example
```TypeScript
function express (msg: string): string {
    return msg + "!";
}

express(42); // Argument of type '42' is not assignable to parameter of type 'string'
express("Hello"); // "Hello!"
```

## Basic Types
- boolean
- number
- string
- array
```TypeScript
let arr: number[] = [1, 2];
let arr: Array<number> = [1, 2];
```
tuple types:
```TypeScript
let a: [string, number];
x = ["a", 1]; // OK
x = [1, "a"]; // error
```
- enum
```TypeScript
enum Color {Blue, Yellow, White};
let x: Color = Color.Yellow;
// get color name
let colorName: string = Color[1];
// example of using <enum> for states checking
enum State {New = 1, Complete, Deleted} // start numeration from 1 instead of 0
if (some.state === State.New) {}
```
- any
```TypeScript
let arr: any[] = [42, true, "text"];
```
- void
```TypeScript
function foo(): void {} // function that does not return a value
```
- null, undefined - may be useful in unions
```TypeScript
(number|null|undefined)
```
- never

## Advanced Types

### Union Types
Basically, it's `one or another` syntax.
```TypeScript
function foo(bar: (string | any[])) {
  // Type Guards
  bar.push(1) // Error: Property 'push' does not exist on type 'string | any[]'.

  if (Array.isArray(bar)) {
      bar.push(1);
  } // works perfectly

  if (typeof bar === "string") x.substr(1); // also works
}
```

### Types assertion
Used only by the compiler. It is a way to tell the compiler `“trust me, I know what I’m doing”`
(like a type cast, but without special checking or restructuring of data).
```TypeScript
let val: any = "text";
// “angle-bracket” syntax
let valLength: number = (<string>val).length;

// as-syntax
let valLength: number = (val as string).length;
```

### Anonymous typing
```TypeScript
let variable: {name: string};

function len(x: {length: number}) {
    return x.length;
} // function accepts only variables with numeric "length" property
```

## Interfaces
They are compile-time features.
```TypeScript
interface Fruit {
    name: string;
    fresh?: boolean; // optional parameter
}
// using as a Type
let fruit1 = <Fruit>{name: "apple"};
let fruit2: Fruit = {name: "strawberry"};
```

### Interfaces for method declarations
```TypeScript
interface IFruitService {
    add(fruit: Fruit): Fruit;
    [propName: string]: any; // any number of additional properties
}
```

### Function Types
```TypeScript
interface jQuery {
    (selector: string): HTMLElement;
    version: number;
}

let $1 = <jQuery>function (selector) {};
$.version = 2.1;

let $2 : jQuery;
$2 = function (selector) {};
```

### Readonly and const
Variables use `const` whereas properties use `readonly`.
```TypeScript
interface Point {
    readonly x: number;
    readonly y: number;
}

// Read-only arrays
let arr: ReadonlyArray<number> = [1, 2, 3, 4];
arr.push(5); // error
```
<!--TODO: finish Interfaces learning https://www.typescriptlang.org/docs/handbook/interfaces.html -->

## Overload functions
As a self-explanatory example, function that accepts 2 strings or 2 arrays only:
```TypeScript
function overloaded(x: any[], y: any[]);
function overloaded(x: string, y: string);
function overloaded(x: (string|any[]), y: (string|any[])) {
    return x.toString();
}
```
**Notice:** The last signature **must** be a super set of all previous signatures.

## Classes
A brief prototype reminding on example of method searching:
```JavaScript
current.method || current.prototype.method || current.prototype.prototype.method || ... || Object.prototype.method || TypeError;
```

### Static members
Static assumes one variable for the entire application. One way of implementing is:
```JavaScript
var global = "" // at the global scope
```
But assigning variables directly to the global scope considered as a bad practice.
So, to avoid global scope, we can write:
```TypeScript
class ClassName {
    static id: number = 0;
    static getNextId() {
        return ClassName.id += 1;
    }
}
```

### Getters & Setters
```TypeScript
class ClassName {
    _state: number = 0;
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
}
```

### Class extending
```TypeScript
class ClassName {
    constructor(private name: string) {}
    methodName() {}
}

class ClassChild extends ClassName {
    constructor(name: string) {
        super(name); // every time we create a constructor on a child class, it MUST have a call to the parent constructor
    }

    // extending base class method functionality
    methodName() {
        super.methodName();
        // other staff
    }
}
```

### Abstract Classes & Methods
```TypeScript
abstract class AbsClass {
    abstract methodName(input: string): boolean; // MUST be implemented in every child class
}

new AbsClass(); // Error: Cannot create an instance of the abstract class 'AbsClass'.
class AbsChild extends AbsClass {
    // Error: Non-abstract class 'AbsChild' does not implement inherited abstract member 'methodName' from class 'AbsClass'.
}
```

### Access modifiers
||Class|Subclass|Other Classes|
|---|---|---|---|
|**public**|✓|✓|✓|
|**protected**|✓|✓|×|
|**private**|✓|×|×|

Public is a default JavaScript modifier. Access modifiers may be applied to many things:
```TypeScript
class ClassName {
    private static id: number = 0;
    constructor(private: variable: any) {}

    // getter & setter allow modifying in case they both have the same accessability
    private get nextId() {}
    private set nextId() {}
}
```

### Implementing interfaces
```TypeScript
interface IClassService {
    add(name: string): string;
    getAll(): string[];
    delete(id: number): void;
}

interface ISomeGenerator {
    variable: number;
}

class ClassService implements IClassService, ISomeGenerator {
    // all methods implementation
}
```

## Generic Types
Let's try to be oblivious: “generic” means general.

The main goal of Generic Types usage is to **provide type-safety** and to resolve type-casting problems.

### Naming conventions
|Template|Examples|Explanation|
|---|---|---|
|char >= T|T, U, V| Uppercase characters starting from T (type).|
|T${Name}|TKey, TValue| T-prefixed sensible names.|

### Usage with Functions
```TypeScript
function Max<T>(a: T, b: T): T {
    return a > b ? a : b;
}

Max(1, 2);
Max("string", "");
Max("string", 42); // error
```

### Usage with Classes
```TypeScript
class Dictionary<TKey, TValue> {
    add(key: TKey, value: TValue) {}
}
interface Item { number: number; }

let myDict = new Dictionary<string, Item>();

myDict.add("apple", {number: 10});
myDict.add("banana", 10); // error
```

### Generic Constraints (limitations)
Supplied by `extends` keyword usage (`where` keyword in C#).
```TypeScript
function LongerOne<T extends {length: number}>(a: T, b: T): T {
    return a.length > b.length ? a : b;
}

LongerOne([], []);
LongerOne([], ""); // error

// accepting extends classes
class CustomArray<T> extends Array<T> {}
LongerOne([], new CustomArray());
```

## Modules
The main goal is getting out of a global namespace.

### External
Supports [ES6 external modules](ES6.md#modules) and old `require()` syntax.
Both `require()` and `import` generates the same code.

`tsconfig.json` to support external modules:
```JavaScript
{
    "compilerOptions": {
        "target": "es5",
        "module": "system"
    }
}
```

### Internal
Provides us with the `namespaces` - syntactic sugar to wrap code in a `IIFE`.
```TypeScript
namespace AppName {
    // code
}

// compiles to
var AppName;
(function (AppName) {
    // code
})(AppName || (AppName = {}));
```

Things in the namespaces are private by default (so it is a nice technique to `encapsulate` variables).

When required, they may be `imported` and `exported`.
```TypeScript
namespace AppName.Model {
    export enum AppStates {New, Active}
}

namespace AppName.Controller {
    let state = AppName.Model.States.New;
    // or
    import Model = AppName.Model;
}
```

## Migrating from JavaScript
TypeScript is a superset of JavaScript so it is not so hard.

1. Create `tsconfig.json`.
2. Rename `*.js` to `*.ts`. Start suppressing errors using `any`.
3. Rewrite code using `ES6` & `TypeScript` features.
4. Use `ambient declarations` for third party JavaScript code.

### Third party JavaScript code
There are a few ways to tell TypeScript engine that we are using third-party libraries.

#### Trivial declarations
```TypeScript
declare var $: any; // does nothing, just suppresses errors
declare function require(path: string): any;
```

#### Ambient declarations
Provides some real TypeScript support. Used for utility libraries.

By the way, when developing a library, it is a good practice to create and include such declaration files.

`tsconfig.json` to support declarations:
```JavaScript
{
    "compilerOptions": {
        "target": "es5",
        "declaration": true
    }
}
```

##### Outer links
* [TypeScript type definitions](https://github.com/DefinitelyTyped/DefinitelyTyped)
* [TypeScript Definition Manager](https://github.com/typings/typings)
   ```
   npm install -g typings
   ```

## Debugging
`tsconfig.json` to enable source maps:

```JavaScript
{
    "compilerOptions": {
        "target": "es5",
        "sourceMap": true
    }
}
```
