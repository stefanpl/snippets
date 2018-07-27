'use strict';

// Paul Irish Video:
// https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27

// Assuming you have an already running node instance,
//  find its pid and insert it here:

process._debugProcess(runningProcessPid);

// The output of the command ('debugger listening on …', or any errors) 
//  will be visible in the console of the running process.

// Now we can navigate to the chrome inspector (chrome://inspect, 'Open dedicated DevTools for Node')
// and open the 'sources' tab. Set breakpoints and debug like a pro!