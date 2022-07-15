let config = {
    width:  1080,
    height: 1080,
    backgroundColor: '0xFFFFFF',
    scene: [Preload, Play, Switcher],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            enableBody: true,
            debug: true
        }
    }
};

let keyW, keyA, keyS, keyD;

let moveSpeed = 10;

let Color1 = 0x2ce8f5;
let Color2 = 0xfeae34
let Color3 = 0x5a6988;
let Color4 = 0xfb2d9e;

let Color = Color1;

let game = new Phaser.Game(config);