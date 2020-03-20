<?php

DB::enableQueryLog();
$comment = Comment::fromActivePage()->whereIn('status', [
    Comment::$STATUS_NEW,
    Comment::$STATUS_OK,
    Comment::$STATUS_FLAGGED,
])->first();
$log = DB::getQueryLog();

var_dump($log);
