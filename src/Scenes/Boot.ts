const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Boot",
};

export class Boot extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }
  preload() {
    this.load.image('background', 'Assets/Images/background.png');
    this.load.image('logo','Assets/Images/phaser-logo.png');
    this.load.image('loading-background','Assets/Images/loading-background.png');
  }
  create() {
    this.scene.start('Preloader');
  }
}
