# elif - არის else if და არის keyword, რომელიც გამოიყენება სხვადასხვა და რამდენიმე პირობის შესამოწმებლად
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
num3 = float(input("Enter the third number: "))

if num1 >= num2 and num1 >= num3:
    largest = num1
elif num2 >= num1 and num2 >= num3:
    largest = num2
else:
    largest = num3
print("The largest number is:", largest)

# დავალება 2
correct_password = "Goa best"
incorrect_attempts = 0

while True:
    entered_password = input("Enter the password: ")
    if entered_password == correct_password:
        print("Password correct!")
    else:
        incorrect_attempts += 1
        print("Incorrect password. Attempt", incorrect_attempts)

# დავალება 3
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
operator = input("Enter the operator (+, -, *, /): ")

if operator == "+":
    End = num1 + num2
elif operator == "-":
    End = num1 - num2
elif operator == "*":
    End = num1 * num2
elif operator == "/":
    if num2 != 0:
        End = num1 / num2
    else:
        End = "Error: Division by zero"
else:
    End = "Incorrect operator"

print("The result is:", End)

