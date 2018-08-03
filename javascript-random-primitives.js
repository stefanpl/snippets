"use strict";

function randomIntFromInterval(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

function coinflip() {
  return !!Math.round(Math.random());
}

function randomWord() {
  let words = ['hi', 'dog', 'whatever', 'lorem', 'ipsum'];
  let randomIndex = randomIntFromInterval(0, words.length - 1);
  return words[randomIndex];
}

function randomPhrase() {
  let phrase = '';
  let length = randomIntFromInterval(3, 10);
  for (let i = 0; i < length; i++) {
    phrase += randomWord() + ' ';
  }
  return phrase.replace(/ $/, '.');
}

function randomWordOrNumber() {
  return coinflip() ? randomWord() : randomIntFromInterval(0, 10000);
}

function randomPhraseOrNumber() {
  return coinflip() ? randomPhrase() : randomIntFromInterval(0, 10000);
}

function generateRandomObject() {
  let randomObject = {};
  let propertyCount = randomIntFromInterval(5, 10);
  for (let i = 0; i < propertyCount; i++) {
    randomObject[randomWordOrNumber()] = randomPhraseOrNumber();
  }
  return randomObject;
}