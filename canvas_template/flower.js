function flower()
{
    this.x = width/2;
    this.y = 50;
    this.show = function(){
        fill(255 , 0,200);
        ellipse(this.x , this.y ,60,60);
    }

    }
