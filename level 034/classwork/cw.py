# საკლასო 1
def calculator(num1, num2, operator):
    if operator == "+":
        print(num1 + num2)
    elif operator == "-":
        print(num1 - num2)
    elif operator == "*":
        print(num1 * num2)
    elif operator == "/":
        print(num1 / num2)

    print("ოპერაცია შესრულდა")

calculator(10, 5, "+")
calculator(1, 5, "-")
calculator(10, 55, "*")
calculator(2, 5, "/")

# საკლასო 2
def find_minimum(user_list):
    minimum = user_list[0]

    for num in user_list:
        if num < minimum:
            minimum = num

    print(minimum)

find_minimum([10, 20, 5, 40, 30])
find_minimum([1, 2, 3, 4, 5])  
find_minimum([-1, -20, 3, 4])     
find_minimum([100, 200, 300, 10])
find_minimum([-100, 23, 30, 25])

# საკლასო 3
def manual_capitalize(user_str):
    print(user_str[0].upper() + user_str[1:].lower())

user_str = input("შეიყვანე სასურველი ტექსტი: ")
manual_capitalize(user_str)