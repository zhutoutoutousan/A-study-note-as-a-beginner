#include <stdio.h>
/*
Add `int max_of_four(int a, int b, int c, int d)` here.
*/
void swap(int* a, int* b)
{
    int t = *a;
    *a = *b;
    *b = t;
}

int partition (int arr[], int low, int high)
{
    int pivot = arr[high];  // pivot
    int i = (low - 1);      // Index of smaller element

    for (int j = low; j <= high - 1; j++)
    {
        if (arr[j] < pivot)
        {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high)
{
    if (low < high)
    {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}


int max_of_four(int a, int b, int c, int d){
    int array[4];
    array[0] = a;
    array[1] = b;
    array[2] = c;
    array[3] = d;
    quickSort(array, 0, 3);
    
    return array[3];
}


int main() {
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);
    
    return 0;
}