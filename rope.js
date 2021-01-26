class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
     
     

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB=this.sling.bodyB.position
            push();
            
           
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                
        }
    }
    
}