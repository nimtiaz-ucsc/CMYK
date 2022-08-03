class Switcher extends Phaser.Scene {
    constructor() {
        super('switcher');
    }

    preload() {

    }

    create() {
        //this.switcher_bg = this.add.rectangle(0, 0, game.config.width, game.config.height, 0xC0CBDC).setOrigin(0).setAlpha(0);
        this.switcher_bg = this.add.tileSprite(game.config.width/2, game.config.height/2, game.config.width, game.config.height, 'switcher_bg').setOrigin(0.5).setAlpha(0);
        this.switcher_bg_sprite = this.add.sprite(0, 0, 'switcher_bg').setOrigin(0).play('color0').setAlpha(0);

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
            alpha: 1,
            duration: 100,
        });

        this.input.on('pointerup', () => {
            if (!this.input.activePointer.middleButtonDown()) {                
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
                    Color = this.switcher.anims.currentFrame.index - 1;
                }

                this.scene.resume('shooter');
                this.time.delayedCall(100, () => {
                    this.scene.stop();
                });
            }
        })

    }

    update() {
        this.switcher_bg.setFrame(this.switcher_bg_sprite.frame.name);

        if (this.switcher_bg_sprite.anims.currentAnim.key === 'color1') {
            this.switcher_bg.tilePositionY += 0.5;
        }
        if (this.switcher_bg_sprite.anims.currentAnim.key === 'color2') {
            this.switcher_bg.tilePositionX += 0.5;
        }
        if (this.switcher_bg_sprite.anims.currentAnim.key === 'color3') {
            this.switcher_bg.tilePositionX -= 0.5;
        }
        if (this.switcher_bg_sprite.anims.currentAnim.key === 'color4') {
            this.switcher_bg.tilePositionY -= 0.5;
        }

        if (Math.abs(this.input.x - this.switcher.x) <= 35 && Math.abs(this.input.y - this.switcher.y) <= 35) {
            this.switcher.play({key: 'switch', startFrame: 0});
            if (this.switcher_bg_sprite.anims.currentAnim.key != 'color0') {
                this.switcher_bg_sprite.play('color0');
            }
        } else if (Math.abs(this.input.x - this.switcher.x) <= 35 && this.switcher.y - this.input.y > 35) {
            this.switcher.play({key: 'switch', startFrame: 1});
            if (this.switcher_bg_sprite.anims.currentAnim.key != 'color1') {
                this.switcher_bg_sprite.play('color1');
            }
        } else if (this.switcher.x - this.input.x > 35 && Math.abs(this.input.y - this.switcher.y) <= 35) {
            this.switcher.play({key: 'switch', startFrame: 2});
            if (this.switcher_bg_sprite.anims.currentAnim.key != 'color2') {
                this.switcher_bg_sprite.play('color2');
            }
        } else if (this.input.x - this.switcher.x > 35 && Math.abs(this.input.y - this.switcher.y) <= 35) {
            this.switcher.play({key: 'switch', startFrame: 3});
            if (this.switcher_bg_sprite.anims.currentAnim.key != 'color3') {
                this.switcher_bg_sprite.play('color3');
            }
        } else if (Math.abs(this.input.x - this.switcher.x) <= 35 && this.input.y - this.switcher.y > 35) {
            this.switcher.play({key: 'switch', startFrame: 4});
            if (this.switcher_bg_sprite.anims.currentAnim.key != 'color4') {
                this.switcher_bg_sprite.play('color4');
            }
        }
    }
}