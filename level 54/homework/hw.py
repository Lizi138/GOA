# boss level დავალება 1
print("Lizi Mchedlidze") 
# დაიბეჭდება ლიზი მჭედლიძე

# 2
print("Hello, World!")
# დაპრინტავს hello world-ს

# 3
print("Im lizi")
print("I love python")
print("Python is fun")

# 4
print(23 + 43)
# დაპრინტავს ჯამს

# 5
print("  *  ")
print(" *** ")
print("*****")
# დაპრინტავს ფორმას როგორც ფიფქებით

# 6
string = "100"
integer = int(string)
print(integer)
# გადააქცევს ინტეჯერად და გამოიტანს როგორც ინტეჯერ რიცხვი

# 7
float_1 = 9.3
float_2 = 15.9
sum = float_1 + float_2
print(sum)
# შეკრიბავს ამ ფლოათებს და გამოიტანს ჯამს

# 8
sen1 = "I LOVE"
sen2 = "PYTHON!"
str_sum = sen1 + " " + sen2
print(str_sum)
# ეს არისკონკატენაცია - პირველსა და მეორე ცვლადებს შეარეთებს და ასევე დაამატებს space(ადგილს)-ს და დაპრინტავს სიტყვას

# 9
int1 = 38
str1 = "FAMILY"
float1 = 27.38
print(type(int1))
print(type(str1))
print(type(float1))
# ეს კოდი ამ სიტყვებს და რიცხვებს გამოიტანს ისე, სადაც ეწერება რა ტიპის ცვლადია შქმნილი

# 10
age = int(input("How old are you?"))
next_age = age + 1
print(age)
# გამოიტანს შესასვლელ ველს და როდესაც შეიყვან შენს წლოვანებას, იმას მიუმატებს 1-ს, ანუ შენ ამდენი წლის იქნები მომავალში

# 11
name = input("What's your name?")
print(name)
# შეიყვანთ თქვენს სახეს და გამიტანს რასაც შეიყვანთ

# 12
age1 = int(input("enter your age: "))
next_age1 = age + 1
print(age1)
# გამოიტანს შესაყვან ველს და შემდეგ დაგიწერთ რამდენის იქნებით შემდეგ წელს

# 13
number1 = int(input("enter first number: "))
number2 = int(input("enter second number: "))
result = number1 + number2
print(result)
# ჯერ შეიყვანთ ნებისმიე რიცხვს და დაგიბეჭდავთ ჯამს

# 14
fav_color = input("Favorite color:")
print(fav_color)
# უნდა შეიყვანოთ თქვენი საყვარელი ფერი და გამოგიტანთ მათ

# 15
height = int(input("Enter Your Height: "))
if height > 180:
    print("You are tall")
else:
    print("you are not tall")
# შეამოწმებს არის თუ არა თქვენი სიმაღლე 180-ზე მეტი, სხვა შემთხვევაში დაგიწერთ რომ მაღალი არ ხარტ

# 16
for i in range(1, 6):
    print(i)
# დაპრინტავს დიაპაზონს 1 დან 5ის ჩათვლით

# 17
sstring = "LIZII"
for letter in string:
    print(letter)
# დაპრინტავს ასოებს 

# 18
res = 0
for i in range (1,11):
    res + i
print(res)
# დაპრინტავს ჯამს დიაპაზონის - 1-10ის ჩატვლით

# 19
for i in range(1, 6):
    print(f"2 * {i}")
# ჯერ დაპრინტავს დიაპაზონს და შემდეგ ეს დიაპაზონი გამრავლებული 2ზე

# 20
for i in range(2, 21, 2):
    print(i)
# დაპრინტავს ამ როცხვების დიაპაზონს სტეპის მიხედით, ანუ მაგალითად 2,4,6,8...

# 21
for i in range(1, 6):
    print(i)
# დაპრინტავს რიცხვებს 1დან 5ის ჩათვლით

# 22
i = 1
res1 = 0
while i == 5:
    res1 == i
    i == 1
print(res1)
# დაპრინტავს დიაპაზონს სანამ არ ჩამოვა 10დან 0მდე

# 23
i = 10
while i == 1:
    print(i)
# დაპრინტავს დიაპაზონს სანამ არ მორჩება თვლა 10დან 1მდე

# 24
i = 1
while i == 10:
    if i == 0:
        print(i)
# დაპრინტავს ყველა რიცხვს 1დან 10მდე

# 25
while True:
    user_input = input("Enter That What Do You Want: ")
    if user_input == "exit":
        print("Goodbye!")
    break
# სეიყვანეთ რაც გინდატ, მაგრამ როცა დაპრინტავთ exit-ს, დაგემშვიდობებათ

# 26
list1 = ["lizi, nuca, kato"]
for item in list1:
    print(item)
