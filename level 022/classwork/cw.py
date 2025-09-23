# while loop
correct_num = 10
user_number = int(input("Enter number: "))
while user_number != correct_num:
    print("incorrect number")
    user_number = int(input("Enter number: "))
print("correct guess")