// A regular observable
import {
  concatAll,
  from,
  interval,
  map,
  mergeAll,
  Observable,
  Observer,
  of,
  range,
} from "rxjs";

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

// `range` emits a consecutive series of numbers
const rangeObservable = range(5, 3);
rangeObservable.subscribe(loggingObserver("range"));

// This will emit an increasing counter.
// The first value is emitted __after__ the first timeout.
// Be sure to unsubscribe, since the interval will never stop.
const intervalObservable = interval(10);
const sub = intervalObservable.subscribe(loggingObserver("interval"));
setTimeout(() => sub.unsubscribe(), 40);

// Making the interval a bit more useful by using a map operator.
const intervalStartingAt100 = interval(10).pipe(map((val) => val + 100));
const sub2 = intervalObservable.subscribe(
  loggingObserver("interval starting at 100")
);
setTimeout(() => sub2.unsubscribe(), 40);

/**
 * Higher-order observables:
 *  Observables returning observables 🤯
 */
const fakeHttpGet = (url: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const timeout = Math.round(Math.random() * 1000);
    setTimeout(() => resolve(`Result for: ${url}`), timeout);
  });

const urlObservable = of("google,de", "bing.de", "ecosia.de");

// For each url, we map to a new observable, created from the promise
const higherOrderObservable = urlObservable.pipe(
  map((url) => from(fakeHttpGet(url)))
);

// This is pretty boring … we get back the inner observables.
higherOrderObservable.subscribe(loggingObserver("higher order"));

// Now, we create a separate observer for each value from the outer observer.
//  This works, but the values are treated in a fully isolated manner.
higherOrderObservable.subscribe({
  next: (val) => val.subscribe(loggingObserver("inner observer")),
});

const concatAllObservables = higherOrderObservable.pipe(concatAll());
concatAllObservables.subscribe(loggingObserver("joining with concatAll"));

const mergeAllObservables = higherOrderObservable.pipe(mergeAll());
mergeAllObservables.subscribe(loggingObserver("merging with mergeAll"));
