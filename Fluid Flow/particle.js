class Particle {
    constructor(angle) {
        this.posX = width;
        this.posY = 0;
        this.maxSpeed = 1;
        this.angle = angle;
        this.velX = abs(this.maxSpeed * sin(this.angle)) * -1;
        this.velY = this.maxSpeed * cos(this.angle);
        this.colInc = 0;
        this.colOff = 0.01;
    }

    show() {
        noStroke();
        fill((1 - noise(frameCount * 0.01)) * 255, 0, (noise(frameCount * 0.01)) * 255);
        this.colInc += this.colOff;
        circle(this.posX, this.posY, 5);
    }

    accelerate(magniVal, zNoiseAngle, zNoiseMagnitude) { 
        let theta = noise(this.posX * magniVal, this.posY * magniVal, zNoiseAngle) * PI;
        console.log(theta)
        this.velX += abs(noise(this.posX * (20 / width), this.posY * (20 / height), zNoiseMagnitude) * sin(theta)) * -1 * 0.15;
        this.velY += noise(this.posX * (20 / width), this.posY * (20 / height), zNoiseMagnitude) * cos(theta) * 0.15;
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
        this.posX += this.velX;
        this.posY += this.velY;
    }

    posCheck() {
        if (this.posX > width || this.posX < 0 || this.posY > height || this.posY < 0) {
            return (true);
        }
    }
}