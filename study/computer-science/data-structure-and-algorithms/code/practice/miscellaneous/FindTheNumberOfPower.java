// REFERENCE:
// https://www.geeksforgeeks.org/number-digits-ab/


// Java Program to calculate
// no. of  digits in a^b
class fuck{
    
    // function to calculate number
    // of digits in a^b
    static int no_of_digit(int a, int b){
        return ((int)(b * Math.log10(a)) + 1);
    }

    // driver program
    public static void main(String[] args){
        int a = 2, b = 100;
        System.out.print("no. of digits = " +
                         no_of_digit(a, b));
    }
}