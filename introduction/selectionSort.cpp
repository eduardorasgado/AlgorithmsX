/*
* Selection sort Algorithm
*/
#include <iostream>

void print(int*, int);
void selectionSort(int*, int);

int main(int args, char* argv[]){
    int A[] = {6,5,7,4,8,3,9,2,0,1};

    int* p_A = &A[0];
    int size = sizeof(A)/sizeof(*A);
    print(p_A, size);

    selectionSort(p_A, size);

    print(p_A, size);
    
    return 0;
}

void print(int* A, int size)
{
    for(int i = 0; i < size; ++i)
    {
        std::cout << *(A+i) << " ";
    }
    std::cout << "\n";
}

void selectionSort(int* A, int size)
{
    // increasing sorting
    for(int j = 0;j < (size-1); ++j)
    {
        // actual element
        int key = A[j];
        int max_min_value = A[j + 1];
        int max_min_index = j + 1;
        for(int i = j+1; i < size; ++i)
        {   
            // finding the smallest number in subarr
            if(A[i] < max_min_value)
            {
                max_min_value = A[i];
                max_min_index = i;
            }
        }
        // exchanging the elements
        A[j] = A[max_min_index];
        A[max_min_index] = key;
    }   
}