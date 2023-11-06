const title = document.querySelector('.MNRTitle');
// title.style.color = "red";
// title.style.transform = "rotate(45deg)" 

const xSpan = document.querySelector('#x');
const ySpan = document.querySelector('#y');

let canvas;

window.setInterval(function(){
        const slntValue = Math.floor(Math.random() * 90 - 45)
        // console.log(slntValue)

        title.style.fontVariationSettings = "'slnt' " + slntValue + ", 'wght' 700"

        const angle = Math.random() * 20 - 10
        title.style.transform = `rotate(' + angle + 'deg)`
}, 1000)

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvasContent');
    pixelDensity(1);
    background(0, 0,0,0);
}

function draw() {
    stroke(255);
    strokeWeight(1);
    fill(0);
    let size = noise(frameCount * 0.01) * 200;
    ellipse(mouseX, mouseY, size, size);
    
    xSpan.innerText = floor(mouseX);
    ySpan.innerText = floor(mouseY);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    clear();
}

