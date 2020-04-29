folderToSearch=templates
git log --diff-filter=D --all --summary ${folderToSearch} | grep delete | less
