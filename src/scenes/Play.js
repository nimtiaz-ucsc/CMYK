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

        this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player').setOrigin(0.5).play('player' + Phaser.Math.Between(1, 4)).setCollideWorldBounds(true);
        this.player.color = Color;

        this.input.on('pointerdown', () => {
            this.scene.pause('play');
            this.scene.launch('switcher');
        });

        this.enemies = this.physics.add.group();
        this.enemies.add(this.physics.add.sprite(game.config.width/3, game.config.height/4, 'enemy').setOrigin(0.5).play('enemy' + Phaser.Math.Between(1, 4)));
        this.enemies.add(this.physics.add.sprite(2*game.config.width/3, game.config.height/4, 'enemy').setOrigin(0.5).play('enemy' + Phaser.Math.Between(1, 4)));
        this.enemies.add(this.physics.add.sprite(game.config.width/3, 3*game.config.height/4, 'enemy').setOrigin(0.5).play('enemy' + Phaser.Math.Between(1, 4)));
        this.enemies.add(this.physics.add.sprite(2*game.config.width/3, 3*game.config.height/4, 'enemy').setOrigin(0.5).play('enemy' + Phaser.Math.Between(1, 4)));

        //this.enemy = this.physics.add.sprite(game.config.width/2, game.config.height/4, 'enemy').setOrigin(0.5).play('enemy' + Phaser.Math.Between(1, 4));

        this.physics.add.overlap(this.player, this.enemies, this.destroyEnemy)

        
    }

    update() {
        if (this.player.color != Color) {
            this.player.color = Color;
            if (Color === Color1) {
                this.player.play('player1');
            }
            if (Color === Color2) {
                this.player.play('player2');
            }
            if (Color === Color3) {
                this.player.play('player3');
            }
            if (Color === Color4) {
                this.player.play('player4');
            }
        }

        if (keyW.isDown) {
            this.player.y -= moveSpeed;
        }

        if (keyA.isDown) {
            this.player.x -= moveSpeed;
        }

        if (keyS.isDown) {
            this.player.y += moveSpeed;
        }

        if (keyD.isDown) {
            this.player.x += moveSpeed;
        }
    }

    destroyEnemy(player, enemy) {
        if (player.anims.currentAnim.key.substring(6) === enemy.anims.currentAnim.key.substring(5)) {
            enemy.body.destroy();
            enemy.play(enemy.anims.currentAnim.key + "_alt");
            enemy.on('animationcomplete', () => {
                enemy.destroy();
            });
        }
    }
}