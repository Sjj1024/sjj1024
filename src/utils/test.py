import copy

a = [1, 2, 3]
b = [4, 5, a]

c = copy.copy(b)
c[1] = 7
c[2].append(6)

print(b)


d = copy.deepcopy(b)
d[1] = 8
d[2].append(9)

print(b)
