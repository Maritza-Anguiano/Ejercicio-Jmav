let x = 250;
let y = 150;
let col = "pink";
let size = 200;
let label = "JMAV";
let grow = 6;


function setup() {
  createCanvas(500, 500);
  background(200);
}

function draw() {
  
  x = random(0, width);
  y = random(0, height);


  let d = dist(width / 2, height / 2, mouseX, mouseY);
  size = map(d, 0, width, 10, 100);


  col = color(random(100, 150), random(50, 200), random(100, 250), 25);

 
  noStroke();
  fill(col);

  
  ellipse(x, y, size, size);

 
  fill(255);
  textFont("monospace");
  textSize(size/10);
  textAlign(CENTER, CENTER);
  text(label + " " + round(size), x, y);

  
}

function mousePressed() {
  // reestablecer fondo 
  background(200);

  
  grow = grow * -2;
}
