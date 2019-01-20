def insertion_sort(A, increasing):
    #cloning A
    B = A[:]    
    for j in range(1,len(B)):
        key = B[j]
        i = j - 1
        main_condition = False
        if increasing:
            # sorting in increasing order
            while i >= 0 and B[i] > key:
                    B[i + 1] = B[i]
                    i = i - 1
        else:
            # sorting in decreasing order
            while i >= 0 and B[i] < key:
                B[i + 1] = B[i]
                i = i - 1
        B[i + 1] = key
    return B

list1 = [3,2,7,5,6,1,10,9,4]
print(list1)
print("increasing sorting: ")
list_inc = insertion_sort(list1, True)
print(list_inc)

print("decreasing sorting: ")
list_dec = insertion_sort(list1, False)
print(list_dec)