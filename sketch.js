
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background("black");

  if (keyIsDown(RIGHT_ARROW)){
    background("red")
  }
  if (keyIsDown(DOWN_ARROW)){
    background("orange")
  }
  if (keyIsDown(LEFT_ARROW)){
    background("green")
  }
  if (keyIsDown(UP_ARROW)){
    background("purple")
  }
}




