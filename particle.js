class Particle {
    constructor() {
        this.posX = windowWidth / 2;
        this.posY = windowWidth / 2;
        this.moveX;
        this.moveY;
        this.radius = 10;
        this.accelerationScale = 0.1;
    }

    move() {
        this.moveX += noise(x * magShift, y * magShift, zNoiseMagnitude) * cos(theta) * accelerationScale;
        this.moveX.limit(noise(x * magShift, y * magShift, zNoiseMagnitude));
        this.moveY += noise(x * magShift, y * magShift, zNoiseMagnitude) * sin(theta) * accelerationScale;
        this.moveY.limit(noise(x * magShift, y * magShift, zNoiseMagnitude));
        this.posX += this.moveX;
        this.posY += this.moveY;
    }

    show() {
        circle()
    }
}