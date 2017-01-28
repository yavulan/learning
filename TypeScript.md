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

### Classes
A brief prototype intro on example of method searching:
```JavaScript
current.method || current.prototype.method || current.prototype.prototype.method || ... || Object.prototype.method || TypeError;
```

#### Static members
Static assumes one variable for the entire application. One way of implementing is:
```JavaScript
var global = "" // at the global scope
```
But assigning variables directly to global scope is considered as a bad practice.
So, to avoid global scope we can do:
```TypeScript
class ClassName {
    static id: number = 0;
    static getNextId() {
        return ClassName.id += 1;
    }
}
```

#### Getters & Setters
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

#### Inheriting behavior from a Base Class
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

#### Abstract Classes & Methods
```TypeScript
abstract class AbsClass {
    abstract methodName(input: string): boolean; // MUST be implemented in every child class
}

new AbsClass(); // Error: Cannot create an instance of the abstract class 'AbsClass'.
class AbsChild extends AbsClass {
    // Error: Non-abstract class 'AbsChild' does not implement inherited abstract member 'methodName' from class 'AbsClass'.
}
```

#### Access modifiers
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

#### Implementing interfaces
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
