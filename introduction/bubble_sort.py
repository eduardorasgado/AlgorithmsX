#!/usr/bin/env python3

def bubble_sort(A):
    for i in range(len(A)-1):
        j_list = [i for i in range(i+1, len(A))]
        j_list.reverse()
        # for j = A.length downto i + 1
        for j in j_list:
            if A[j] < A[j-1]:
                A[j], A[j-1] = A[j-1], A[j]

A = [9,8,5,7,4,6,1,2,3]
print(A)
bubble_sort(A)
print(A)