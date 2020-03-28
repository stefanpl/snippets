#!/bin/bash
set -e

# Taken from https://stackoverflow.com/questions/1186535/how-to-modify-a-specified-commit

# Change back to a certain commit
git rebase --interactive 'bbc643cd^'
# In the editor opening, change 'pick' to 'edit' for the commit in question
# Once all changes are applied, run
git commit --all --amend --no-edit
# Then, to return to HEAD:
git rebase --continue