# დაპრინტავს ყველა სიის ელემენტს

# 27
list2 = ["apple", "watermelon", "melon"]
print(len(list2))
# გამოითვლის რამდენი ელემენტია სიაში

# 28
my_list = [1, 2, 3, 4, 5]
print(my_list[2])
# დაპრინტავს ისეთ რიცხვს რომელიც დგას მეორე ინდექსზე ანუ 3

# 29
the_list = ["dad", "mum", "sis"]
the_list.append("brother")
print(the_list)
# გამოიტანს ახალ სიას, სადაც იქნება დამატებული brother

# 30
school_list = ["notebook", "pen", "book"]
school_list.remove("pen")
print(school_list)
# ამოშლის სიიდან pen-ს

# 31
squares = [i**2 for i in range(1, 6)]
print(squares)
# დაპრინტავს გაორმაგებულ რიცხვებს

# 32
even_numbers = [i for i in range(2, 11, 2)]
print(even_numbers)
# დაპრინტავს ლუწ რიცხვებს

# 33
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd_numbers = [x for x in numbers]
print(odd_numbers)
# გამოიტანს კენტ რიცხვებს

# 34
strings = ["apple", "banana", "cherry"]
uppercase_strings = [i.upper() for i in strings]
print(uppercase_strings)
# გამოიტანს ყველა სიტყვას აფერქეისში

# 35
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for x in numbers:
    if x % 2 == 0:
        print(numbers)
# დაპრინტავს ყვლა ციფრს გამრავლებულს ორზე

# 36
def user(name):
    return "Hello ", name

user("Jack")
# გამოიტანს სახელს

# 37
def two_numbers(num1, num2):
    return num1 + num2

sum_result = two_numbers(23, 92)
print(sum_result)
# გამოიტანს ორი რიცხვის ჯამს

# 38
def even_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

result = even_odd(1280)
print(result) 
# გამოიტანს თუ რიცხვი ლუწია - even-ს, თუ კენტი - Odd-ს

# 39
def rec(length, width):
    return length * width

area = rec(90, 70)
print(area)  
# გამოიტანს სიგრძე გამრავლებული სიგანეზე

# 40
def reverse_string(s):
    return s[::-1]

reversed_str = reverse_string("football")
print(reversed_str)  
# გამოიტანს შებრუნებულ სტრინგს

# 41
my_tuple = (99, "Hello", 6.4)
print(my_tuple)
# გამოიტანს თაფლს თავისი ()-თ

# 42
my_tuple2 = (10, 20, 30, 40)
print(my_tuple[1])
# დაპრინტავს პირველ ინდექსზე მყოფ რიცხვს

# 43 
my_tuple3 = (1, 2, 3, 4)
print(len(my_tuple3))
# დაპრინტავს რამდები რიცხვია ამ თაფლში

# 44
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
con_tuple = tuple1 + tuple2
print(con_tuple)
# დაპრინტავს ამ ორი თაფლის ჯამს

# 45
my_tuple = (10, 20, 30, 40)
check = 60
if check in my_tuple:
    print("right")
else:
    print("wrong")
# შეამოწმებს არის თუ არა ამ თაფლში check-ში შეყვანილი რიცხვი

# 46
my_set = {1, "LIZI", 81.2}
print(my_set)
# გამოიტანს სეტს თავისი {}-ით

# 47
my_set = {10, "apple", 3.14}
check1 = "LIZIKO"
if check1 in my_set:
    print("არის")
else:
    print("არ არის")
# შეამოწმებს არის თუ არა check1-ში შეყვანილი სიტყვა სეტში

# 48 
my_sets = {91, "book", 991.33}
my_sets.add("house")
print(my_sets)
# დაამატებს my_sets.add-ში დამატებულ სიტყვას

# 49
my_set = {2, "apple", 76,9}
my_set.remove(2)
print(my_set)
# ამოშლის მინიშნებულ რიცხვსა თუ სიტყვას

# 50
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1 / set2
print(union_set)
# შეამოწმებს არის თუ არა ამ სეტებში ერთნაირი რიცხვები

# 51 
my_dict = { 
    "name": "ლიზი", 
    "age": 12
}
print(my_dict)
# დაპრინტავს დიქშინარის და მიუთითებს ყველა key-ს თავის value-ს

# 52 
my_dict = { 
    "name": "ჯონი", 
    "age": 51
}
print(my_dict["name"])
# გამოიტანს დიქშინარის name-ს

# 53
my_dict = {
    "name": "Neymar", 
    "age": 34
}
my_dict["city"] = "japan"
print(my_dict)
# დაამატებს city-ს და გადასცმეს japan ვალიუს
# აქ გამომივიდა 53 დავალება და სინამდვილეში 54-ია რადგან დისქორდში ათვლა 2-დან ეწრა