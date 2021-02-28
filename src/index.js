const fsButton = document.getElementById('fullScreen');

const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingcontext2D} */
const context = canvas.getContext('2d');

canvas.setAttribute('width', innerWidth);
canvas.setAttribute('height', innerHeight);

// Game Objects
let background;
let score;
let wallService;
let monster;
// Game Objects

let state;

function setUp() {
    background = new Background(canvas);
    score = new Score(canvas);
    wallService = new WallService(canvas);
    monster = new Monster(canvas);

    state = gameStates.INITIAL;
}

function restart() {
    reset();
    wallService.startWallGeneration();
    state = gameStates.GAME_PLAYING;
}

function setGameOver() {
    state = gameStates.GAME_OVER
}

function drawNonPlayBackground() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function reset() {
    score.reset();
    monster.reset();
}

function drawInitialScreen() {
    drawNonPlayBackground();
    drawText(context, startMsg, startFont, canvas.width / 2, canvas.height / 2);
}

function drawGamePlayScreen() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    background.loop();
    score.draw();
    wallService.drawWalls(monster, setGameOver);
    monster.draw();
}

function drawGameOverScreen() {
    drawNonPlayBackground();

    drawText(context, `${scoreResultMsg}${score._score}`, scoreResultFont, canvas.width / 2, canvas.height / 2 - scoreResultOffsetY);
    drawText(context, gameOverMsg, gameOverFont, canvas.width / 2, canvas.height / 2);
    drawText(context, restartMsg, restartFont, canvas.width / 2, canvas.height / 2 + restartOffsetY);
}

function runGameLoop() {
    switch (state) {
        case gameStates.INITIAL:
            drawInitialScreen();
            break;
        case gameStates.GAME_PLAYING:
            drawGamePlayScreen();
            break;
        case gameStates.GAME_OVER:
            drawGameOverScreen();
            break;
    }

    requestAnimationFrame(runGameLoop);
}

canvas.addEventListener('click', () => {
    switch (state) {
        case gameStates.INITIAL:
            wallService.startWallGeneration();
            state = gameStates.GAME_PLAYING;
            break;
        case gameStates.GAME_PLAYING:
            monster.bump();
            break;
        case gameStates.GAME_OVER:
            restart();
            break;
    }
});

canvas.addEventListener('keydown', (e) => {
    switch (state) {
        case gameStates.GAME_OVER:
            if (e.code === 'KeyR') {
                restart();
            }
            break;
    }
});

fsButton.addEventListener('click', () => {
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen();
    } else if (canvas.msRequestFullscreen) {
        canvas.msRequestFullscreen();
    }
});

window.addEventListener('resize', () => {
    canvas.setAttribute('width', innerWidth);
    canvas.setAttribute('height', innerHeight);

    setUp();
});

setUp();
requestAnimationFrame(runGameLoop);
