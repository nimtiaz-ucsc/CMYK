let config = {
    width:  1080,
    height: 1080,
    backgroundColor: '0xFFFFFF',
    scene: [Preload, Play, Switcher],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

let keyW, keyA, keyS, keyD, keySPACE;

let moveSpeed = 500;

let ColorCode1 = 0x2ce8f5; // cyan
let ColorCode2 = 0xfb2d9e; // magenta
let ColorCode3 = 0xfeae34; // yellow
let ColorCode4 = 0x5a6988; // key

let Color = Phaser.Math.Between(1, 4);

let game = new Phaser.Game(config);