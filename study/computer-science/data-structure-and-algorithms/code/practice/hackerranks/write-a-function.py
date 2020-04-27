def is_leap(year):

    hundredOK = False
    fourhundOK = False
    leap = False

    if not year % 100:
        hundredOK = True

    if not year % 400:
        fourhundOK = True

    if year % 4:
        leap = False
    elif not hundredOK or fourhundOK:
        leap = True 

    return leap


year = int(input())
print(is_leap(year))