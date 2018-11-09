function synchronousWait(amountOfMilliseconds) {
  let startTime = Date.now();
  while(true) {
    if (startTime + amountOfMilliseconds < Date.now()) return;
  }
}