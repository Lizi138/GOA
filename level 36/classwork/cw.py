# საკლასო 1
def check_lowercase(user_str):
        print(user_str == user_str.lower())

text = input("შეიყვანე წინადადება: ")
check_lowercase(text)

# საკლასო 2 
def iscapitalized(user_str):
    if user_str[0].isupper()  and user_str[1:].islower():
        print(True)
    else:
        print(False)

text2 = input("Enter Text: ")
iscapitalized(text2)


# საკლასო 3
def manual_isdigit(user_str):
    digits = "0123456789"
    valid = True

    for char in user_str:
        if char in digits:
            print("incorrect")
        else:
            valid = False
            print("incorrect")

    print(valid)

manual_isdigit("123")


# საკლასო 4
def split_sentence(user_str):
    print(user_str.split(" "))

text = input("შეიყვანეთ ტექსტი: ")
split_sentence(text)
