let ClassicPoint=function(_x,_y){
    
    obj={

        x:_x,
        y:_y,

        greet: function(username) {
            console.log("hello "+username+" from x: "+this.x+" ,y:"+this.y);
        }
    
    };
    
    return obj;

}