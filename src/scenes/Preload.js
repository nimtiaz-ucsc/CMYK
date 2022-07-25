class Preload extends Phaser.Scene {
    constructor() {
        super('preload')
    }

    preload() {
        this.load.spritesheet('switcher', 'assets/switcher.png', {frameWidth: 280, frameHeight: 280, startFrame: 0, endFrame: 4});
        this.load.atlas('switcher_bg', './assets/switcher_bg.png', './assets/switcher_bg.json');

        this.load.atlas('player', './assets/player_proto.png', './assets/player_proto.json');
    }

    create() {
        //switcher animations
        this.anims.create({
            key: 'switch',
            frames: this.anims.generateFrameNumbers('switcher', {start: 0, end: 4, first: 0}),
            frameRate: 0,
            repeat: 0
        });

        this.anims.create({
            key: 'color0',
            frames: this.anims.generateFrameNames('switcher_bg', {
                prefix: 'color0_',
                start: 0,
                end: 0,
                zeroPad: 1
            }),
            frameRate: 0,
            repeat: 0
        });

        this.anims.create({
            key: 'color1',
            frames: this.anims.generateFrameNames('switcher_bg', {
                prefix: 'color1_',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'color2',
            frames: this.anims.generateFrameNames('switcher_bg', {
                prefix: 'color2_',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'color3',
            frames: this.anims.generateFrameNames('switcher_bg', {
                prefix: 'color3_',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'color4',
            frames: this.anims.generateFrameNames('switcher_bg', {
                prefix: 'color4_',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 6,
            repeat: -1
        });
        
        

        // player animations
        this.anims.create({
            key: 'player1',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'player1_',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'player2',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'player2_',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'player3',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'player3_',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'player4',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'player4_',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 6,
            repeat: -1
        });

        this.scene.start('play');
    }
}