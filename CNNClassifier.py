import numpy as np
from keras.models import Sequential
from keras.layers import Conv2D, Dense, Flatten, MaxPooling2D
from sklearn.model_selection import train_test_split

import dataPreparer
import prepareTestData

model = Sequential()

data = dataPreparer.finalPreparedData
labels = dataPreparer.Labels

X = np.array(data)
Y = np.array(labels)

x_train, x_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=1)

print(y_train)
print(y_test)

model.add(Conv2D(32,(3,3), activation='relu', input_shape=(128,128,3)))
model.add(MaxPooling2D((2,2)))
model.add(Conv2D(64,(3,3), activation='relu', input_shape=(128,128,3)))
model.add(MaxPooling2D((2,2)))
model.add(Flatten())
model.add(Dense(64, activation='relu'))
model.add(Dense(10))

model.compile(optimizer='adam', loss='binary_crossentropy')
model.fit(x_train, y_train, epochs=30, validation_data=(x_test, y_test))
finalTestData = prepareTestData.pixelData.reshape(128,128,3)
output = model.predict(finalTestData)
print(output)
