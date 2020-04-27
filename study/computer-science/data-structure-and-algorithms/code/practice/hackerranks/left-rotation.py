#!/bin/python3

import math
import os
import random
import re
import sys

def leftRotate(arr, n, k):

    # To get the starting point of rotated array
    mod = k % n
    s = ""

    # Prints the rotated array from start position
    for i in range(n):
        print str(arr[(mod + i) % n])
    print
    return


if __name__ == '__main__':
    nd = input().split()

    n = int(nd[0])

    d = int(nd[1])

    a = list(map(int, input().rstrip().split()))

    print(a)
