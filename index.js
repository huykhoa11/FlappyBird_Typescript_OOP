"use strict";
function main() {
    const game = new Game('game');
    const bird = new Bird(game, './assets/img/redbird-midflap.png');
    const bg = new BackGround(game, './assets/img/background-night.png');
    const base = new Base(game, './assets/img/base.png');
    const pipe1 = new Pipe(game, './assets/img/pipe-green.png', GAME_WIDTH);
    const pipe2 = new Pipe(game, './assets/img/pipe-green.png', GAME_WIDTH + PIPE_SPACE);
    const score1 = new Score(game, './assets/img/0.png');
    const score2 = new Score(game, './assets/img/0.png');
    game.setBackGround(bg);
    game.setBird(bird);
    game.setBase(base);
    game.setPipe1(pipe1);
    game.setPipe2(pipe2);
    game.setScore1(score1);
    // game.setScore2(score2);
    game.start();
}
main();
