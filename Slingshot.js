class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        //this.sling1 = loadImage('sprites/sling1.png');
        //this.sling2 = loadImage('sprites/sling2.png');
       // this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body1){

this.sling.bodyA = body1

    }
        
    display(){
        

if(this.sling.bodyA)
{
    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
}

    }
    
}