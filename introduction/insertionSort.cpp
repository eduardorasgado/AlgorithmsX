#include <iostream>

void insertionSort(int*, int);
void print(int*, int);

int main(){
    // insertion sort
    int A[] = {6,3,8,2,1,9,8,0,7};
    int *p_A = A;
    int size = sizeof(A)/sizeof(*A);
    
    print(p_A, size);
    insertionSort(p_A, size);
    std::cout << "Sorting ascending: " << "\n";
    print(p_A, size);
    return 0;
}

void insertionSort(int *A, int size){
    
    for(int j = 1; j < size; ++j){
        int key = A[j];
        int i = j - 1;
        while(i >= 0 && A[i] > key){
            A[i + 1] = A[i];
            i = i - 1;
        }
        A[i + 1] = key;
    }
}

void print(int* A, int size){
    for(int i = 0; i < size;++i){
        std::cout << *(A+i) << " ";
    }
    std::cout << "\n";
}