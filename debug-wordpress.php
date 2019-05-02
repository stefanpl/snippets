<?php

/** 
 * https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', true );
// Save errors etc to /wp-content/debug.log
define( 'WP_DEBUG_LOG', true );

// Display everything PHP generates (warnings, errors)
error_reporting(E_ALL);
ini_set('display_errors', 1);