// https://www.hackerrank.com/challenges/sum-numbers-c/problem 
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
    int a = 0;
    int b = 0;
    scanf("%d", &a);
    scanf("%d", &b);
    printf("%d %d\n", a + b, a - b);
    float c = 0.0;
    float d = 0.0;
    scanf("%f", &c);
    scanf("%f", &d);
    printf("%.1f %.1f", c + d, c - d);
    return 0;
}