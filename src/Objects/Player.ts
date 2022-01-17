import MatterEntity from "./MatterEntity";

export class Player extends MatterEntity {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(scene: Phaser.Scene,x: number,y: number,texture: string) {
    super(scene, x, y, texture);

    this.setOrigin(0.5, 0.5);
    this.setScale(0.5);
    this.setAngle(90);

    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.scene.add.existing(this);
  }

  update(): void {
    // handle input
    if (this.cursors.up.isDown) {
      this.setVelocity(0,-3);
      this.setAngle(0);
    }
    else if (this.cursors.down.isDown) {
      this.setVelocity(0,3);
      this.setAngle(180);
    }
    else if (this.cursors.left.isDown) {
      this.setVelocity(-3,0);
      this.setAngle(270);
    }
    else if (this.cursors.right.isDown) {
      this.setVelocity(3,0);
      this.setAngle(90);
    }
    else {
      this.setVelocity(0,0);
    }
  }
}
