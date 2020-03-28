#!/bin/bash

# Generates german and english locales in case PERL complains

locale-gen "en_US.UTF-8"
locale-gen "de_DE.UTF-8"
locale-gen --purge de_DE.UTF-8 en_US.UTF-8
