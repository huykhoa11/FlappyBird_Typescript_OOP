"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Game_instances, _Game_updateFrame;
class Game {
    constructor(id) {
        _Game_instances.add(this);
        this.totalScore = 0;
        this.flag = true;
        this.gameover = false;
        const canvas = document.getElementById('id');
        this.context = canvas.getContext('2d');
        canvas.width = GAME_WIDTH;
        canvas.height = GAME_HEIGHT;
        canvas.addEventListener('click', () => {
            this.bird.image.src = './assets/img/redbird-upflap.png';
            this.bird.flap();
            setTimeout(() => { this.bird.image.src = './assets/img/redbird-downflap.png'; }, 200);
        });
    }
    setBird(bird) {
        this.bird = bird;
    }
    setBackGround(bg) {
        this.bg = bg;
    }
    setBase(base) {
        this.base = base;
    }
    setPipe1(pipe) {
        this.pipe1 = pipe;
    }
    setPipe2(pipe) {
        this.pipe2 = pipe;
    }
    setScore1(score) {
        this.score1 = score;
    }
    // setScore2(score: Score):void {
    //     this.score2 = score;
    // }
    checkCollision() {
        const birdX = this.bird.position.x;
        const birdY = this.bird.position.y;
        const pipe1_X = this.pipe1.position.x;
        const pipe1_Y = this.pipe1.position.y;
        const pipe2_X = this.pipe2.position.x;
        const pipe2_Y = this.pipe2.position.y;
        const base_Y = this.base.position.y;
        if (birdX > pipe1_X - 36 && birdX < pipe1_X + PipeWidth && birdY > pipe1_Y && birdY < pipe1_Y + PipeHeight ||
            birdX > pipe1_X - 36 && birdX < pipe1_X + PipeWidth && birdY > pipe1_Y + PipeHeight + 125 && birdY < pipe1_Y + PipeHeight + PipeHeight + 125 ||
            birdX > pipe2_X - 36 && birdX < pipe2_X + PipeWidth && birdY > pipe2_Y && birdY < pipe2_Y + PipeHeight ||
            birdX > pipe2_X - 36 && birdX < pipe2_X + PipeWidth && birdY > pipe2_Y + PipeHeight + 125 && birdY < pipe2_Y + PipeHeight + PipeHeight + 125) {
            console.log('GAMEOVER COLLISION PIPE');
            this.gameover = true;
        }
        else if (birdY >= base_Y - 28) {
            console.log('GAMEOVER COLLISION BASE');
            this.gameover = true;
        }
        else if (birdX > pipe1_X + PipeWidth || birdX > pipe2_X + PipeWidth) {
            this.flag = true;
        }
        else if (birdX > pipe1_X && birdX < pipe1_X + PipeWidth ||
            birdX > pipe2_X && birdX < pipe2_X + PipeWidth) {
            if (this.flag === true) {
                this.flag = false;
                this.totalScore += 5;
                console.log('totalScore', this.totalScore, 'flag', this.flag);
            }
        }
    }
    start() {
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_updateFrame).call(this);
    }
}
_Game_instances = new WeakSet(), _Game_updateFrame = function _Game_updateFrame() {
    this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    this.bg.update();
    this.bird.update();
    this.pipe2.update();
    this.pipe1.update();
    this.score1.update(this.totalScore);
    // this.score2.update();
    this.base.update();
    this.checkCollision();
    if (this.gameover === false) {
        setTimeout(() => __classPrivateFieldGet(this, _Game_instances, "m", _Game_updateFrame).call(this), 1000 / GAME_FPS);
    }
};
