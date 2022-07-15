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

        this.player = this.add.rectangle(game.config.width/2, game.config.height/2, 100, 200, Color).setOrigin(0.5);
        this.physics.add.existing(this.player);

        this.input.on('pointerdown', () => {
            this.scene.pause('play');
            this.scene.launch('switcher');
        });

        //this.enemies = this.add.group();
        this.enemy = this.add.rectangle(game.config.width/2, game.config.height/4, 50, 50, eval('Color' + Phaser.Math.Between(1, 4))).setOrigin(0.5);
        this.physics.add.existing(this.enemy);
    }

    update() {  
        if (this.player.fillColor != Color) {
            this.player.fillColor = Color;
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