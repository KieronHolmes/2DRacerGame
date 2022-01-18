import {Button} from '../Functions/Button';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "SettingsMenu",
};

export class Settings extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }
  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.add.sprite(0, 0, 'background').setOrigin(0, 0);
    const backButton = new Button(20,20,'button-back',this.mainMenu,this,false).setOrigin(0,0);
  }
  private mainMenu() {
    this.cameras.main.fadeOut(1000, 0, 0, 0);
    this.scene.start('Menu');
  }
}