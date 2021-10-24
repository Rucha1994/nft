
var left_y, right_y,leg_right_y,leg_left_y

var ArrRY,ArrLY,arrLRY,arrLLY;
function setup()
{
    createCanvas(windowWidth,windowHeight);
   
    right_y=300
    left_y=300
    leg_left_y=350;
    leg_right_y=350
}
function draw()
{
    background("yellow");
    strokeWeight(25)
    line(50,150,width/2,150)
    strokeWeight(10)
    line(width/2-20,150,width/2-20,250);
    strokeWeight(5)
    ellipse(width/2-20,250,40,40)
    line(width/2-20,275,width/2-20,300);
    line(width/2-20,300,width/2+20,right_y);
    line(width/2-20,300,width/2-60,left_y);
    line(width/2-20,300,width/2-20,350);
    line(width/2-20,350,width/2+20,leg_right_y);
    line(width/2-20,350,width/2-60,leg_left_y);
    
    
}
function mouseClicked()
{    
    strokeWeight(5);
    ArrRY=[300,325,275]
    ArrLY=[300,325,275]
    arrLRY=[325,350,375]
    arrLLY=[325,350,375]
     var index_r=Math.round(random(0,2))
     var index_l=Math.round(random(0,2))
     var index_lr=Math.round(random(0,2))
     var index_ll=Math.round(random(0,2))
    right_y=ArrRY[index_r];
    left_y=ArrLY[index_l];
    leg_right_y=arrLRY[index_lr];
    leg_left_y=arrLLY[index_ll];
}