#!/bin/bash

# Taken from https://stackoverflow.com/a/17410119/2072165:

# Change the file which should not be tracked, then:
git update-index --assume-unchanged FILE_NAME

# To track changes again: 
git update-index --no-assume-unchanged FILE_NAME