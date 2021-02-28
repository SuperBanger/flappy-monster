class Background {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this._x = 0;
        this._continueX = this._canvas.width;
    }

    _draw() {
        const width = this._canvas.width;
        const height = this._canvas.height;

        this._context.drawImage(backgroundImage, this._x, 0, width, height);
        this._context.drawImage(backgroundImage, this._continueX, 0, width, height);
    }

    loop() {
        this._draw();

        const width = this._canvas.width;

        if (Math.abs(this._x) > width) {
            this._x = width - gameVelocity;
        }
        if (Math.abs(this._continueX) > width) {
            this._continueX = width - gameVelocity;
        }

        this._x -= gameVelocity;
        this._continueX -= gameVelocity;
    }
}
