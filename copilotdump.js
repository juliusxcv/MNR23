function setup() {
    createCanvas(windowWidth, windowHeight);
}

let xLoading = -200;

function draw() {
    background(0);
    translate(width/2, height/2);
    // your drawing code goes here
    stroke(255);
    line(-200, 0, xLoading, 0);
    xLoading += 1;
    if (xLoading > 200) {
        xLoading = -200;
    }
}
