# Codewars
# How good are you really?
# def better_than_average(class_points, your_points):
#     mean = sum(class_points) / len(class_points)
    
#     if your_points > mean: return True
#     return False

# Count of positives / sum of negatives
# def count_positives_sum_negatives(arr):
#     if arr == [] or arr == None: return []
    
#     count_of_pos = 0
#     sum_of_neg = 0
    
#     for i in arr:
#         if i > 0: count_of_pos += 1
#         else: sum_of_neg += i
    
#     return [count_of_pos, sum_of_neg]

# DNA to RNA Conversion
# def dna_to_rna(dna):
#     return dna.replace("T", "U")

# Will you make it?
# def zero_fuel(distance_to_pump, mpg, fuel_left):
    # if mpg * fuel_left >= distance_to_pump: return True
    # return False

# Calculate BMI
# def bmi(weight, height):
#     res = weight / height ** 2
    
#     if res <= 18.5: return "Underweight"
#     elif res <= 25.0: return "Normal"
#     elif res <= 30.0: return "Overweight"
#     return "Obese"

# Find Maximum and Minimum Values of a List
# def minimum(arr):
#     return min(arr)

# def maximum(arr):
#     return max(arr)

# Fake Binary
# def fake_bin(x):
#     num = ""
    
#     for i in x:
#         new = int(i)
        
#         if new < 5:
#             num += "0"
#         else:
#             num += "1"
            
#     return num

# You only need one - begginer
# def check(seq, elem):
#     return elem in seq

# Convert a string to an array
# def string_to_array(s):
#     return s.split(" ")

# Count by X
# def count_by(x, n):
#     res = []
    
#     for i in range(1, n+1):
#         res.append(x*i)
    
#     return res

# Reversed sequence
# def reverse_seq(n):
#     res = []
    
#     for i in range(n, 0, -1):
#         res.append(i)
    
#     return res

# Rock, papers, scissors
# def rps(p1, p2):
# if p1 == p2: return "Draw!"
# if p1 == "scissors":
#     if p2 == "rock": return "Player 2 won!"
#     else: return "Player 1 won!"
# elif p1 == "rock":
#     if p2 == "scissors": return "Player 1 won!"
#     else: return "Player 2 won!"
# else:
#     if p2 == "scissors": return "Player 2 won!"
#     else: return "Player 1 won!"


# If you can't sleep, just count sheep!!def count_sheep(n):
#     res = ""
#     for i in range(1,n+1):
#         res += f"{i} sheep..."
#     return res

# is n divisible by x and y?
# def is_divisible(n,x,y):
#     return n % x == 0 and n % y == 0

# Grasshopper - Grade book
# def get_grade(s1, s2, s3):
#     number = (s1+s2+s3) / 3
    
#     if number >= 90: return 'A'
#     elif number >= 80: return 'B'
#     elif number >= 70: return 'C'
#     elif number >= 60: return 'D'
#     return 'F'

# Grasshopper - Personalized Message
# def greet(name, owner):
#     if name == owner:
#         return "Hello boss"
#     else: 
#         return "Hello guest"

# Transportation on vacation
# def rental_car_cost(d):
#     daily_rate = 40
#     total = d * daily_rate

#     if d >= 7:
#         total == 50
#     elif d >= 3:
#         total == 20

#     return total

# Quarter of the year
# def quarter_of(month):
#     return (month - 1) / 3 + 1

# Remove exclamation marks
# def remove_exclamation_marks(s):
#     return s.replace('!', ' ')

# Total amount of points 
# def points(games):
#     total = 0
#     for game in games:
#         if x > y:
#             total += 3
#         elif x == y:
#             total += 1
#     return total

# jenny's secret message 
# def greet(name):
#     if name == "Johnny":
#         return "Hello, my love!"
#     return "Hello, {name}!".format(name=name)

# Area or Perimeter
# def area_or_perimeter(l , w):
#     if l == w:
#         return l * w  
#     else:
#         return 2 * (l+w)