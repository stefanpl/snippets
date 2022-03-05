// A regular observable

import { from, Observable, Observer, of } from "rxjs";

let counter = 0;

// the Observable constuctur takes a callback which:
//  - is referred to as the "subscribe" function
//  - will be lazily evaluated for each new subscriber: Observables are unicast.
//  - will be passed a subscriber object that can be used to:
//      - emit values over time via `.next`
//      - mark the observable as `.complete`
//      - return erros
//      - more …
const obs = new Observable((subscriber) => {
  counter++;
  console.log(
    `The observable is being subscribed to. Callback evaluates. Run ${counter}`
  );

  subscriber.next(counter * 3);

  if (counter === 1) {
    subscriber.complete();
  }

  subscriber.next(counter * 4); // This is not delivered for counter === 1
});

// We pass an Observer object. They can have callbacks for:
//  - next
//  - error
//  - complete
const myObserver = {
  next: (val) => {
    console.log(`I got a new value: ${val}`);
  },
  complete: () => {
    console.log(`no more values for this one`);
  },
};

obs.subscribe(myObserver);

// Providing a single function to `subscribe`
//  is equal to passing a provider that only has a `next` prop
obs.subscribe((val) => console.log(`Second  got a val: ${val}`));

const anotherObservable = new Observable((subscriber) => {
  subscriber.next("Only this value will be emitted.");
  setTimeout(() => subscriber.next("This one will not."));
  // Similar to react's useEffect:
  //  Returning a function is used as the unsubscribe handler.
  return () => {
    console.log(`unsubscribe callback called`);
  };
});

/**
 * The subscription
 */

// The subscription represents an observer
//  which is tied to an Observable execution.
const subscription = anotherObservable.subscribe({
  next: (val) => {
    console.log(val);
  },
});

// Most common operation on a subscription.
subscription.unsubscribe();

/**
 * Observers are really just collections of named callbacks.
 */

const whatAreObservers: Observer<string> = {
  next: (val) => {
    /* Do stuff with string value */
  },
  complete: () => {
    /* No more values will be delivered. Note: no value here! */
  },
  error: (err) => {
    /* Something bad happened. */
  },
};

const loggingObserver = (name: string): Observer<unknown> => ({
  next: (value) => console.log(`${name} received value`, value),
  complete: () => console.log(`${name} completed`),
  error: (err) => console.error(`${name} errored`, err),
});

/**
 * Operators
 */

/**
 * Creation Operators:
 * https://rxjs.dev/guide/operators#creation-operators-list
 *
 * They create a new Observable with predefined behaviour.
 */

// `of` calls .next for each parameter, then completes
const oneTwoThree = of(1, 2, 3);
const mixedContent = of({ some: "Object" }, null, 99);

oneTwoThree.subscribe(loggingObserver("oneTwoThree"));
mixedContent.subscribe(loggingObserver("mixedContent"));

// `from` creates an observable from "almost anything"
const fromArray = from([5, 6, 7]);

const fromPromise = from(
  new Promise((resolve) =>
    setTimeout(() => {
      const promiseResult = {
        some: "arbitraty",
        object: ["with", "stuff", "in it"],
      };
      resolve(promiseResult);
    }, 100)
  )
);

fromArray.subscribe(loggingObserver("fromArray"));
fromPromise.subscribe(loggingObserver("fromPromise"));
