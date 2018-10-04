#!/bin/bash

inputFile=./wh00t.mp3
outputFile=./samples/wh00t.wav

ffmpeg -i ${inputFile} -acodec pcm_s16le -ac 1 -ar 16000 ${outputFile}