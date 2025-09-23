from turtle import *
# დავალება 5 BOSS LEVEL
# მეორე მიდგომა
# 1 კვადრატი
penup()
goto(200, 200)
pendown()

forward(200)
for i in range(3):
    left(90)
    forward(200)

# 2 კვადრატი
penup()
goto(-400, 200)
pendown()

for i in range(4):
    left(90)
    forward(200)

# 3 კვარდატტი
penup()
goto(-400, -400)
pendown()

for i in range(4):
    left(90)
    forward(200)

# 4 კვადრატი 
penup()
goto(200, -400)
pendown()

for i in range(4):
    left(90)
    forward(200)

exitonclick()