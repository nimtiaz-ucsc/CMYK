class Play extends Phaser.Scene {
    constructor() {
        super('play');
    }

    preload() {
        this.load.spritesheet('switcher', './assets/switcher.png', {frameWidth: 280, frameHeight: 280, startFrame: 0, endFrame: 4});
    }

    create() {
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.player = this.add.rectangle(game.config.width/2, game.config.height/2, 100, 200, Color1).setOrigin(0.5);

        this.anims.create({
            key: 'switch',
            frames: this.anims.generateFrameNumbers('switcher', {start: 0, end: 4, first: 0}),
            frameRate: 0,
            repeat: 0
        })

        this.switcher = this.add.sprite(game.config.width/2, game.config.height/2, 'switcher').setScale(0).play('switch');

        this.input.on('pointerdown', () => {
            if (this.switcher.scale === 0) {
                this.switcher.x = this.input.x;
                this.switcher.y = this.input.y;
                this.tweens.add({
                    targets: [this.switcher],
                    scaleX: 1,
                    scaleY: 1,
                    duration: 100,
                    ease: 'Back.easeOut'
                });
                moveSpeed = 1;
            }
        });

        this.input.on('pointerup', () => {
            this.tweens.add({
                targets: [this.switcher],
                scaleX: 0,
                scaleY: 0,
                duration: 100,
                ease: 'Back.easeIn'
            });
            if (this.switcher.anims.currentFrame.index != 1) {
                this.player.fillColor = eval('Color'+(this.switcher.anims.currentFrame.index - 1));
            }
            moveSpeed = 10;
        });
    }

    update() {        
        if (Math.abs(this.input.x - this.switcher.x) <= 70 && Math.abs(this.input.y - this.switcher.y) <= 70) {
            this.switcher.play({key: 'switch', startFrame: 0});

        } else if (Math.abs(this.input.x - this.switcher.x) <= 70 && this.switcher.y - this.input.y > 70) {
            this.switcher.play({key: 'switch', startFrame: 1});

        } else if (this.input.x - this.switcher.x > 70 && Math.abs(this.input.y - this.switcher.y) <= 70) {
            this.switcher.play({key: 'switch', startFrame: 2});

        } else if (Math.abs(this.input.x - this.switcher.x) <= 70 && this.input.y - this.switcher.y > 70) {
            this.switcher.play({key: 'switch', startFrame: 3});

        } else if (this.switcher.x - this.input.x > 70 && Math.abs(this.input.y - this.switcher.y) <= 70) {
            this.switcher.play({key: 'switch', startFrame: 4});
        }


        if (keyW.isDown && this.player.y >= 100) {
            this.player.y -= moveSpeed;
        }

        if (keyA.isDown && this.player.x >= 50) {
            this.player.x -= moveSpeed;
        }

        if (keyS.isDown && this.player.y <= game.config.height - 100) {
            this.player.y += moveSpeed;
        }

        if (keyD.isDown && this.player.x <= game.config.width - 50) {
            this.player.x += moveSpeed;
        }
    }
}