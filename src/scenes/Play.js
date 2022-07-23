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

        this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player').setOrigin(0.5).play('player1').setCollideWorldBounds(true);
        this.player.color = Color;

        this.input.on('pointerdown', () => {
            this.scene.pause('play');
            this.scene.launch('switcher');
        });

        //this.enemies = this.add.group();
        // this.enemy = this.add.rectangle(game.config.width/2, game.config.height/4, 50, 50, eval('Color' + Phaser.Math.Between(1, 4))).setOrigin(0.5);
        // this.physics.add.existing(this.enemy);
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
}