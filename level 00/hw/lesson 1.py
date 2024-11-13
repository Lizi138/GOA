from turtle import *

#we want to paint a house        

#step 1: draw a square
shape("turtle")
speed(15)
width(7)
color("purple")
begin_fill()
forward(200)
left(90)
 
forward(200)
left(90)
     
forward(200)     
left(90)
     
forward(200)   
left(90) 
end_fill()
#end of square

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)   
forward(120)      #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#step 2: draw a first window

penup()
goto(50, 100)
pendown()
right(60)
forward(30)
right(90)
forward(30)

right(90)
forward(30)
right(90)
forward(30)

#step 3: draw a second window

penup()
goto(150, 127)
pendown()
forward(28)
left(90)

forward(28)
left(90)
forward(28)
left(90)
forward(28)
#end of windows





exitonclick() 