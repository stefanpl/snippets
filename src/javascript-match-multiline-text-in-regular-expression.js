// Instead of matching .*
// Just use [\s\S]

console.log('some \n multiline \n text'.match(/.*/)[0]); // nope …
console.log('some \n multiline \n text'.match(/[\s\S]*/)[0]); // very yes!