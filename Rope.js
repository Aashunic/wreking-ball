class Rope{
constuctor( bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:1.3,
length:250


}
this.bodyA=bodyA
this.pointB=pointB;
this.rope=Constraint.create(options);
World.add(world,this.rope);

}
attach(body){
this.rope.bodyA=bodyA;


}
fly(){
this.rope.bodyA=null;

}
display(){
//if(this.rope.bodyA){
 var pointA=this.pointA;
 var pointB=this.pointB;
 push();
 stroke(48,22,8);
 strokeWeight(3);
 line(pointB.x,pointB.y,pointA.x,pointA.y);
pop();














}






}