import { combineLatest, map, Observable, pairwise, tap } from "rxjs";

const some$: Observable<number> = new Observable();
const another$: Observable<number> = new Observable();

// Find out why a combineLatest chain is triggered:
// Pairwise emits the old an new values,
//  then a default equality check is performed.
// The new value is returned to resume normal operation.

combineLatest({
  some: some$,
  another: another$,
}).pipe(
  // Drop this anywhere into a pipe.
  pairwise(),
  map(([oldVals, newVals]) => {
    Object.keys(oldVals).forEach((key) => {
      const oldVal = oldVals[key];
      const newVal = newVals[key];

      if (oldVal !== newVal) {
        console.log(`'${key}' differs`);
      }
    });

    return newVals;
  }),
  // Resume whatever you were doing.
  tap(() => {
    // Whatever
  })
);
