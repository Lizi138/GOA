# საკლასო 1
def remove_one_element(user_list, user_index):
    user_list.pop(user_index)
    print(user_list)

remove_one_element([10, 22, 12], 1)
remove_one_element([11, 23, 83, 43, 33], 2)

# საკლასო 2
def square(user_num):
    return user_num * user_num

result = square(7)
print(result * 2)

# საკლასო 3
def rectangle_info(side1, side2):
    perimeter = (side1 + side2) * 2
    area = side1 * side2
    return perimeter, area

perimeter, area = rectangle_info(4, 6) 

print("Perimeter is", perimeter)
print("Area is", area)
