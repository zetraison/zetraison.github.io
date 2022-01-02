const gravity = 0.1;

class Firework {

    constructor(x, y, color, level) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = 5;
        this.opacity = 1;
        this.speedX = -6 + Math.random() * 12;
        this.speedY = 8 + Math.random() * 3;
        this.level = level;
    }

    update() {
        this.speedY -= gravity;
        this.y -= this.speedY;
        this.x += this.speedX + Math.random() * 3;
        if (this.speedY < 0 && this.opacity > 0.01) { this.opacity -= 0.01; };
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}

export { Firework };
