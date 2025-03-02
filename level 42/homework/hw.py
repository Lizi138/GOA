# 1
def sum_of_even_numbers(numbers):
    even_sum = sum(num for num in numbers if num % 2 == 0)
    return even_sum

numbers = [1, 2, 3, 4, 5, 6]
print(sum_of_even_numbers(numbers))

# 2
def square_of_sum_of_odd_numbers(numbers):
    odd_sum = sum(num for num in numbers if num % 2 != 0)
    return odd_sum ** 2

numbers = [1, 2, 3, 4, 5, 6]
print(square_of_sum_of_odd_numbers(numbers))

# 3
def sum_product(numbers):
    even_arr = [num for num in numbers if num % 2 == 0]
    odd_arr = [num for num in numbers if num % 2 != 0]
    
    even_sum = sum(even_arr)
    odd_sum = sum(odd_arr)
    
    return even_sum * odd_sum

numbers = [1, 2, 3, 4, 5, 6]
print(sum_product(numbers))

# code wars
# Counting sheeps...
# def count_sheeps(sheep):
#     [True,  True,  True,  False,
#   True,  True,  True,  True ,
#   True,  False, True,  False,
#   True,  False, False, True ,
#   True,  True,  True,  True ,
#   False, False, True,  True]
#     return sheep.count(True)

# Remove string spaces
# def no_space(x):
    # return x.replace(" ", "")

# returning strings
# def greet(name):     
# return f"Hello, {name} how are you doing today?"