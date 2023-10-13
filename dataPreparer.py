import os
import numpy as np
from PIL import Image

files = ['Starbucks', 'Tesla', 'WellsFargo']
finalPreparedData = []
Labels = []
for file in files:
    currPath = os.getcwd() + '\\' + file + 'Frames'
    frames = os.listdir(currPath)
    for frame in frames:
        x = Image.open(currPath + '\\' + frame, 'r')
        y = x.resize((32, 128))
        listData = list(y.getdata())
        pixelData = np.array(listData).reshape(32,128,3)
        finalPreparedData.append(np.array(pixelData))
        if file == 'Starbucks':
            Labels.append(1)
        elif file == 'Tesla':
            Labels.append(0)
        else:
            Labels.append(-1)

