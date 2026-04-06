x = [1, 2, 3, 4]

for i in range(len(x)):
    if x[i] % 2 == 0:
        x[i] = x[i] * 2
    else:
        x[i] = x[i] + 1

print(x)