function ship()
{
    this.x = width/2;
    this.show = function(){
        fill(255);
        rect(this.x , height-60 , 20 ,60);
    }

    this.move = function(dir){
       this.x += dir*5;

    }
}