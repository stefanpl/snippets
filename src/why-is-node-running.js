/**
 * Requires why-is-node-running to be installed globally.
 * A global installation will save you from installing and removing it on a
 *  per-project basis. Just drop these lines and see what's up.
 * Alternatively, 
 * npm i why-is-node-running
 * npm r why-is-node-running
 */


// eslint-disable-next-line
const log = require('why-is-node-running');
// ... after your code should finish
setTimeout(log, 500);
