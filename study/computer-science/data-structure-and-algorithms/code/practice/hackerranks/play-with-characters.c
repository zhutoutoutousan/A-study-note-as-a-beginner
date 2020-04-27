#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{
    char ch;
    scanf("%c",&ch);
    printf("%c",ch);
    printf("\n");
    char str[10];
    scanf("%s",str);
    printf("%s",str);
    printf("\n");
    char sen[50];
    scanf("\n");  // https://www.quora.com/How-do-I-read-and-display-a-full-sentence-in-C
    scanf("%[^\n]%*c",sen);
    printf("%s",sen);
    printf("\n");
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */    
    return 0;
}