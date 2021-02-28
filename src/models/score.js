class Score {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this.reset();
    }

    draw() {
        const draw = new Date();
        this._score = ((draw - this._start) / 1000).toFixed(1);

        drawText(
            this._context,
            this._score,
            scoreFont,
            this._canvas.width - scoreTextOffsetX,
            scoreTextOffsetY
        );
    }

    reset() {
        this._start = new Date();
        this._score = 0;
    }
}
