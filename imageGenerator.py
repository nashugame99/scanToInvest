import cv2
import os
import numpy as np
from glob import glob

paths = ['Starbucks', 'Tesla', 'WellsFargo']
for fileName in paths:
    dir = os.curdir + '\\' + fileName
    files = os.listdir(dir)
    currPath = os.getcwd() + '\\' + fileName + 'Frames'
#    os.mkdir(currPath)
    for file in files:
        videoPath = dir + '\\' + file
        video = cv2.VideoCapture(os.getcwd() + '\\' + fileName + '\\' + file)
        idx = 0
        print(os.getcwd() + '\\' + fileName + '\\' + file)
        while True:
            ret, frame = video.read()
            if ret == False:
                video.release()
                break

            # if idx == 0:
            #     cv2.imwrite(f"{currPath}/{idx}.png", frame)
            # elif idx % 10 == 0:
            #     cv2.imwrite(f"{currPath}/{idx}.png", frame)

            idx += 1


