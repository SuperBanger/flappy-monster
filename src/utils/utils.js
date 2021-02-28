function getRandomInt(min, max) {
    const minR = Math.ceil(min);
    const maxR = Math.floor(max);
    return Math.floor(Math.random() * (maxR - minR)) + minR;
}

function getRandomColor(useO) {
    const r = getRandomInt(0, 257);
    const g = getRandomInt(0, 257);
    const b = getRandomInt(0, 257);
    if (!useO) {
        return `rgba(${r}, ${g}, ${b})`;
    }

    const o = Math.random();
    return `rgba(${r}, ${g}, ${b}, ${o})`;
}

function drawText(ctx, text, font, x, y) {
    ctx.textAlign = 'center';
    ctx.fillStyle = fontColor;
    ctx.font = font;
    ctx.fillText(text, x, y);
}
