# https://www.hackerrank.com/challenges/ctci-comparator-sorting/problem

from functools import cmp_to_key
class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score
    def __repr__(self):
        pass

    def helperPivot(self, listing, start, listLen):
        pivot = listing[start]
        pivotIdx = start
        for i in range(start+1, listLen):
            if listing[i] < pivot:
                pivotIdx += 1
                if i != pivotIdx:
                    listing[i], listing[pivotIdx] = listing[pivotIdx], listing[i]
        if pivot != listing[pivotIdx]:
            listing[start], listing[pivotIdx] = listing[pivotIdx], listing[start]
        return pivotIdx

    def sorting(self, listing, start = 0, end = 0):
        if end == 0:
            end = len(listing)
        if start < end-1:
            pivotIdx = self.helperPivot(listing, start, end)
            self.sorting(listing, start, pivotIdx)
            self.sorting(listing, pivotIdx+1, end)
        return listing


    # algorithm to sort based in comparing two Player objects
    def comparator(self, a, b):
        # sort by num or if they have same score then sort alphabetically
        if a.score == b.score:
            # sort alphabetically
            elements = self.sorting([a.name, b.name])
            if a.name == elements[0]:
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
p1 = Player("davis", 20)
p2 = Player("amanda", 20)

print(p.comparator(p1, p2))
