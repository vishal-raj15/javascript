var ship;

function setup(){
    createCanvas(800 , 800);
    ship = new ship();
    flower = new flower();
}

function draw(){
    background(51);
    ship.show();
    flower.show();
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        ship.move(1);
    }
    else if(keyCode === LEFT_ARROW){
        ship.move(-1);
    }
}