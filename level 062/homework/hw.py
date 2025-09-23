# 1
words = ['abc', 'bac', 'cab']
upper_words = map(str.upper, words)
print(upper_words)

# 2
numbers = [1, 2, 3, 4, 5]
square = map(lambda x: x ** 2, numbers)
print(square)  

# 3
nums = [10, 20, 30]
sum = map(lambda x: x + 5, nums)
print(sum)

# 5
words1 = ['dog', 'cat', 'girrafe']
first = list(map(lambda x: x[0], words))
print(first)  

# 6
numbers1 = [13, 21, 35, 42, 563, 612, 74, 9]
odds = list(filter(lambda x: x % 2 != 0, numbers))
print(odds)  

# 7
words = ['a', 'b', 'k', 'p', 'f']
long_words = list(filter(lambda x: len(x) > 5, words))
print(long_words)  

# 8
nums1 = [-5, 3, -1, 7, -10, 0, -2]
negatives = filter(lambda x: x >= 0, nums)
print(negatives) 

# 9
names = ['Ali', 'Bob', 'Ani', 'Giorgi', 'Andria', 'Beso']
a_names = list(filter(lambda name: name[0] == "A", names))
print(a_names)  

# 9
nums2 = [3, 5, 9, 10, 12, 14, 15]
divided = list(filter(lambda x: x % 3 == 0, nums))
print(divided) 