// When horizontal scrolling is enabled on an element which spans 100% of the viewport on mobile,
//  the default hammer.js configuration will prevent the user from scrolling on this element.

// Config needs to include this to make it work:
{
  touchAction: "pan-y"
}


// Taken from https://github.com/hammerjs/hammer.js/issues/1014#issuecomment-298724577