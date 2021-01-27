# using sharp-cli, a cli wrapper for the sharp image processing package
# This would crop the image, since width and height are provided:

# -i input file[s]
# -o output directory
# -q [quality]
# width [height]
sharp -i *.jpg -o output -q 80 resize 800 800