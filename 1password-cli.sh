#!/bin/bash
set -e

# Obtain the url of your accout by logging in via the browser
address=myaccount.1password.com

# Use the email you registered with
email=somedude@myaccount.com

op signin ${address} ${email}

# This will out put a command (starting with 'eval') you can use to sign in.
# Best, create an alias for it:
alias opl="eval \$(op signin myaccount)"

# This will get the password for an item named "WestJet":
op get item WestJet | jq '.details.fields[] | select(.designation=="password").value'
