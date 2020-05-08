# https://www.hackerrank.com/challenges/ctci-comparator-sorting/problem

from functools import cmp_to_key
class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score
    def __repr__(self):
        pass


    # algorithm to sort based in comparing two Player objects
    # based on quick sort to sort alphabets
    def comparator(self, a, b):
        def sort(array, start, end):
            if start >= end:
                return;
            else:
                pivot = array[start]
                pIdx = start
                for i in range(start+1, end+1):
                    if array[i] < pivot:
                        pIdx += 1
                        if(i != pIdx):
                            array[i], array[pIdx] = array[pIdx], array[i]
                if(pivot != array[pIdx]):
                    array[start], array[pIdx] = array[pIdx], array[start]
                p = pIdx
                sort(array, start, p-1)
                sort(array, p+1, end)
        # sort by num or if they have same score then sort alphabetically
        if a.score == b.score:
            # sort alphabetically
            arr = [a.name, b.name]
            sort(arr , 0, 1)
        
            if a.name == arr[0]:
                return -1
            else:
                return 1

        else:
            #sort by score
            # if a is greater the return -1
            if a.score < b.score:
                return 1
            else:
                return -1



p = Player("eduardo", 20)

#p1 = Player("davis", 10)
#p2 = Player("davis", 15)
p1 = Player("amanda", 20)
p2 = Player("davis", 20)

p11 = Player("davis", 20)
p22 = Player("amanda", 20)

print(p.comparator(p1, p2))
print(p.comparator(p11, p22))
