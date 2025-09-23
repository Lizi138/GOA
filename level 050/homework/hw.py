# დავალება1 1
student = {
    "name": "John",
    "score": "100/90"
}

keys = student.keys()
values = student.values()

print(keys)
print(values)

# დავალება 2
country = {
    "Georgia": "Tbilisi",
    "Japan": "Tokyo",
    "Brazil": "Brasilia",
    "Ukraine": "Kyev",
    "USA": "Washington"
}

keys = country.keys()
values = country.values()

print(keys)
print(values)

# დავალება 3
Cars = {
    "BMW": "M5 Sedan",
    "Mercedes": "E-class",
    "Toyota": "Avalon",
    "Audi": "A1",
    "Ford": "F-150"
}

keys = Cars.keys()
values = Cars.values()
favorite_car = Cars["BMW"]

print(keys)
print(values)
print(favorite_car)

# დავალება 4
# გადავხედე

# დავალება 5
book = {
    "name": "მე, ბებია, ილიკო, და ილარიონი",
    "The author": "Nodar Dumbadze",
    "year": 1970
}
book["year"] = 1960

keys = book.keys()
values = book.values()
items = book.items()

print(keys)
print(values)
print(items)

# დავალება 6
students_points = {
    "Andrew": 85,
    "Bob": 92,
    "Charlie": 78,
    "David": 88,
    "John": 95
}

total_points = sum(students_points.values())
students_num = len(students_points)
all_points = total_points / students_num

print(total_points)
print(students_num)
print(all_points)

# დავალება 7
user_info = {}

user_info["Name"] = input("Enter name: ")
user_info["Surname"] = input("Enter surname: ")
user_info["Age"] = input("Enterr age: ")
user_info["Height"] = input("Enter height: ")
user_info["Career"] = input("Enter your career: ")

print(user_info)