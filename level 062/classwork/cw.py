# დავალება 1
sides = lambda side1, side2: side1 * side2
print(sides(4, 2))    
print(sides(2, 9))     
print(sides(14, 2))   
print(sides(0, 200))   
print(sides(7, 23))

# დავალება 2
list1 = [2, 4, 5, 1, 93, 73, 53, 34, 19, 90]
print(list(filter(lambda x: x % 2 == 0, list1)))