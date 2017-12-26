# Observable

Observable is a **stream**
*(of zero, one or more values over any amount of time (may be async, but it is not mandatory))*.

**Everything can be a stream.**

## Observable vs Array

Differs in direction in which the data is being pushed:

* **Array** - pulling data for operation.
* **Observable** - performing operation on data.

## Cold vs Hot Observables

**Cold observables** start running upon subscription and values are not shared among subscribers.

**Hot observables** are already producing values even before a subscription is active
*(such as mouse move events or stock tickers)*
and sequence is shared among all subscribers
*(each subscriber is pushed the next value in the sequence)*.

When an observer subscribes to a **hot observable** sequence,
it will get all values in the stream that are emitted after it subscribes.

## Subject

A Subject is like an Observable, but can multicast to many Observers.
Subjects are like EventEmitters: they maintain a registry of many listeners.

Every Subject is an Observable.
Every Subject is an Observer.

|Subject|Description|
|---|---|
|BehaviorSubject|"The current value". It stores the latest value emitted to its consumers, and whenever a new Observer subscribes, it will immediately receive the "current value".|
|ReplaySubject|Records multiple values from the Observable execution and replays them to new subscribers. *When creating a ReplaySubject, you can specify how many values to replay.*|
|AsyncSubject|Only the last value of the Observable execution is sent to its observers, and only when the execution completes.|

## Operators

* [Choose an operator](http://reactivex.io/rxjs/manual/overview.html#choose-an-operator)
* [RxJS 5 Operators By Example](https://www.learnrxjs.io/operators/)
* [A Decision Tree of Observable Operators](http://reactivex.io/documentation/operators.html#tree)
