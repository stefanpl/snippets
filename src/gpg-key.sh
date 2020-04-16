#!/bin/bash
set -e

# Info: use version 2 of gpp. Generate a symlink to avoid using v1.

# Check if any keys exist:
gpg --list-keys

# use this to generate a key:
gpg --full-gen-key

