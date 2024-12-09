from turtle import *

shape("turtle")
color("brown")
speed(10)
width(5)
begin_fill()
#draw first leg
forward(40)
left(85)
forward(80)
right(85)
forward(10)
#end first leg
#draw hand
left(40)
forward(10)
left(50)
forward(50)
left(100)
#end hand
penup()
goto(45, 80)
pendown()
right(10)
forward(40)
left(85)
forward(75)
#full end of first leg
penup()
goto(40, 100)
right(180)
pendown()
forward(20)
#end of first hand (not full)
penup()
goto(60, 140)
pendown()
left(90)
forward(30)
left(20)
forward(10)
right(20)
forward(40)
#end of pair body
penup()
goto(10, 79)
pendown()
forward(45)
left(90)
forward(80)
left(90)
forward(50)
#end of pair legs
penup()
goto(-40, 90)
pendown()
left(90)
forward(50)





exitonclick()