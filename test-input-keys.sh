#!/bin/bash
set -e

# This will help getting the keycodes sent for specific keypresses. Taken from:
# https://wiki.archlinux.org/index.php/Keyboard_input#Identifying_keycodes_in_Xorg

xev | awk -F'[ )]+' '/^KeyPress/ { a[NR+2] } NR in a { printf "%-3s %s\n", $5, $8 }'