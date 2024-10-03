function setup() {
  createCanvas(600, 600);
  background("red")
}

function draw() {
  stroke("pink");
  fill("purple");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
