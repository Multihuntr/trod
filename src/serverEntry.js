#!/usr/bin/env node

/**
 * Server-side code entry point.
 */

// Configure Babel to transpile imported modules.
require('@babel/register')();


const serverMain = require('./server').default;

// Ensure we can ctrl+c the process
process.on('SIGINT', function() {
  process.exit(1);
});

// Call the server-side main function.
serverMain(process.argv);
