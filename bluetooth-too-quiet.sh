#!/bin/bash
set -e

# Apply this to improve audio quality and volume over bluetooth

sudo apt install pulseaudio pulseaudio-utils pavucontrol pulseaudio-module-bluetooth

sudo bash -c " cat << EOF >> /etc/bluetooth/audio.conf
# This section contains general options
[General]
Enable=Source,Sink,Media,Socket

EOF"

sudo service bluetooth restart
