# საკლასო 1
names = ["lizi", "deme", "nika", "gio", "sandro", "nuca", "data", "davit", "viqtoria", "aleqsandre"]
renewed = [name for name in names if len(name) < 6 or names[0] == "A"]

# საკლასო 2
try:
    num1 = int(input("Enter any number: "))
    print(num1)
except ValueError:
    print("value error")