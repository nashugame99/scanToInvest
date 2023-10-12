import pandas as pd
import numpy as np
from keras.models import Sequential
from keras.layers import Conv2D, Dense, Flatten, MaxPooling2D
import tensorflow as tf
import matplotlib as plt
import cv2
import sklearn
from sklearn.model_selection import train_test_split

model = Sequential()

X = trainingData
Y = trainingLabels

x_train, x_test, y_train, y_test = train_test_split(X, Y, )

model.add(Conv2D(32,(3,3), activation='relu', input_shape=(32,32,3)))
model.add(MaxPooling2D((2,2)))
model.add(Conv2D(64,(3,3), activation='relu', input_shape=(32,32,3)))
model.add(MaxPooling2D((2,2)))
model.add(Flatten())
model.add(Dense(64, activation='relu'))
model.add(Dense(10))

model.compile(optimizer='adam', loss='binary_crossentropy')
model.fit(x_train, y_train, epochs=10, validation_data=(x_test, y_test))

newImage = load_image()
model.predict()
