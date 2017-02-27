function setup() { 
  createCanvas(400, 400);
	background(0);
  

 
   
    for(var y=0;y<=180;y=y+40){
      rect(0,y,400,20);
     
    }
  
for(var x=0;x<=400;x=x+40){
    rect(x,200,20,200);
  }
}
