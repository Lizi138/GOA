# Upper

# 2) გადაიყვანე წინადადება uppercase ფორმატში და დაბეჭდე ამ სახით
word = "hello world!"
print(word.upper())

# 3) მომხმარებელს შემოატანინე სახელი და დაუბეჭდე uppercase ფორმატში
name = input("შეიყვანეთ თქვენი სახელი: ")
print(name.upper())

# 4) შექმენი ფუნქცია, რომელსაც გადაეცემა სთრინგების სია. 
def print_uppercase(list):
    for string in list:
        print(list.upper())

# გამოყენება
strings = ["გამარჯობა", "hello", "this is code"]
print_uppercase(strings)

# Lower

# 5) გადაიყვანე წინადადება lowercase ფორმატში და დაბეჭდე ამ სახით
lower1 = "Bye BYe"
print(lower1.lower())

# 6) მომხმარებელს შემოატანინე მეილი და დაუბეჭდე lowercase ფორმატში
email = input("შეიყვანეთ თქვენი მეილი: ")
print(email.lower())

# 7) შექმენი ფუნქცია, რომელიც მიიღებს სთრინგს და გადაიყვანს მას lowercase ფორმატში, დაბეჭდავს ამ სახით
def print_lowercase(text):
    print(text.lower())

# გამოყენება
text = "Python"
print_lowercase(text)

# Capitalize

# 8) გადაიყვანე მომხმარებლის შემოტანილი სიტყვა capitalize ფორმატში
word = input("შეიყვანეთ სიტყვა: ")
print(word.capitalize())

# 9) შექმენი ფუნქცია, რომელიც მიიღებს სთრინგს და გადაიყვანს capitalize ფორმატში
def print_capitalize(text):
    print(text.capitalize())

# გამოყენება
word2 = "პითონი"
print_capitalize(word2)
