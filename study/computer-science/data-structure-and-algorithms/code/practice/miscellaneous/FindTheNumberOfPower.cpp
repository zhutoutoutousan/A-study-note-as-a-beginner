// CPP Program to calculate
// no. of digits  in a^b
#include <iostream>
#include <math.h>
using namespace std;

//  function to calculate number
//  of digits in a^b
int no_of_digit(int a, int b){
    return ((int)(b * log10(a))+1)
}

//  driver program

int main(){
    int a = 2, b = 100;
    cout << "no. of digits =  "<<
                    no_of_digit(a,b);
}

// By Smitha

// ISSUE: Cannot debug for redirected to the Setting tab after pressing F5