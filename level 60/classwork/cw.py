try:
    num1 = int(input("შეიყვანე პირველი რიცხვიr: "))
    num2 = int(input("შეიყვანე პირველი რიცხვი: "))
    res = num1 / num2
except ValueError:
    print("არასწორია! შეიყვანე ციფრები ან რიცხვები")

except ZeroDivisionError:
    print("რიცხვი ნულზე ვერ მრავლდება")

except:
    print("სწორია!")

# 2
try:
    print("Hello world!!")
except:
    print("gamarjoba naxvamdis")