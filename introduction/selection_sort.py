#!/usr/bin/env python3

def selection_sort(A, increasing=True):
    # clonning A
    B = A[:]
    # for 1 ... j-1
    for j in range(len(B)-1):
        max_min_e = B[j+1] # to compare actual vs smallest(at the moment i)
        max_min_index = j+1
        if increasing:
            # finding the smallest number in upper subarr
            for i in range(j+1, len(B)):
                if B[i] < max_min_e:
                    max_min_e = B[i]
                    max_min_index = i
        else:
            # findinf the greatest bumber in upper sub arr
            for i in range(j, len(B)):
                if B[i] > max_min_e:
                    max_min_e = B[i]
                    max_min_index = i

        # exchanging actual j for the smallest
        B[j], B[max_min_index] = B[max_min_index], B[j]
    return B

list1 = [6,5,7,4,8,3,9,2,0,1]
print(list1)
print("Increasing sorting: ")
list_inc = selection_sort(list1, True)
print(list_inc)
print("Decreasing sorting:")
#print(list1)
list_dec = selection_sort(list1, False)
print(list_dec)