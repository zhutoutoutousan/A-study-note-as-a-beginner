// C program to illustrate differences 
// between structure and Union
#include <stdio.h>
#include <string.h>

// declaring structure
struct struct_example
{
    int integer;
    float decimal;
    char name[20];
};

// declaring union

union union_example
{
    int integer;
    float decimal;
    char name[20];
};

void main(){
    // Creating variable for structure
    // and initializing values difference
    // six
    struct struct_example s={18,38,"fuckthisshit"};

    // creating variable for union
    // and initializing values
    union union_example u={18,38,"fuckthisshit"};

    printf("structure data:\n integer: %d\n"
            "decimal: %.2f\n name: %s\n",
            s.integer, s.decimal, s.name);
    printf("\nunion data:\n integer: %d\n"
            "decimal: %.2f\n name: %s\n",
            u.integer,u.decimal,u.name);

}