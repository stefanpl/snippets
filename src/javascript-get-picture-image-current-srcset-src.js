// See whats actually being rendered by an image with multiple srcsets
const selector = '#woof picture img';
const element = document.querySelector(selector);
console.log(`The image currently renders ${element.currentSrc}`);
