#!/bin/bash

# This will renew the cert if a renewal is necessary
# You need to make sure that the .well-known/acme-challenge path will be served under the webroot.

# Please bear in mind that acme challenges will be requested via ipv6!!
# listen [::]:80;
# listen [::]:443 ssl;

sudo certbot certonly --dry-run --webroot -w /var/www/challenge-dummy -d dateiwolke.rarelime.de

# For testing, the --dry-run parameter can be inserted


# For certificates covering multiple domains, specify each one separately:

sudo certbot certonly --webroot  \
-w /var/www/bruce -d bruceweb.de \
-w /var/www/bruce -d www.bruceweb.de \
-w /var/www/dev.hatercater -d dev.hatercater.de \
-w /var/www/owncloud -d owncloud.rarelime.de \
-w /var/www/testapp.hatercater/public -d testapp.hatercater.de


# Don't forget to restart the webserver to deliver the new certificates
sudo nginx -t && sudo service nginx restart
sudo apache2ctl -k restart