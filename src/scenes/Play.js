class Play extends Phaser.Scene {
    constructor() {
        super('play');
    }

    preload() {
        //
    }

    create() {
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.player = this.add.rectangle(game.config.width/4, game.config.height/2, 100, 200, RED).setOrigin(0.5);

        this.switcher = this.add.group();
        this.rect0 = this.add.rectangle(game.config.width/2, game.config.height/2, 100, 100, GREEN).setOrigin(0).setAngle(45);
        this.rect1 = this.add.rectangle(game.config.width/2, game.config.height/2, 100, 100, BLUE).setOrigin(0).setAngle(45*3);
        this.rect2 = this.add.rectangle(game.config.width/2, game.config.height/2, 100, 100, YELLOW).setOrigin(0).setAngle(45*5);
        this.rect3 = this.add.rectangle(game.config.width/2, game.config.height/2, 100, 100, RED).setOrigin(0).setAngle(45*7);
        this.rect4 = this.add.rectangle(game.config.width/2, game.config.height/2, 100, 100, 0xFFFFFF).setAngle(45);

        this.switcher.add(this.rect0);
        this.switcher.add(this.rect1);
        this.switcher.add(this.rect2);
        this.switcher.add(this.rect3);
        this.switcher.add(this.rect4);

        this.tweens.add({
            targets: [this.switcher.getChildren()],
            scaleX: 1,
            scaleY: 1,
            duration: 100
        });

        this.input.on('pointerdown', () => {
            console.log('click');
        });
    }

    update() {

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