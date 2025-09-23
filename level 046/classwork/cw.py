# საკლასო 1
tuple1 = (1, 2, 3, 4, 5)
print(min(tuple1))
print(max(tuple1))

print(tuple1.count(0))

# საკლასო 2
def no_duplicates(user_list):
    return list(set(user_list))

print(no_duplicates([1, 2, 3, 4, 5, 3, 2])) 
print(no_duplicates(['Notebook', 'book', 'Notebook', 'pen', 'pencil'])) 
print(no_duplicates([10, 30, 30, 10, 40])) 