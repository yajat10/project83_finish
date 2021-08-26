canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouse_event=""
var last_X,last_Y
var width_of_line = 2;
var color="red"
color1 = "black";
var width=5
var last_position_of_x, last_position_of_y;
canvas.addEventListener("mousedown",my_Mousedown)
function my_Mousedown(e) {
    mouse_event="1"
}
canvas.addEventListener("mouseup",my_Mouseup)
function my_Mouseup(e) {
    mouse_event="2"
}
canvas.addEventListener("mouseleave",my_Mouseleave)
function my_Mouseleave(e) {
    mouse_event="3"
}
canvas.addEventListener("mousemove",my_Mousemove)
function my_Mousemove(e) {
    current_X=e.clientX -canvas.offsetLeft
    current_Y=e.clientY - canvas.offsetTop
if (mouse_event=="1") {
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width;
    console.log("last_position of X and Y");
    console.log("X="+last_X+"Y="+last_Y);
    ctx.moveTo(last_X,last_Y)
    console.log("current_position of X and Y");
    console.log("X="+current_X+"Y="+current_Y);
      ctx.lineTo(current_X,current_Y)
      ctx.stroke()
}
last_Y=current_Y;
last_X=current_X;
}
var new_width= width-70;
var new_height=screen.height-300;
if (width<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").width=new_height;
    document.body.style.overflow="hidden"
}

   canvas.addEventListener("touchstart", my_touchstart);
   
   function my_touchstart(e)
   {
       
       console.log(e);
       console.log("Touchstart has started");
       color = document.getElementById("color1").value;
       width_of_line = document.getElementById("width_of_line").value;
   last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
   last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
   
   }

   canvas.addEventListener("touchmove", my_touchmove);
   function my_touchmove(e)
   {

        current_position_of_touch_X = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_Y = e.touches[0].clientY - canvas.offsetTop;

   
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = width_of_line;

       console.log("Last position of x and y coordinates = ");
       console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
       ctx.moveTo(last_position_of_x, last_position_of_y);

       console.log("Current position of x and y coordinates = ");
       console.log("x  = " + current_position_of_touch_X + "y = " + current_position_of_touch_Y);
       ctx.lineTo(current_position_of_touch_X, current_position_of_touch_Y);
       ctx.stroke();
       

       last_position_of_x = current_position_of_touch_X; 
       last_position_of_y = current_position_of_touch_Y;
   }
