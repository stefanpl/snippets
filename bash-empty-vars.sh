#!/bin/bash

if [ "${lastUpdated}" = "" ]; then 
    # $lastUpdated is an empty string. It has been set.
fi

if [ -z ${lastUpdated+set} ]; then
    # $lastUpdated is not set. It is not an empty string.
fi

if [ -z "$lastUpdated" ]; then
    # $lastUpdated could be "" or not set at all
fi
