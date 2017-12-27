<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [@ngrx/store](#ngrxstore)
  - [Introduction](#introduction)
  - [Behind the scenes](#behind-the-scenes)
  - [Core concepts](#core-concepts)
  - [Advantages](#advantages)
  - [Action](#action)
    - [Interface](#interface)
    - [Example](#example)
  - [Reducer](#reducer)
    - [Pure function](#pure-function)
    - [Interface](#interface-1)
    - [Rules to follow](#rules-to-follow)
    - [Example](#example-1)
  - [AsyncPipe](#asyncpipe)
  - [Examples](#examples)
    - [Reducers index](#reducers-index)
    - [Inside the app.module](#inside-the-appmodule)
    - [Inside the component](#inside-the-component)
  - [Components categories](#components-categories)
    - [Smart (Container components)](#smart-container-components)
    - [Dumb (Child components)](#dumb-child-components)
      - [Performance](#performance)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# @ngrx/store

## Introduction

Managing state is hard.

`@ngrx/store` provides predictable state management using actions and reducers.

Store can be thought of as a `client-side ‘single source of truth’`, or a `client-side database`.

A snapshot of store at any point supply a complete representation of the relevant application state.

## Behind the scenes

**Just to give an idea, it's not a real implementation!**

*Credits to [btroncone](https://gist.github.com/btroncone/a6e4347326749f938510).*

```TypeScript
class Dispatcher extends Rx.Subject {
  dispatch(value: any): void {
    this.next(value);
  }
}

class Store<State> extends Rx.BehaviorSubject<State> {
    constructor(
        private dispatcher: Dispatcher,
        private reducer,
        initialState = {}
    ){
        super(initialState);
        this.dispatcher
            .scan((state, action) => this.reducer(state, action), initialState)
            .subscribe(state => super.next(state));
    }

    dispatch<V extends Action = Action>(action: V) {
        this.dispatcher.dispatch(action);
    }

    select<T>(key : string | (v: State) => T): Observable<T> {
        return this
            .map(state => state[key])
            .distinctUntilChanged();
    }
}
```

## Core concepts

Each application built around store contain three main pieces:

* Reducers.
* Actions.
* Single application store.

## Advantages

* Centralized state.
* Predictable state management (all mutations are explicit).
* Performant.
* Testable.
* Tooling is available.

## Action

**Any time you want to change the state - you have to dispatch an action.**

**Action** describes something that has/should happen, but doesn't specify how.

### Interface

```TypeScript
interface Action {
    type: string;
    payload?: any;
}
```

### Example

`example.actions.ts`
```TypeScript
import { Action } from '@ngrx/store';

// Actions values has to be unique and easily readable.
// Using namespace, e.g. `[Movie] Add`, might be a good idea.
export const UPDATE = '[Person] Update';

// Usage of classes is determined by unlocking TypeScript's compile-time checking
// and triggering IDE autocompletion.
export class Update implements Action {
  readonly type = UPDATE;

  constructor(public payload: string) {}
}

export type All
  = Update;
  // | AnotherAction
  // | AnotherAction...
```

## Reducer

**Reducer** is a pure function that takes the previous state and an action and synchronously returns the new state.

Combination of reducers makes up a representation of application state at any given time.

### Pure function

* rely only on it's arguments;
* doesn't produce observable side-effects;
* doesn't modify input values (creates new ones when required).

### Interface

```TypeScript
interface Reducer<State> {
    (state: State, action: Action): State;
}
```

### Rules to follow

* Is a **pure function**.
* Focused on a specific section, or slice of state *(similar to a table in a database)*.
* Always returns a representation of state.

### Example

`example.reducer.ts`
```TypeScript
import * as ExampleActions from './example.actions';

export interface State {
  name: string;
}

const initialState: State = {
  name: ''
};

export type Action = ExampleActions.All;

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ExampleActions.UPDATE: {
      return {name: action.payload};
    }

    default: {
      return state;
    }
  }
}
```

## AsyncPipe

The **AsyncPipe** can handle `Observables` and `Promises` in template.

```HTML
{{ stream$ | async }}
```

This pipe also handles unsubscribing (no need to manually cleaning up subscriptions on destroy).

## Examples

### Reducers index

`reducers/index.ts`
```TypeScript
import { ActionReducerMap } from '@ngrx/store';

import * as fromExample1 from './example1.reducer';
import * as fromExample2 from './example2.reducer';

export interface State {
  example1: fromExample1.State;
  example2: fromExample2.State;
}

export const reducers: ActionReducerMap<State> = {
  example1: fromExample1.reducer,
  example2: fromExample2.reducer,
}
```

### Inside the app.module

```TypeScript
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(
      reducers,
      // { initialState: {} }
      ),
  ],
})
export class AppModule {}
```

### Inside the component

```TypeScript
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import * as ExampleActions from './example-actions';

@Component({})
export class ExampleComponent {
    constructor(private store: Store<fromRoot.State>) {}

    setExample(input): void {
        this.store.dispatch(new ExampleActions.ActionName(input));
    }

    getExample(): Observable<any> {
        return this.store.select(fromRoot.selectResults);
    }
}
```

## Components categories

*Credits to [btroncone](https://gist.github.com/btroncone/a6e4347326749f938510).*

Components in Store application falls into one of two categories: **smart** or **dumb**.

### Smart (Container components)

* routable components at root level;
* have direct access to the store (or to a derivative);
* handle view events and the dispatching of actions (through a service or directly);
* handle the logic behind events emitted up from child components within the same view.

### Dumb (Child components)

* generally for presentation only;
* rely exclusively on `@Input` parameters;
* when relevant events occur in dumb components, they are emitted up to be handled by a parent smart component;
* make up the majority of your application;
* should be small, focused, and reusable.

#### Performance

When components rely only on `@Input` parameters, and those input references do not change,
it is possible to tell Angular to skip running change detection
(until there is a change in input references) to provide performance benefit.

To enable this utilize the `changeDetectionStrategy` of `OnPush`.
