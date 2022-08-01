class Play extends Phaser.Scene {
    constructor() {
        super('play');
    }

    preload() {

    }

    create() {
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player').setOrigin(0.5).play('player' + Color).setCollideWorldBounds(true);
        this.player.color = Color;

        this.bullets = this.physics.add.group();

        this.input.on('pointerdown', () => {
            this.input.mouse.disableContextMenu();
            if (this.input.activePointer.middleButtonDown()) {
                this.scene.pause('play');
                this.scene.launch('switcher');
            }

            if (this.input.activePointer.leftButtonDown()) {
                this.fireBullet();
            }
        });

        this.enemies = this.physics.add.group();
        this.enemies.add(this.physics.add.sprite(game.config.width/3, game.config.height/4, 'enemy').setOrigin(0.5).play('enemy' + Phaser.Math.Between(1, 4)));
        this.enemies.add(this.physics.add.sprite(2*game.config.width/3, game.config.height/4, 'enemy').setOrigin(0.5).play('enemy' + Phaser.Math.Between(1, 4)));
        this.enemies.add(this.physics.add.sprite(game.config.width/3, 3*game.config.height/4, 'enemy').setOrigin(0.5).play('enemy' + Phaser.Math.Between(1, 4)));
        this.enemies.add(this.physics.add.sprite(2*game.config.width/3, 3*game.config.height/4, 'enemy').setOrigin(0.5).play('enemy' + Phaser.Math.Between(1, 4)));

        this.physics.add.overlap(this.bullets, this.enemies, this.destroyEnemy);

        this.input.keyboard.on('keydown-SPACE', () => {
            this.fireBullet();
        });
    }

    update() {
        if (this.player.color != Color) {
            this.player.color = Color;
            if (Color === 1) {
                this.player.play('player1');
            }
            if (Color === 2) {
                this.player.play('player2');
            }
            if (Color === 3) {
                this.player.play('player3');
            }
            if (Color === 4) {
                this.player.play('player4');
            }
        }

        this.player.setVelocity(0);
        

        if (keyW.isDown) {
            this.player.setVelocityY(moveSpeed * -1);
        }

        if (keyA.isDown) {
            this.player.setVelocityX(moveSpeed * -1);
        }

        if (keyS.isDown) {
            this.player.setVelocityY(moveSpeed);
        }

        if (keyD.isDown) {
            this.player.setVelocityX(moveSpeed);
        }
    }

    destroyEnemy(bullet, enemy) {
        if (bullet.anims.currentAnim.key.substring(6) === enemy.anims.currentAnim.key.substring(5)) {
            bullet.setVelocity(0);
            bullet.body.destroy();
            bullet.play('blast' + bullet.anims.currentAnim.key.substring(6));

            enemy.body.destroy();
            enemy.play(enemy.anims.currentAnim.key + "_alt");
            enemy.on('animationcomplete', () => {
                enemy.destroy();
                bullet.destroy();
            });
        }
    }

    fireBullet() {
        let bullet = this.bullets.add(this.physics.add.sprite(this.player.x + 50, this.player.y, 'bullet').play('bullet' + Color));
        bullet.setVelocityX(1000);
        this.time.delayedCall(250, () => {
            if (keySPACE.isDown || this.input.activePointer.leftButtonDown()) {
                this.fireBullet();
            }
        })
    }
}