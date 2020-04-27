// C# Program to calculate
// no. of digits in a^b
using System;

class fuck{

    // functions to calculate number
    // of digits in a^b
    static int no_of_digit(int a, int b){
        return ((int)(b * Math.Log10(a)) + 1);
    }

    // driver program
    public static void Main(){
        int a = 2, b = 100;
        Console.Write("no. of digits = " +
                        no_of_digit(a,b));
    }
}


// By Smitha

// ISSUE: Can't work with VSC