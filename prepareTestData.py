import os
from PIL import Image
import numpy as np

finalTestDataPoints = []
x = Image.open(os.getcwd() + '\\Test\\starbucks.png', 'r')
y = x.resize((128, 128))
listData = list(y.getdata())
pixelData = np.array(listData).reshape(128, 128, 3)
