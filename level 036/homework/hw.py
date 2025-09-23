# დავალება 1 (1)
sen = "Python is my faborite programming language"
pos = sen.find("Python")
print(pos)
# 1 (2)
def find_substring(main_str, subs):
    position = main_str.find(subs)
    if position != -1:
        print("Substring", substring, "founded", position)
    else:
        print("Substring", substring, "not found.")

main_string = "I love Python."
substring = input("Enter the substring: ")
find_substring(main_string, substring)
# 1 (3)
def find_character_index(string, chara):
    index = string.find(chara)
    if index != -1:
        return index
    else:
        return "Character", char, "not found in the string."

string = "Hello, world!"
char = "o"
print(find_character_index(string, char)) 


# დავალებ 2 (1)
def count(paragraph):
    paragraph_lower = paragraph.lower()
    count = paragraph_lower.split().count("the")
    return count

paragraph = "I am Happy, You are not happy, You are the virgin"
print(count(paragraph))  
# (2)
def count_character_occurrences(string, char):
    count = string.count(char)
    return count

string = "hello, how are you today?"
char = input("Enter a character to count its occurrences: ")
print("The character", char, "appears", count(string), "times in the string.")

# (3)
def count_word(text, word):
    text_lower = text.lower()
    word_lower = word.lower()
    word_count = text_lower.split().count(word_lower)
    return word_count

text = "Hello there, ima here"
word = input("Enter a word: ")
print("The word", word, "appears", count_word(text, word), "times in the text.")


# დავალება 3
def find_hello(string):
    index = string.find("hello")
    if index != -1:
        print("The word 'hello' first appears at index", index)
    else:
        print("The word 'hello' was not found.")

input_string = "Hello, how are you? hello again!"
find_hello(input_string)

# 3 (2)
def find_character(string, char):
    index = string.find(char)
    if index != -1:
        return index
    else:
        return "The character", char, "was not found in the string"

input_string = "Python programming "
char = input("Enter a character for find  index: ")
print(find_character(input_string, char))

# დავალება 4 (1)
def check(string):
    if string.islower():
        print("All  are lowercase.")
    else:
        print("Not all  are lowercase.")

input_string = "hello world"
check(input_string)

# (2)
def lowercase(string):
    return string.islower()

input_string = "python"
print(lowercase(input_string)) 

# (3)
def verify_lowercase():
    user_input = input("Enter a string: ")
    if user_input.islower():
        print("The string contains ")
    else:
        print("The string doesnt contain ")

# დავალება 5 (1)
def uppercase(string):
    if string.isupper():
        print("All are uppercase.")
    else:
        print("Not all are uppercase.")

input_string = input("Enter string: ")
uppercase(input_string)
# (2)
def compl_uppercase(string):
    return string.isupper()

input_string = "HELLO"
print(compl_uppercase(input_string)) 
# (3)
def verify_uppercase():
    user_input = input("Write string: ")
    if user_input.isupper():
        print("The string is uppercase.")
    else:
        print("The string is not uppercase.")
