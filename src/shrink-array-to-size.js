function shrinkArrayToSize(inputArray, desiredSize) {
  if (inputArray.lenght < desiredSize) return inputArray;

  let numberOfElementsToDelete = inputArray.length - desiredSize;
  inputArray.splice(desiredSize, numberOfElementsToDelete);
  return inputArray;
}