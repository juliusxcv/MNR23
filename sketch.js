let objects = [];
let dials = []
let xLoading = -200;
let cSize = 500;
let dialangle = 0


function setup() {
    createCanvas(windowWidth, windowHeight);
    noiseSeed(04679836528934789); // set the noise seed for consistency
    for (let i = 0; i < 20; i++) {
        let radius = map(noise(i * 0.5), 0.1, 1, 0.1, 500); // use Perlin noise for radius
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

    //Loadingbar
    strokeWeight(15);
    stroke(255);
    //strokeCap(SQUARE);
    line(-180, 0+height/2-20, xLoading, 0+height/2-20);
    xLoading += 1;
    if (xLoading > 150) {
        xLoading = -180;
    }

    
    

    // TYPO
    strokeWeight(1)
    stroke(255)
    textAlign(CENTER, CENTER);

    fill(0,0,0,0)
    strokeWeight(2)
    textSize(180)
    textFont('Arial Black')
    text("23", 0, 0);


    // fill(0)
    strokeWeight(2)
    textSize(70);
    textFont('Arial Black');
    fill(0)
    text("MIDNIGHT RUN", 0, 0);

    fill(255)
    strokeWeight(0)
    textSize(20);
    textFont('Arial');
    text("22.11.2023", 0, 0-height/2+20);

    textAlign(LEFT, CENTER)
    textSize(20);
    textFont('Arial');
    text("START Eibenstr", 0-width/2+20, 0+height/2-20);

    textAlign(RIGHT, CENTER)
    textSize(20);
    textFont('Arial');
    text("END Wasserwerkstr", 0+width/2-20, 0+height/2-20);

}
