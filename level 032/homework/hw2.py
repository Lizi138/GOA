from turtle import *
speed(10)
# დავალება 5 BOSS LEVEL
# პირველი მიდგომა
def draw_square(x, y):
    penup()
    goto(x, y)
    pendown()

    for i in range(4):
        left(90)
        forward(200)

right(90)
draw_square(200, 200)
draw_square(-400, 200)
draw_square(-400, -400)
draw_square(200, -400)
exitonclick()