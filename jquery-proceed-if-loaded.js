/**
* This snippet will wait until jquery is loaded and then call any arbitraty code.
*/
(function() {
  progressIfLoaded();

  var isInitialized;
  function progressIfLoaded() {
    var jQueryIsAvailable = (typeof jQuery !== "undefined");
    if (jQueryIsAvailable && !isInitialized) {
      isInitialized = true;

      /** Call your code here */
      console.log("jQuery is loaded");

    } else {
      setTimeout(function tryAgain(){
        progressIfLoaded();
      }, 50);
    }
  }
})();


