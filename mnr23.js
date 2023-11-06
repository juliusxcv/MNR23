let objects = [];
let dials = []
let xLoading = -200;
let cSize = 500;
let dialangle = 0


function setup() {
    pixelDensity(1)
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvasContent');
    noiseSeed(04679836528934789); // set the noise seed for consistency
    for (let i = 0; i < 20; i++) {
        let radius = map(noise(i * 0.5), 0.1, 1, 0.1, 500); //  Perlin noise for dispersion
        let lines = [];
        for (let j = 0; j < random(1, 5); j++) {
            lines.push({
                angle: random(TWO_PI),
                speed: random(0.001, 0.005)
            });
        }
        objects.push(new Orbiter(radius, lines));
    }



    
}

function draw() {
    translate(width / 2, height / 2);
    background(0);


    fill(0, 0, 0, 0); // set fill to white
    stroke(255); // set stroke to black
    strokeWeight(1); // set stroke weight to 1


    // Draw the objects
    for (let i = 0; i < objects.length; i++) {
        objects[i].draw();
    }



    //Circle Anim
    circle(0,0,cSize);
    cSize += 10;
    if (cSize > 0) {
        cSize = -2000;
    }

    //Circle Anim
    circle(0,0,cSize);
    cSize += 10;
    if (cSize > 0) {
        cSize = -1500;
    }
    
    push()
    strokeWeight(0);
    blendMode(EXCLUSION);
    fill(255)
    ellipse(0, 0, 500, 500);
    pop()

    //Cursor
    push()
    strokeWeight(0);
    blendMode(DARKEST);
    fill (255,0,0)
    ellipse(mouseX-width/2, mouseY-height/2, 300, 300);
    pop()

     

    // TYPO
    strokeWeight(1)
    stroke(255)
    textAlign(CENTER, CENTER);

    fill(0)
    strokeWeight(0)
    stroke(0)
    textSize(200)
    textStyle(BOLD)
    textFont('Planar')
    text("23", 0, 0);

    strokeWeight(2)
    stroke(255)
    textSize(60);
    textFont('Arial Black');
    fill(255)
    text("MIDNIGHT RUN", 0, 0);


    fill(255)
    strokeWeight(0)
    textSize(20);
    text("22.11.2023", 0, 0-height/2+20);

    textAlign(LEFT, CENTER)
    textSize(15);
    text("START Eibenstr 9", 0-width/2+20, 0+height/2-20);

    textAlign(RIGHT, CENTER)
    textSize(15);
    text("END Wasserwerkstr 94", 0+width/2-20, 0+height/2-20);

    //Loadingbar
    push()
    blendMode(EXCLUSION);
    strokeWeight(18);
    stroke(255);
    //strokeCap(SQUARE);
    line(width/2*-1+20, 0+height/2-20, xLoading, 0+height/2-20);
    xLoading += 1;
    if (xLoading > width/2-20) {
        xLoading = width/2*-1+20;
    }
    pop()

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
