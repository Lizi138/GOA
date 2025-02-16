# დავალება 1
def hello_world():
    print("Hello, World!")
hello_world()

# დავალება 2
def numbers(num1, num2):
    result = num1 + num2
    print(result)
numbers(5, 3)

# დავალება 3
def multi(number):
    res1 = number * 10
    return res1

res1 = multi(7)
print(res1)

# დავალება 4
def greet(name="Guest"):
    print("Hello,", name, "!")

greet("Alice")
greet()

# დავალება 5
def outer_function():
    print("It's the function 1")
    
    def inner_function():
        print("It's the function 2")
    inner_function()

outer_function()

# დავალება 6
def odd(numbers):
    for number in numbers:
        if number % 2 == 0:
            print(number, "is Even")
        else:
            print(number, "is Odd")

odd([1, 2, 3, 4, 5, 6, 7])

# დავალება 7
def find_maximum(numbers):
    max_number = numbers[0] 
    for number in numbers:
        if number > max_number:
            max_number = number
    return max_number

result = find_maximum([13, 32, 43, 65, 98])
print("The maximum number is:", result)

# დავალება 8
def filter_positive_numbers(numbers):
    positive_numbers = []  
    for number in numbers:
        if number > 0:
            positive_numbers.append(number) 
    return positive_numbers

result = filter_positive_numbers([-1, 30, 4, -2, 40, -50])
print("Pos numbers:", result)

# დავალება 9
def three(start, end):
    total_sum = 0
    for number in range(start, end + 1):
        if number % 3 == 0:
            total_sum += number
    return total_sum

result = three(5, 90)
print("The sum of numbers divisible by 3 is:", result)
