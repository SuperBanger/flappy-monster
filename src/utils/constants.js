const gameStates = {
    INITIAL: 1,
    GAME_PLAYING: 2,
    GAME_OVER: 3
};

const wallsMinGap = 200;
const wallsMaxGap = 300;
const wallsFreequency = 1500; // ms
const wallWidth = 100;

const backgroundImage = new Image();
backgroundImage.src = 'src/img/back.png';

const scoreFont = '45px Verdana';
const scoreTextOffsetX = 150;
const scoreTextOffsetY = 80;

const gameVelocity = 5;
const fontColor = 'white';
const startMsg = 'Click to Start!';
const startFont = '36px Arial';
const restartMsg = 'Press R to Restart!';
const restartFont = '24px Arial';
const restartOffsetY = -50;
const gameOverMsg = 'Game Over :(';
const gameOverFont = '36px Arial';
const scoreResultMsg = 'Your Score: ';
const scoreResultFont = '54px Arial';
const scoreResultOffsetY = 100;

const monsterImage = new Image();
monsterImage.src = 'src/img/monster.png';

const monsterGravity = 0.2;
const monsterFrameSize = 115;
