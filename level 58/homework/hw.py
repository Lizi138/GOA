# 1
square = [x**2 for x in range(1, 11)]
print(square)

# 2
evens = [x for x in range(1, 21) if x % 2 == 0]
print(evens)

# 3
cars = ["ford", "audi", "bmw"]
uppwords = [word.upper() for word in cars]
print(uppwords)

# 4
words = ['apple', 'watermelon', 'youghurt']
len = [len(word) for word in words]
print(len)

# 5
nums = [1, 2, 3, 4, 5]
sum = [num + 5 for num in nums]
print(sum)

# 6
fruits = ["chicken", "melon", "watermelon"]
first_letters = [string[0] for string in fruits]
print(first_letters)

# 7
nums2 = [6, 3, 39, 23, 57]
sum2 = [num * 2 for num in nums2]
print(sum2)
