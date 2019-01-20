#include <iostream>

void print(int*, int);

void mergeSort(int*, int&, int&);
void merge(int*, int&, int&, int&);

int main(){
    int A[] = {5,2,4,7,1,3,2,6};

    //int A[] = {9,8,7,6,5,4,3,2,1};
    int *p_A = &A[0];
    int size = sizeof(A)/ sizeof(*A);
    print(p_A, size);

    int init = 0;
    mergeSort(p_A, init, size);

    print(p_A, size);
    return 0;
}

void print(int* A, int size){
    for(int i = 0; i < size; ++i){
        std::cout << *(A+i) << " ";
    }
    std::cout << "\n";
}

void mergeSort(int* A, int &p, int &r){
    if (p < r){
        //print(A, r);
        // if it is not a one element array
        // middle of array
        int q = static_cast<int>((p + r) / 2.0f);
        //std::cout << "|||q:" << q << std::endl;
        // left side
        mergeSort(A, p, q);
        // right side
        //std::cout << "Right side" << std::endl;
        int q2 = q + 1;
        mergeSort(A, q2, r);
        // sorting subarrays
        merge(A, p, q, r);
    }
    print(A, r);
}

void merge(int* A, int &p, int &q, int &r){
    //std::cout << "r: " << r << "\n";
    // A: array, p: lower, q: upper, r: size
    int n1 = q - p;
    int n2 = r - q;

    //std::cout << "n1: " << n1 << ", n2: " << n2 << std::endl;
    //std::cout << "n1: " << n1 << ", n2: " << n2 << std::endl;
    // to store numbers and sentinel
    int L[n1+1];
    int R[n2+1];
    //std::cout << "L length: " << sizeof(L)/sizeof(*L) << " | ";
    //std::cout << "R length: " << sizeof(R)/sizeof(*R) << std::endl;
    for(int i = 0; i < n1; ++i){
        std::cout << "A[p+i]: " << p + i << " ";
        L[i] = A[p + i];
    }
    std::cout << "\n";
    for(int i = 0; i < n2; ++i){
        std::cout << "A[q+i]: " << q+i << " ";
        //std::cout << "q: " << q << " ";
        R[i] = A[q + i];
    }
    std::cout << "\n";

    // setting sentinels at the end
    L[n1] = 99999;
    R[n2] = 99999;

    int i = 0; int j = 0;
    for(int k = p; k < r; ++k){
        // sorting in A array
        if(L[i] <= R[j]){
            A[k] = L[i];
            //std::cout << "Li: " << L[i] << ", Ak: " << A[k] << std::endl;
            i += 1;
        }
        else {
            A[k] = R[j];
            j += 1;
        }
    }
    //std::cout << "L: ";
    //int* p_L = L;
    //print(p_L, n1+1);
    //std::cout << "R: ";
    //int *p_R = R;
    //print(p_R, n2+1);
}