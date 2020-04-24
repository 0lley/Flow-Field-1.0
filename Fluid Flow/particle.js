class Particle {
    constructor() {
        this.posX = mouseX;
        this.posY = mouseY;
        this.maxSpeed = 10;
        this.velX =  this.maxSpeed * 0.25 * cos(random() * TWO_PI);
        this.velY = this.maxSpeed * 0.25 * sin(random() * TWO_PI);
        this.colInc = 0;
        this.colOff = 0.01;
        this.trail = [toString(this.posX).concat(toString(this.posY))];
    }

    show() {
        noStroke();
        fill((1 - noise(frameCount * 0.01)) * 255, 0, (noise(frameCount * 0.01) * 255));
        this.colInc += this.colOff;
        circle(this.posX, this.posY, particleSize.value());

        if (trailParticle) {
            if (this.trail.length < 5) {
                this.trail.push(toString(this.posX).concat(toString(this.posY)));
            }

            for (let i = 0; i < this.trail.length - 1; i++) {
                console.log(this.trail.length);
            }
        }
    }

    accelerate(magniVal, zNoiseAngle, zNoiseMagnitude) { 
        let theta = noise(this.posX * magniVal, this.posY * magniVal, zNoiseAngle) * TWO_PI * noise(noiseFix) * 10;
        this.velX += (noise(this.posX, this.posY, zNoiseMagnitude) * cos(theta)) * accelerationSlider.value() / 40;
        this.velY += (noise(this.posX, this.posY, zNoiseMagnitude) * sin(theta)) * accelerationSlider.value() / 40;
        if (this.velX > this.maxSpeed) {
            this.velX = this.maxSpeed;
        }
        else if (this.velX < this.maxSpeed * -1) {
            this.velX = this.maxSpeed * - 1;
        }

        if (this.velY > this.maxSpeed) {
            this.velY = this.maxSpeed;
        }

        else if (this.velY < this.maxSpeed * -1) {
            this.velY = this.maxSpeed * -1;
        }
    }

    move() {
        if (trailParticle) {
            this.trail.push(concat(toString(this.posX), toString(this.posY)));
        }
        this.posX += this.velX;
        this.posY += this.velY;
    }

    posCheck() {
        if (this.posX > width || this.posX < 0 || this.posY > height || this.posY < 0) {
            return (true);
        }
    }
}