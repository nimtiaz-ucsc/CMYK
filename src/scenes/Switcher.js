class Switcher extends Phaser.Scene {
    constructor() {
        super('switcher');
    }

    preload() {

    }

    create() {

        this.anims.create({
            key: 'switch',
            frames: this.anims.generateFrameNumbers('switcher', {start: 0, end: 4, first: 0}),
            frameRate: 0,
            repeat: 0
        })

        this.switcher_bg = this.add.rectangle(0, 0, game.config.width, game.config.height, 0xC0CBDC).setOrigin(0).setAlpha(0);
        // tile sprite of the corresponding shape, scrolling in the direction of the color on the switcher

        this.switcher = this.add.sprite(this.input.x, this.input.y, 'switcher').play('switch').setScale(0);

        this.tweens.add({
            targets: [this.switcher],
            scaleX: 1,
            scaleY: 1,
            duration: 100,
            ease: 'Back.easeOut'
        });
        this.tweens.add({
            targets: [this.switcher_bg],
            alpha: 0.5,
            duration: 100,
        });

        this.input.on('pointerup', () => {
            this.tweens.add({
                targets: [this.switcher],
                scaleX: 0,
                scaleY: 0,
                duration: 100,
                ease: 'Back.easeIn'
            });
            this.tweens.add({
                targets: [this.switcher_bg],
                alpha: 0,
                duration: 100
            });

            if (this.switcher.anims.currentFrame.index != 1) {
                Color = eval('Color'+(this.switcher.anims.currentFrame.index - 1));
            }

            this.scene.resume('play');
            this.time.delayedCall(100, () => {
                this.scene.stop();
            });
        })

    }

    update() {
        if (Math.abs(this.input.x - this.switcher.x) <= 35 && Math.abs(this.input.y - this.switcher.y) <= 35) {
            this.switcher.play({key: 'switch', startFrame: 0});
            this.switcher_bg.fillColor = 0xC0CBDC;

        } else if (Math.abs(this.input.x - this.switcher.x) <= 35 && this.switcher.y - this.input.y > 35) {
            this.switcher.play({key: 'switch', startFrame: 1});
            this.switcher_bg.fillColor = eval('Color'+(this.switcher.anims.currentFrame.index - 1));

        } else if (this.input.x - this.switcher.x > 35 && Math.abs(this.input.y - this.switcher.y) <= 35) {
            this.switcher.play({key: 'switch', startFrame: 2});
            this.switcher_bg.fillColor = eval('Color'+(this.switcher.anims.currentFrame.index - 1));

        } else if (Math.abs(this.input.x - this.switcher.x) <= 35 && this.input.y - this.switcher.y > 35) {
            this.switcher.play({key: 'switch', startFrame: 3});
            this.switcher_bg.fillColor = eval('Color'+(this.switcher.anims.currentFrame.index - 1));

        } else if (this.switcher.x - this.input.x > 35 && Math.abs(this.input.y - this.switcher.y) <= 35) {
            this.switcher.play({key: 'switch', startFrame: 4});
            this.switcher_bg.fillColor = eval('Color'+(this.switcher.anims.currentFrame.index - 1));
        }
    }
}