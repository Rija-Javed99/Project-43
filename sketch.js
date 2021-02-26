var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    //To use angle in Degrees
    
}

function draw(){
    background(0);

    //Translation and rotation 


    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
  

    //drawing seconds hand
    
    
    //rotate the hand based on angle calculated
   
    
    
    //drawing mins hand
    
    
    //drawing hr hand
  

    //drawing the arcs
  
    
    
    
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
}
