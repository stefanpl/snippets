# Creates a bootable stick from an iso file

# WARNING: 
#
# triple-check that the given output device really is the desired usb stick.
# dd is powerful and will destroy hard drives etc when applied erroneously.
#
# The output device must be given as a 'whole' device, e.g. /dev/sdb – NOT /dev/sdb1 etc.

inputIso=linuxRulesz.iso
outputDevice=/dev/makeSureItsTheRightOne

sudo umount ${outputDevice} && \
sudo dd bs=4M if=${inputIso} of=${outputDevice} conv=fdatasync