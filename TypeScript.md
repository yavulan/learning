## TypeScript

In general, ```TypeScript === JavaScript + Static Typing```.

### Install
```Shell
npm install -g typescript

# TSLint, try to make your IDE use it
npm install -g tslint

# Create config file "tsconfig.json"
tslint --init
```

Now compiling *.ts files as simple as:
```Shell
tsc <filename>

# Watch for changes
tsc -w app.ts

# In case if tsconfig is configured you don't need to provide a path
tsc -w
```

Try to configure your IDE for automated compiling.

It may be useful to have a server for testing purposes:
```Shell
npm install -g light-server
```

---

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

### Basic Types
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
x = [1, "a"]; // Error
```
- enum
```TypeScript
enum Color {Blue, Yellow, White};
let x: Color = Color.Yellow;
// get color name
let colorName: string = Color[1];
// using <enum> for States checking
enum State {New = 1, Complete, Deleted} // start numeration from 1 instead of 0
if(some.state === State.New) {}
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

### Advanced Types

#### Union Types (one or another)
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
Is used purely by the compiler and is a way to tell the compiler “trust me, I know what I’m doing.”
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

### Interfaces
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

#### Interfaces for method declarations
```TypeScript
interface IFruitService {
    add(fruit: Fruit): Fruit;
    [propName: string]: any; // any number of additional properties
}
```

#### Function Types
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

#### Readonly and const
Variables use const whereas properties use readonly.
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

### Overload functions
A function that accepts 2 strings or 2 arrays only.
```TypeScript
function overloaded(x: any[], y: any[]);
function overloaded(x: string, y: string);
function overloaded(x: (string|any[]), y: (string|any[])) {
    return x.toString();
}
```
Notice: The last signature **must** be a super set of all previous signatures.
