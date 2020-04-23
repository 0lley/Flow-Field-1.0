class Particle {
    constructor(angle, angleFix) {
        this.posX = mouseX;
        this.posY = mouseY;
        this.maxSpeed = 5;
        this.angle = angle;
        this.velX = 0;
        this.velY = 0;
        this.colInc = 0;
        this.colOff = 0.01;
        this.angleFix = angleFix;
        this.trail = [];
    }

    show() {
        noStroke();
        fill((1 - noise(frameCount * 0.01)) * 255, 0, (noise(frameCount * 0.01) * 255));
        this.colInc += this.colOff;
        circle(this.posX, this.posY, particleSize.value());
    }

    accelerate(magniVal, zNoiseAngle, zNoiseMagnitude) { 
        let theta = noise(this.posX * magniVal, this.posY * magniVal, zNoiseAngle) * PI * this.angleFix;
        this.velX += (noise(this.posX * (20 / width), this.posY * (20 / height), zNoiseMagnitude) * cos(theta)) * accelerationSlider.value() / 40;
        this.velY += (noise(this.posX * (20 / width), this.posY * (20 / height), zNoiseMagnitude) * sin(theta)) * accelerationSlider.value() / 40;
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
            this.trail.push('hmm yes');
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