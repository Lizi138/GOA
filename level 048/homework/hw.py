# Code wars (საკლასო)
# Begginer Series #2 Clock
# def past(h, m, s):
# new_h = 3600 * h
# new_m = 60 * m
# res = (new_h + new_m + s) * 1000
# return res

# Are You Playing Banjo?
# def are_you_playing_banjo(name):
#     if name[0] == "R" or name[0] == "r":
#         return name + " plays banjo"
#     return name + " does not play banjo"

# Simple multiplication 
# def simple_multiplication(number) :
# if number%2 == 0:
# return number * 8
# return number * 9

# Abbreviate a Two Word Name
# def abbrev_name(name):
# return name[0].upper() + "." + name.split(" ")[1][0].upper()

# A Needle in the Haystack
# def find_needle(haystack):
# res = haystack.index("needle")
# return "found the needle at position " + str(res)

# Invert values
# def invert(lst):
# res = []

# for i in lst:
# res.append(i*-1)

# return res

# Calculate average
# def find_average(numbers):
# if len(numbers) == 0: return 0
# return sum(numbers) / len(numbers)\

# Sentence Smash
# def smash(words):
# return " ".join(words)

# Beginner - Reduce but Grow
# def grow(arr):
# prod = 1
# for i in arr:
# prod = prod * i
#     return prod

# Is he gonna survive?
# def hero(bullets, dragons):
# return bullets >= 2 * dragons


# Code Wars (საშინაო)
# How good are you really?
# def better_than_average(class_points, your_points):
#     total_points = sum(class_points) + your_points
#     average = total_points / (len(class_points) + 1)
#     return your_points > average

# Count of positives / sum of negatives
# def count_positives_sum_negatives(arr):
#     if not arr: 
#         return []
    
# positives_cnt = 0
# negatives_sum = 0
    
# for num in arr:
#         if num > 0:
#             positives_cnt += 1
#         elif num < 0:
#             negatives_sum += num
# return [positives_cnt, negatives_sum]

# DNA to RNA Conversion
# def dna_to_rna(dna):
#     return dna.replace('T', 'U')
# dna = "GCAT"
# rna = dna_to_rna(dna)
# print(rna)

# Will you make it?
# def zero_fuel(distance_to_pump, mpg, fuel_left):
#     max_distance = mpg * fuel_left

#     return max_distance >= distance_to_pump

# Calculate BMI
# def bmi(weight, height):
#     bmi_value = weight / (height * 2)
#     if bmi_value <= 18.5:
#         return "Underweight"
#     elif bmi_value <= 25.0:
#         return "Normal"
#     elif bmi_value <= 30.0:
#         return "Overweight"
#     else:
#         return "Obese"  (ცოტა ვერ მივხვდი, ერორი ამომიგდო)