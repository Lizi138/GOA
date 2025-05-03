# დავალება 1
try:
    num1 = int(input("შეიყვანე ნებისმიერი პირველი რიცხვი: "))
    num2 = int(input("შეიყვანე მეორე რიცხვი: "))
    res = num1 / num2
except ZeroDivisionError:
    print("არ მარვლდება ნულზე! ახლიდან შეიყვანე")
except:
    print("შენი მაგალითი წარმატებით შესრულდა!!!!")

# დავალება 2
user_input = input("Enter a number: ")
try:
    number = int(user_input)
    print("სწორია!")
except ValueError:
    print("არასწორია!")

# დავალება 3
list1 = ["banaan", "apple", "watermelon", "melon", "lemon"]
user_input = int(input("შეიყვანე ნებისმიერი ინდექსის რიცხი: "))
try:
    index = int(user_input)
    item_from_list1 = list1.index
except IndexError:
    print("არასწორი ინდექსი")

# დავალება 4
input1 = input("Enter the first number: ")
input2 = input("Enter the second number: ")

try:
    num1 = int(input1)
    num2 = int(input2)

    result1 = num1 + num2
    print(result1)

except ValueError:
    print("არასწორია, გთხოვ შეიყვანე სწორი რიცხვები, ასოები არა")

