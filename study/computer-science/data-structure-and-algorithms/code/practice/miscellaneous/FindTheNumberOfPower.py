# REFERENCE: 
# https://www.geeksforgeeks.org/number-digits-ab/

# Python Program to calculate
# no. of digits in a^b
import math

# function to calculate number
# of digits in a^b
def no_of_digit(a,b):
    return ((int)(b * math.log10(a)) + 1)

# Driver Program
a = 2
b = 125
print("no of digits =",no_of_digit(a,b))


# By Shrikant13