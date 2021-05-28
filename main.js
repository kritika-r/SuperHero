var canvas = new fabric.Canvas("myCanvas");
var block_width= 30;
var block_height= 30;
var player_x= 10;
var player_y= 10;
var player_image="";
var block_image="";
console.log("This is a SuperHero game.When you press on a specific key, you may produce a block which comes as a part of an Avenger. ");
console.log("Different keys produce different blocks.");
console.log("The key controls for it are as follows:");
console.log("Press the Shift+P key to make the size of block bigger");
console.log("Press the Shift+M key to make the size of the block smaller");
console.log("Press the F key to produce IronMan's face.");
console.log("Press the E key to produce Hulk's legs.");
console.log("Press the B key to produce SpiderMan's body.");
console.log("Press the R key to produce Thor's right hand.");
console.log("Press the L key to produce CaptainAmerica's left hand.");


function player_update(){
    fabric.Image.fromURL('player.png', function(Img){
        player_image= Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_image);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image= Img;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey ==true && keyPressed=='80'){
        console.log("Shift key and P pressed together.")
        block_width= block_width + 10;
        block_height= block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;

    }
    if(e.shiftKey==true && keyPressed=='77'){
        console.log("Shift key and M pressed together.")
        block_width= block_width - 10;
        block_height= block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;

    }
    if(keyPressed=='76'){
        new_image('left hand.png');
        console.log("Key L pressed;OUTPUT- captain america left hand.")
    }
    if(keyPressed=='72'){
        new_image('face.png');
        console.log("Key F pressed;OUTPUT- ironman face.")
    }
    if(keyPressed=='82'){
        new_image('thor_right_hand.png');
        console.log("Key R pressed;OUTPUT- thor right hand.")
    }
    if(keyPressed=='69'){
        new_image('legs.png');
        console.log("Key E pressed;OUTPUT- hulk legs.")
    }
    if(keyPressed=='66'){
        new_image('body.png');
        console.log("Key B pressed;OUTPUT- spiderman body.")
    }
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

}
function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_height;
        console.log("block image height = " + block_height);
        console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_image);
        player_update();
    }
}
 
function down()
{
    if(player_y <=300)
    {
        player_y = player_y + block_height;
        console.log("block image height = " + block_height);
        console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_image);
        player_update();
    }
}
 
function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_width;
        console.log("block image width = " + block_width);
        console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_image);
        player_update();
    }
}
 
function right()
{
    if(player_x <=600)
    {
        player_x = player_x + block_width;
        console.log("block image width = " + block_width);
        console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_image);
        player_update();
    }
}
