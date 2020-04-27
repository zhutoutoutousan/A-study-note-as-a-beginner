import sys
import csv
import glob
import errno
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import LogNorm

# path = './FSP-212-data/*.csv'
# da = np.array([])
# files = glob.glob(path)
# title = ['time', '\tLoad0', '\tLoad1', '\tLoad2', '\tLoad3', '\tLoad4', '\tLoad5', '\tLoad6']

# for name in files:
#     try:
#         with open(name) as csvDataFile:
#             csvReader = csv.reader(csvDataFile)
#             for row in csvReader:
#                 if(row != title):
#                     da = np.append(da,row,axis=0)
#     except IOError as exc:
#         if exc.errno != errno.EISDIR:
#             raise
            

# # need to use nditer to iterate through the array and change all elements to a number
# des = da.reshape(int(da.size) // 8, 8)

# dist = np.array(des, copy=True)
# numbers = np.delete(dist, 0,1 )
# time = np.delete(dist, np.s_[1:],1)

# rows = numbers.shape[0]
# cols = numbers.shape[1]
# for i in range(0, rows):
#     for j in range(0,cols):
#         numbers[i,j] = int(numbers[i,j])


# fig, (ax0) = plt.subplots(1)

# c = ax0.pcolor(numbers.astype(np.float).T)
# ax0.set_title('default: no edges')


# fig.tight_layout()
# fig.savefig('plot.pdf')
# plt.show()


def dataProcessing(path):
    da = np.array([])
    files = glob.glob(path)
    title = ['time', '\tLoad0', '\tLoad1', '\tLoad2', '\tLoad3', '\tLoad4', '\tLoad5', '\tLoad6']

    for name in files:
        try:
            with open(name) as csvDataFile:
                csvReader = csv.reader(csvDataFile)
                for row in csvReader:
                    if(row != title):
                        da = np.append(da,row,axis=0)
        except IOError as exc:
            if exc.errno != errno.EISDIR:
                raise
                

    # need to use nditer to iterate through the array and change all elements to a number
    des = da.reshape(int(da.size) // 8, 8)

    dist = np.array(des, copy=True)
    numbers = np.delete(dist, 0,1 )
    time = np.delete(dist, np.s_[1:],1)

    rows = numbers.shape[0]
    cols = numbers.shape[1]
    for i in range(0, rows):
        for j in range(0,cols):
            numbers[i,j] = int(numbers[i,j])
    
    return numbers, time

def showPlot(array, date):
    fig, (ax0) = plt.subplots(1)

    c = ax0.pcolor(array.astype(np.float).T)
    ax0.set_title(date)


    fig.tight_layout()
    fig.savefig(date + '.pdf')
    plt.show()


# Definition of sensor malfunction:
#   1. Add a reference product
#   2. If a reference product turns ON in mode C due to the occupancy, search for ON state for other sensors
#   3. If other sensors doesn't turn ON after a certain T_shortdelay, report this sensor as malfunctioning
def identifyMalfunction(array):
    print(array)

# The elimination of the mounting trigger within the dataset
def deleteMountingTriggerDataset(array):
    print(array)


# Definition of a sensor false trigger:
#   1. In a dark room, sleep for the first 5 minutes, ignoring all triggers.
#   2. Make sure that no ones enters the dark room.
#   3. Detect any trigger after certain period of time 
#   4. Delete the last 5 minutes of unmounting dataset
def falseTrigger(array):
    print(array)


def startMalfunctionTest(dataPath, date):
    showPlot(dataProcessing(dataPath), date)

def startFalseTriggerDetection(dataPath, date):
    falseTrigger(dataProcessing(dataPath))

# https://pythonspot.com/matplotlib-save-figure-to-image-file/
# https://docs.scipy.org/doc/numpy/reference/arrays.nditer.html