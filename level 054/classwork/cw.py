# საკლსო 1
info = {
    "name": "LIZI",
    "surname": "MCHEDLIDZE",
    "age": 12,
    "favorite_color": "blue",
    "habitat": "HOUSE",
    "hobbies": ["coding", "drawing"]
}

keys = info.keys()
values = info.values()
items = info.items()

print(keys)
print(values)
print(items)

# საკლასო 2
for i in range(1, 51):
    if i % 3 == 0:
        print(i)