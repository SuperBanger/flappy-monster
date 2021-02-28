class WallService {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this._walls = [];
    }

    startWallGeneration() {
        this.interval = setInterval(() => {
            const wall = new Wall(this._canvas);
            this._walls.push(wall);
        }, wallsFreequency);
    }

    drawWalls(monster, callback) {
        this._walls.forEach(wall => {
            wall.draw();
            wall.x -= gameVelocity;

            if (wall.x + wallWidth < 0) {
                this._walls.shift();
            }

            if (this._isCollided(monster, wall)) {
                this._stopWallGeneration();
                callback();
            }
        });
    }

    _isCollided(monster, wall) {
        const topMonster = monster.y;
        const bottomMonster = monster.y + monster.h;
        const rightMonster = monster.x + monster.w;
        const leftMonster = monster.x;

        const topWall = wall.y + wall.h + wall.gap;
        const bottomWall = wall.y + wall.h;
        const rightWall = wall.x + wallWidth;
        const leftWall = wall.x;

        if (
            (bottomMonster < topWall && topMonster > bottomWall) ||
            (leftMonster > rightWall) ||
            (rightMonster < leftWall)
        ) {
            return false;
        }
        return true;
    }

    _stopWallGeneration() {
        clearInterval(this.interval);
        this._walls = [];
    }
}
