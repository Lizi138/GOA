num1 = int(input("შემოიტანე რიცხვი: "))
if num1 > 0:
    print("Bigger than 0")
if num1 == 0:
    print("0")
else:
    print("Smaller than 0")

# საკლასო 2
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

if num1 > num2:
    for i in range(num2, num1 + 1):
        print(i)

elif num2 > num1:
    for i in range(num1, num2 + 1):
        print(i)

else:
    print("numbers are equal")

# საკლასო 3
score = int(input("Enter the score (0-100): "))

if score >= 90 and score <= 100:
    grade = "A"
elif score >= 80 and score <= 89:
    grade = "B"
elif score >= 70 and score <= 79:
    grade = "C"
elif score >= 60 and score <= 69:
    grade = "D"
elif score < 60 and score >= 0:
    grade = "F"
else:
    grade = "Please enter a value between 0 and 100."
print("The grade is: score")
