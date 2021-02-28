class Monster {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this.reset();

        this.w = monsterFrameSize;
        this.h = monsterFrameSize;

        this.velocity = 0;
        this.frame = 0;
    }

    draw() {
        this.velocity = this.velocity + monsterGravity;
        this.y += this.velocity;

        if (this.y + this.h > this._canvas.height) {
            this.y = this._canvas.height - this.h;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

        this._context.drawImage(monsterImage, this.frame * monsterFrameSize, 0, monsterFrameSize, 100, this.x, this.y, this.w, this.h);

        this.frame++;
        this.frame %= 4;
    }

    reset() {
        this.x = monsterFrameSize;
        this.y = monsterFrameSize;
    }

    bump() {
        this.velocity = -1 * gameVelocity;
    }
}
