canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.
rover_width = 100;
rover_height = 90;




Rover_image = "rover.png";

mars_images_array = ["mars_1.jpeg", "mars_2.jpg", "mars_3.jpg", "mars_4.jpg"];

var random_number = Math.floor(Math.random()*4)

Background_image = mars_images_array[random_number];
console.log("Background image = "+ Background_image)
rover_x = 10;
rover_y = 10;

//Create "add()" function
function add(){


	                                     //defining a variable with a new image
                                         background_image = new Image();
	                                     // setting a function, onloading this variable
                                         background_image.onload = uploadBackground;
	                                     // load image
                                         background_image.src = Background_image;
                                         //defining a variable with a new image
                                         rover_image = new Image();
	                                     // setting a function, onloading this variable
                                         rover_image.onload = uploadRover;
	                                     // load image
                                         rover_image.src = Rover_image;
}                                         
//Create "uploadBackground()" function.
function uploadBackground(){
    ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}                              
                                         //Draw image of background

//Create "uploadrover()" function.
    function uploadRover(){
        ctx.drawImage(rover_image,rover_x,rover_y,rover_width,rover_height);
    }
                                        //Draw image of rover


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
    if(keyPressed == "38"){
        up();
        console.log("up");           
    }

     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
     if(keyPressed == "40"){
        down();
        console.log("down");           
    }

    if(keyPressed == "37"){
        left();
        console.log("left");           
    }


    if(keyPressed == "39"){
        right();
        console.log("right");           
    }

    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){
if(rover_y>=0){
    rover_y = rover_y - 10;
    console.log("When up arrow is pressed, x = "+ rover_x + " y = "+ rover_y);
    uploadBackground();
    uploadRover();
}

}
function down(){
	if(rover_y<=500){
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = "+ rover_x + " y = "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
	if(rover_x<=700){
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = "+ rover_x + " y = "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
	if(rover_x>=0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = "+ rover_x + " y = "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}



