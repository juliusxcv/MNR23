class Orbiter {
    constructor(radius, lines) {
        this.radius = radius;
        this.lines = lines;
    }

    draw() {
        // Draw the circle
        ellipse(0, 0, this.radius * 2);

        // Draw the rotating lines
        for (let j = 0; j < this.lines.length; j++) {
            let lineAngle = this.lines[j].angle;
            let x1 = this.radius * cos(lineAngle);
            let y1 = this.radius * sin(lineAngle);
            let x2 = (this.radius * 6) * cos(lineAngle);
            let y2 = (this.radius * 6) * sin(lineAngle);
            line(x1, y1, x2, y2);

            this.lines[j].angle += this.lines[j].speed / 200 * this.radius;
        }
    }
}