# int-ის 10 მაგალითი
# 5
# -3
# 10
# -100
# 0
# 77
# 23
# 199
# -58
# 42
# str-ის 10 მაგალითი
# "hello"
# "world"
# "Python"
# "123"
# "abc"
# "True"
# "123.45"
# "test"
# "data"
# "programming"
# float-ის 10 მაგალითი
# 3.14
# -1.5
# 0.0
# 7.89
# -3.14159
# 0.33
# 1.618
# 99.99
# 2.71828
# -0.01
# მონაცემთა ტიპის შეცვლა გვჭირდება იმ დროს როდესაც მაგალითად str-ს ვუმატებთ nt-ს მაგრამ ეს არ არსებობს ამიტომ int-ს ვაქცევთ str-ად
age = int(input("შეიყვანე ასაკი: "))
print("10 წელში თქვენ იქნებით + str(age + 10) წლის.")

num1 = int(input("შეიყვანე რიცხვი: "))
num2 = int(input("შეიყვანე მეორე რიცხვი: "))
print(num1 + num2)
print(num1 - num2)
print(num1 * num2)
print(num1 / num2)

age = int(input("შეიყვანე ასაკი: "))
print("10 წლის წინ იყავი (age - 10)")

# მომხმარებლის ასაკის შეყვანა
child_age = int(input("შეიყვანე ასაკი: "))

# მშობლის ასაკის შეყვანა
parent_age = int(input("შეიყვანე ასაკი: "))

# შედეგის დაბეჭდვა
print("მშობელი child_age-parent_age წლით დიდია შვილზე.")


