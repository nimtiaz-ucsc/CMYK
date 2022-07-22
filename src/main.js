let config = {
    width:  1080,
    height: 1080,
    backgroundColor: '0xFFFFFF',
    scene: [Preload, Play, Switcher],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
};

let keyW, keyA, keyS, keyD;

let moveSpeed = 10;

let Color1 = 0x2ce8f5; // cyan
let Color2 = 0xfb2d9e; // magenta
let Color3 = 0xfeae34; // yellow
let Color4 = 0x5a6988; // key

let Color = eval('Color' + Phaser.Math.Between(1, 4));

let game = new Phaser.Game(config);