import {Player} from '../Objects/Player';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game",
};

export class Game extends Phaser.Scene {
  private player: Player;
  private trackLayer;
  private backgroundLayer;
  private level: integer;
  private maxLevel: integer;

  init(data) {
    this.level = data.level;
  }
  constructor() {
    super(sceneConfig);
    this.maxLevel = 6;
  }
  preload() {

  }
  create() {
    const map = this.add.tilemap('tilemap');
    const tileset = map.addTilesetImage('SpriteSheet', 'SpriteSheet');
    this.backgroundLayer = map.createLayer('Background', tileset);
    this.trackLayer = map.createLayer(`Track-${this.level}`,tileset);
    this.trackLayer.setCollisionByProperty({collides:true});
    this.matter.world.convertTilemapLayer(this.trackLayer);

    this.player = new Player(this,144,48,'car');
    this.add.text(0, 0, `Level ${this.level}`).setColor('#000000').setFontSize(24).setFontStyle('bold');
  }
  update() {
    this.player.update();

    const currentTile = this.trackLayer.getTileAtWorldXY(this.player.x, this.player.y);
    if(currentTile.properties.finishesGame == true) {
      if(this.level === this.maxLevel) {
        console.log("Maximum playable level");
        this.scene.stop();
      }
      else {
        const nextLevel = this.level + 1;
        this.scene.start('Game',{level: nextLevel});
      }
    }
  }
}
