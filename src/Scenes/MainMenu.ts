const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "MainMenu",
};

export class MainMenu extends Phaser.Scene {
  private height: number;
  private width: number;

  constructor() {
    super(sceneConfig);
  }
  preload() {
    this.height = this.game.canvas.height;
    this.width = this.game.canvas.width;
  }
  create() {
    this.add.sprite(0, 0, 'background').setOrigin(0,0);
  }
}
