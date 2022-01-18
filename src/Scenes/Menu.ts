import {Button} from '../Functions/Button';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Menu",
};

export class Menu extends Phaser.Scene {
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
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.add.sprite(0, 0, 'background').setOrigin(0, 0);
    const settingsButton = new Button(20,20,'button-settings',this.settingsMenu,this,false).setOrigin(0,0);
    const startButton = new Button(this.width-20,this.height-20,'button-start',this.playGame,this,false).setOrigin(1,1);
  }
  private playGame() {
    this.cameras.main.fadeOut(1000, 0, 0, 0);
    this.scene.start('Game',{level_number: 1});
  }
  private settingsMenu() {
    this.cameras.main.fadeOut(1000, 0, 0, 0);
    this.scene.start('SettingsMenu');
  }
}