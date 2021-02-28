class Wall {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this.x = canvas.width;
        this.y = 0;

        this.h = getRandomInt(0, wallsMaxGap);
        this.gap = getRandomInt(wallsMinGap, wallsMaxGap);
    }

    draw() {
        this._context.fillStyle = getRandomColor(); // move to constructor to make color static fixed

        this._context.fillRect(this.x, this.y, wallWidth, this.h);
        this._context.fillRect(this.x, this.h + this.gap, wallWidth, this._canvas.height);
    }
}
