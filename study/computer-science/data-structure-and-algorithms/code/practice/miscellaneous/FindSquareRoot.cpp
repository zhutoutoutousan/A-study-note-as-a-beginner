// C++ implementation of the approach
// REFERENCE:  https://www.geeksforgeeks.org/square-root-of-a-number-without-using-sqrt-function/

#include <bits10_1.h>
using namespace std;

// Recursive function that returns square root of a number
// with precision upto 5 decimal places
double Square(double n, double i, double j){
    double mid = (i + j) / 2;
    double mul = mid * mid;

    // If mid itself is the square root
    // return mid;
    if ((mul == n) || (abs(mul - n) < 0.00001))
        return mid;

    // If mul is less than n, recur second half
    else if (mul < n)
        return Square(n, mid, j);

    // Else recur first half

}