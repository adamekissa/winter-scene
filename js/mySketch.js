//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let currentPalette;

function setup() {
    createCanvas(windowWidth, 600);
    currentPalette = randomPalette();
    noStroke();
    background(0);
}

function draw() {
    fill(random(255, 20));
    const x = random(0, width);
    const y = random(0, height);
    circle(x, y, 10);

    drawSnowMan(600, 380) ;
    drawSnowMan(800, 380) ;

    fill("green");
  triangle(100, 10, 40, 200, 160, 200);
  triangle(100, 70, 40, 250, 160, 250);

  fill("black");
  rect(80, 250, 40, 100);
}

function mouseClicked() {
    background(255);
    currentPalette = randomPalette();
}

function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
}


function drawSnowMan(x, y) {

	let xCentre = x;
	let yCentre = y;

	//Head
	fill("white")
	circle(xCentre + 0, yCentre + 0, 100);

	//Eyes
	fill("#353b48")
	circle(xCentre - 20, yCentre - 15, 10);
	circle(xCentre + 20, yCentre - 15, 10);

	//Nose
	fill("black")
	circle(xCentre + 0, yCentre + 15, 15);

	//Body
	fill("white")
	circle(xCentre + 0, yCentre + 135, 170);
	fill(255, 255, 255);

	//Belly-button
	fill("blue")
	circle(xCentre + 0, yCentre + 115, 10);
	circle(xCentre + 0, yCentre + 135, 10);
	circle(xCentre + 0, yCentre + 155, 10);

	// //Scarf
	// fill("red");
	// rectMode(CENTER)
	// rect(xCentre - 20, yCentre + 50, 120, 15, 15);
}