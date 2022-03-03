# This script creates a swap file and adds it to the currently used swap space.

swapFile=/var/swapfile0

touch /etc/fstab || {
  echo 'This script needs to be run with root privileges.'
  exit 1
}

if [ -f ${swapFile} ]; then
  echo "${swapFile} already exists. Exiting."
  exit 1
fi

# 2048000 means roughly 2GB
dd if=/dev/zero of=${swapFile} bs=1024 count=2048000

chown root:root ${swapFile}
chmod 0600 ${swapFile}

mkswap ${swapFile}
swapon ${swapFile}

fstabLine="${swapFile} none swap sw 0 0"
echo "${fstabLine}" >>/etc/fstab
