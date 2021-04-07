var hr, min, sec;
var hrAngle, minAngle, secAngle; 

function setup(){
    createCanvas(400,400); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    min = minute();
    sec = second();

    //To create ab iterative rotation
    secAngle = map(sec, 0, 60, 0, 360);
    //minAngle = map(min, );
    //hrAngle = map(hr  );

    //drawing seconds hand
    push();
    rotate(secAngle); //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //drawing mins hand
    push();
    rotate(minAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    
    //Seconds
    stroke(255,0,0);
    //arc( secAngle);

    //Minutes
    stroke(0,255,0);
   // arc( minAngle);

    //Hour
    stroke(0,0,255);
    arc( hrAngle);
}