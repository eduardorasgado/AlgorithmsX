#!/usr/bin/env python3

def selection_sort(A):
    # clonning A
    B = A[:]
    # for 1 ... j-1
    for j in range(len(B)-1):
        min_e = B[j+1] # to compare actual vs smallest(at the moment i)
        min_index = j+1
        #finding the smallest number in upper subarr
        for i in range(j+1, len(B)):
            if(B[i] < min_e):
                min_e = B[i]
                min_index = i
        # exchanging actual j for the smallest
        B[j], B[min_index] = B[min_index], B[j]
        
    return B

list1 = [6,5,7,4,8,3,9,2,0,1]
print(list1)
print("Increasing sorting: ")
list_inc = selection_sort(list1)
print(list_inc)
print("Decreasing sorting:")